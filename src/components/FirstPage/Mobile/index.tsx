import {useTranslations} from "next-intl";

const Mobile = () => {
    const t = useTranslations("HomePage");
    return (
        <>
            {t("title")}
            Mobile
        </>
    )
}
export default Mobile;