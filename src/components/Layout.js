import Head from "next/head";

const Layout = ({children, pagina}) => {

    
    return (
        <div>
            <Head>
                <title>{`Shork - ${pagina}`}</title>
            </Head>
            <div className="py-20 mx-auto xl:w-[72rem]">
                {children}
            </div>
        </div>
    );
}

export default Layout;