import SchoolForm from "../forms/schoolForm";

const Register = ({ t }) => {
    return (
        <section className="container register">
            <h3 className="light linebox"><span className="line"></span>{t("school")}</h3>
            <h4>{t("textbig")}</h4>
            <SchoolForm t={t} />
        </section>
    );
}

export default Register;