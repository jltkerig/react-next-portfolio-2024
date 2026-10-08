import {Fira_Sans_Extra_Condensed, Merriweather, Roboto_Condensed, Unna} from "next/font/google";

/*self-hosted google fonts, downloaded at build time. each sets a css variable used in index.css*/
const firaSans = Fira_Sans_Extra_Condensed({subsets: ["latin"], weight: ["300", "500", "700"], style: ["normal", "italic"], variable: "--font-fira-sans"});
const merriweather = Merriweather({subsets: ["latin"], weight: ["300", "400", "700"], style: ["normal", "italic"], variable: "--font-merriweather"});
const robotoCondensed = Roboto_Condensed({subsets: ["latin"], weight: ["300", "400", "500", "700"], style: ["normal", "italic"], variable: "--font-roboto-condensed"});
const unna = Unna({subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-unna"});

export const fontVariables = [firaSans, merriweather, robotoCondensed, unna].map((f) => f.variable).join(" ");
