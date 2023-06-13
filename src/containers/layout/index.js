import Head from "next/head";
import Footer from "./footer";
import Header from "./header";

const HelmetLayout = ({ children, title, }) => {
    return (<>
        <Head>
            <title>{title}</title>
        </Head>
        <Header />
        <div className="tuyn"></div>
        <main className="scroll-main">
            {children}
        </main>
        <Footer />
    </>);
}

export default HelmetLayout;