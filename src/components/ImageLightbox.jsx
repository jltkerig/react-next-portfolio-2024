"use client";

import {useEffect, useRef, useState} from "react";
import {createPortal} from "react-dom";
import {motion, AnimatePresence} from "motion/react";

const PHONE = "(hover: none) and (pointer: coarse) and (max-width: 700px)";

/*every lightbox image on the page registers here, in page order, so phones can step through them with next/previous or a swipe*/
const registry = {};

/*scroll: open tall images at full width and let the overlay scroll, instead of shrinking them to fit*/
/*fit: scale the image up to fill the screen, for small source files that would otherwise open smaller than the thumbnail*/
export default function ImageLightbox({imageUrl, id, className, alt = "", scroll = false, fit = false, group = "page"}) {
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false); /*document.body only exists on the client*/
	const [phone, setPhone] = useState(false); /*phones get buttons and swipe; everyone else keeps the original lightbox*/
	const [position, setPosition] = useState({index: 0, total: 1});
	const touchStart = useRef(null);
	const src = imageUrl.src ?? imageUrl; /*next image imports are objects*/

	useEffect(() => {
		setMounted(true);
		const mq = window.matchMedia(PHONE);
		const update = () => setPhone(mq.matches);
		update();
		mq.addEventListener("change", update);
		return () => mq.removeEventListener("change", update);
	}, []);

	useEffect(() => {
		const entry = {id, open: () => setIsOpen(true), close: () => setIsOpen(false)};
		(registry[group] ||= []).push(entry);
		return () => {
			registry[group] = registry[group].filter((e) => e !== entry);
		};
	}, [id, group]);

	useEffect(() => {
		if (!isOpen) return;
		const list = registry[group] || [];
		setPosition({index: list.findIndex((e) => e.id === id), total: list.length});
		const onKey = (e) => {
			if (e.key === "Escape") setIsOpen(false);
			if (phone && e.key === "ArrowRight") step(1);
			if (phone && e.key === "ArrowLeft") step(-1);
		};
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isOpen, phone]);

	/*close this one and open its neighbour (wraps around)*/
	const step = (delta) => {
		const list = registry[group] || [];
		const i = list.findIndex((e) => e.id === id);
		if (i < 0 || list.length < 2) return;
		const next = list[(i + delta + list.length) % list.length];
		setIsOpen(false);
		next.open();
	};

	const onTouchStart = (e) => {
		const t = e.touches[0];
		touchStart.current = {x: t.clientX, y: t.clientY};
	};
	const onTouchEnd = (e) => {
		if (!touchStart.current) return;
		const t = e.changedTouches[0];
		const dx = t.clientX - touchStart.current.x;
		const dy = t.clientY - touchStart.current.y;
		touchStart.current = null;
		if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) step(dx < 0 ? 1 : -1);
	};

	const buttonStyle = {
		position: "fixed",
		padding: 0,
		width: 56,
		height: 56,
		border: "2px solid rgba(255, 255, 255, 0.85)",
		borderRadius: 12,
		background: "#085f71", /*same teal as the Submit button*/
		color: "#fff",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		zIndex: 1000,
	};

	return (
		<div>
			{/* Thumbnail Image */}
			{!isOpen && (
				<motion.img
					layoutId={phone ? undefined : `shared-image-${id}`} // Matches the ID of the expanded modal image
					src={src}
					alt={alt}
					onClick={() => setIsOpen(true)}
					className={className}
				/>
			)}

			{/* Expanded Modal Overlay, portaled to body so transformed/overflow-hidden parents can't trap it */}
			{mounted &&
				createPortal(
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						exit={{opacity: 0}}
						onClick={() => setIsOpen(false)}
						onTouchStart={phone ? onTouchStart : undefined}
						onTouchEnd={phone ? onTouchEnd : undefined}
						role="dialog"
						aria-modal="true"
						aria-label={alt || "Image"}
						style={{
							position: "fixed",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: phone ? "rgba(0, 0, 0, 0.92)" : "rgba(0, 0, 0, 0.8)",
							display: "flex",
							justifyContent: "center",
							alignItems: scroll ? "flex-start" : "center",
							overflowY: scroll ? "auto" : "visible",
							padding: scroll ? "40px 0" : 0,
							zIndex: 999,
							cursor: "zoom-out",
						}}
					>
						<motion.img
							layoutId={phone ? undefined : `shared-image-${id}`} // Automatically animates the transition from thumbnail size to this size
							src={src}
							alt={alt}
							style={
								scroll
									? {width: "min(1100px, 92vw)", height: "auto", borderRadius: "12px"}
									: fit
										? {width: "92vw", height: "90vh", objectFit: "contain"}
										: {maxWidth: "80%", maxHeight: "80%", borderRadius: "16px"}
							}
						/>
						{phone && (
							<>
								<button type="button" aria-label="Close" onClick={() => setIsOpen(false)} style={{...buttonStyle, top: 12, right: 12}}>
									<Icon d="M6 6l12 12M18 6L6 18" />
								</button>
								{position.total > 1 && (
									<>
										<button
											type="button"
											aria-label="Previous image"
											onClick={(e) => {
												e.stopPropagation();
												step(-1);
											}}
											style={{...buttonStyle, bottom: 20, left: 16}}
										>
											<Icon d="M15 5l-7 7 7 7" />
										</button>
										<span
											style={{
												position: "fixed",
												bottom: 36,
												left: "50%",
												transform: "translateX(-50%)",
												padding: "6px 14px",
												borderRadius: 999,
												background: "rgba(0, 0, 0, 0.6)",
												color: "#fff",
												fontFamily: "var(--font-roboto-condensed), sans-serif",
												fontSize: 18,
												zIndex: 1000,
											}}
										>
											{position.index + 1} / {position.total}
										</span>
										<button
											type="button"
											aria-label="Next image"
											onClick={(e) => {
												e.stopPropagation();
												step(1);
											}}
											style={{...buttonStyle, bottom: 20, right: 16}}
										>
											<Icon d="M9 5l7 7-7 7" />
										</button>
									</>
								)}
							</>
						)}
					</motion.div>
				)}
			</AnimatePresence>,
					document.body,
				)}
		</div>
	);
}

/*stroked line icon for the lightbox buttons: d is the svg path*/
function Icon({d}) {
	return (
		<svg viewBox="0 0 24 24" width="36" height="36" style={{flexShrink: 0}} fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
			<path d={d} />
		</svg>
	);
}
