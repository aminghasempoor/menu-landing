import {useTranslations} from "next-intl";

const Desktop = () => {
    const t = useTranslations("HomePage");
    return (
        <>
            {t("title")}
            Desktop
        </>
    )
}
export default Desktop;