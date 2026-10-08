import {towns, seoMeta} from "../_seo/content";
import LocalPage from "../_seo/LocalPage";

const t = towns.abingdon;
export const metadata = seoMeta(t);

export default function Seo2() {
	return <LocalPage t={t} />;
}
