/*heavy serif quote marks as inline svg (replaces loading Vollkorn 800 just for “ ”).
colour comes from currentColor, size from the width of the svg (set via className/style)*/
const OPEN = "M22 76c-12 0-20-9-20-21C2 34 16 15 38 4l5 7C29 20 22 31 22 39c1 0 2-.1 3-.1 11 0 18 8 18 18 0 11-9 19-21 19zm52 0c-12 0-20-9-20-21C54 34 68 15 90 4l5 7C81 20 74 31 74 39c1 0 2-.1 3-.1 11 0 18 8 18 18 0 11-9 19-21 19z";

export default function QuoteMark({close = false, className, style}) {
	return (
		<svg className={className} style={style} viewBox="0 0 97 80" fill="currentColor" aria-hidden="true" focusable="false">
			<path d={OPEN} transform={close ? "rotate(180 48.5 40)" : undefined} />
		</svg>
	);
}
