import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const HelmetLayout = ({ children, title, t, footer, lang, links }) => {
    return (<>
        <Head>
            <title>{title}</title>
        </Head>
        <Header t={t} />
        <main className="scroll-main">
            {children}
        </main>
        <Footer t={t} data={footer} lang={lang} links={links} />
    </>);
}

export default HelmetLayout;