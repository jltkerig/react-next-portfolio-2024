import {towns, seoMeta} from "../_seo/content";
import LocalPage from "../_seo/LocalPage";

const t = towns.belair;
export const metadata = seoMeta(t);

export default function Seo1() {
	return <LocalPage t={t} />;
}
