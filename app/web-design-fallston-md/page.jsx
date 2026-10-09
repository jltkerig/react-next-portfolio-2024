import {towns, seoMeta} from "../_seo/content";
import LocalPage from "../_seo/LocalPage";

const t = towns.fallston;
export const metadata = seoMeta(t);

export default function FallstonPage() {
	return <LocalPage t={t} />;
}
