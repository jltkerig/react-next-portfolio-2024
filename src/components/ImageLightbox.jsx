"use client";

import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import {motion, AnimatePresence} from "motion/react";

/*scroll: open tall images at full width and let the overlay scroll, instead of shrinking them to fit*/
/*fit: scale the image up to fill the screen, for small source files that would otherwise open smaller than the thumbnail*/
export default function ImageLightbox({imageUrl, id, className, alt = "", scroll = false, fit = false}) {
	const [isOpen, setIsOpen] = useState(false);
	const [mounted, setMounted] = useState(false); /*document.body only exists on the client*/
	useEffect(() => setMounted(true), []);
	const src = imageUrl.src ?? imageUrl; /*next image imports are objects*/

	return (
		<div>
			{/* Thumbnail Image */}
			{!isOpen && (
				<motion.img
					layoutId={`shared-image-${id}`} // Matches the ID of the expanded modal image
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
						style={{
							position: "fixed",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							backgroundColor: "rgba(0, 0, 0, 0.8)",
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
							layoutId={`shared-image-${id}`} // Automatically animates the transition from thumbnail size to this size
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
					</motion.div>
				)}
			</AnimatePresence>,
					document.body,
				)}
		</div>
	);
}
