import { useTranslation } from "next-i18next";
import SchoolForm from "../forms/schoolForm";

const Register = () => {
    const { t } = useTranslation('common')
    return (
        <section className="container register">
            <h3 className="light linebox"><span className="line"></span>{t("school")}</h3>
            <h4 style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}><span>{t("textbig")}</span></h4>
            <SchoolForm t={t} />
        </section>
    );
}

export default Register;