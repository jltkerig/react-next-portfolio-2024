import {towns, seoMeta} from "../_seo/content";
import LocalPage from "../_seo/LocalPage";

const t = towns.whitehall;
export const metadata = seoMeta(t);

export default function WhiteHallPage() {
	return <LocalPage t={t} />;
}
