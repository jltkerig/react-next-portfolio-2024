"use client";

import {useState} from "react";
import {motion, AnimatePresence} from "motion/react";

export default function ImageLightbox({imageUrl, id, className, alt = ""}) {
	const [isOpen, setIsOpen] = useState(false);
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

			{/* Expanded Modal Overlay */}
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
							alignItems: "center",
							zIndex: 999,
							cursor: "zoom-out",
						}}
					>
						<motion.img
							layoutId={`shared-image-${id}`} // Automatically animates the transition from thumbnail size to this size
							src={src}
							alt={alt}
							style={{maxWidth: "80%", maxHeight: "80%", borderRadius: "16px"}}
						/>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
