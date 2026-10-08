import {Caveat, Courier_Prime, Fira_Sans_Extra_Condensed, Merriweather, Roboto_Condensed, Unna, Vollkorn} from "next/font/google";

/*self-hosted google fonts, downloaded at build time. each sets a css variable used in index.css*/
const caveat = Caveat({subsets: ["latin"], weight: ["400"], variable: "--font-caveat"});
const courierPrime = Courier_Prime({subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-courier-prime"});
const firaSans = Fira_Sans_Extra_Condensed({subsets: ["latin"], weight: ["300", "500", "700"], style: ["normal", "italic"], variable: "--font-fira-sans"});
const merriweather = Merriweather({subsets: ["latin"], weight: ["300", "400", "700"], style: ["normal", "italic"], variable: "--font-merriweather"});
const robotoCondensed = Roboto_Condensed({subsets: ["latin"], weight: ["300", "400", "500", "700"], style: ["normal", "italic"], variable: "--font-roboto-condensed"});
const unna = Unna({subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"], variable: "--font-unna"});
const vollkorn = Vollkorn({subsets: ["latin"], weight: ["800"], variable: "--font-vollkorn"});

export const fontVariables = [caveat, courierPrime, firaSans, merriweather, robotoCondensed, unna, vollkorn].map((f) => f.variable).join(" ");
