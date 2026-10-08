/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export" /*static html in out/ for github pages*/,
	trailingSlash: true /*about/index.html so github pages serves /about/*/,
	images: {unoptimized: true},
	turbopack: {root: import.meta.dirname} /*project root, ignore lockfiles in parent folders*/,
};

export default nextConfig;
