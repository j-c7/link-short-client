import Head from "next/head";
import Header from "./header/Header";

const Layout = ({children, pagina}) => {
    return (
        <div>
            <Head>
                <title> Shork - {pagina} </title>
            </Head>
            <Header />
            <div className="py-20 mx-auto xl:w-[72rem]">
                {children}
            </div>
        </div>
    );
}

export default Layout;