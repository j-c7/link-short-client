import Head from "next/head";

const Layout = ({ children, pagina }) => {


    return (
        <div class="relative">
            <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(8,145,178,0.2),rgba(255,255,255,0))]"></div>
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