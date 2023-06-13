import { useTranslation } from "next-i18next";
import SchoolForm from "../forms/schoolForm";

const Register = () => {
    const { t } = useTranslation('common')
    return (
        <section className="container register">
            <div className="red" style={{ display: 'flex', justifyContent: 'center', }}><h3 className="linebox bigh3"><span className="line line-red"></span>{t("school")}</h3></div>
            <h4 style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}><span>{t("textbig")}</span></h4>
            <SchoolForm t={t} />
        </section >
    );
}

export default Register;