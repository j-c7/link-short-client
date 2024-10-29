import HeaderRoute from "./HeaderRoute";

const Header = () => {
    return (
        <header className="fixed w-full mx-auto z-10 bg-[#1d1d1d]">
            <div className="container flex flex-row items-center justify-between mx-auto xl:w-[72rem] h-16 lg:px-px px-4">
                <button id="burger-show-menu" className="visible sm:invisible">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon icon-tabler icons-tabler-outline icon-tabler-baseline-density-medium">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 20h16" />
                        <path d="M4 12h16" />
                        <path d="M4 4h16" />
                    </svg>
                </button>

                {/*<div className="flex flex-row gap-3 items-center invisible sm:visible">
                    <HeaderRoute route={"/"} name={'Inicio'} target="" />
                    <HeaderRoute route={"/register"} name="Registrarse" target="" />
                    <HeaderRoute route={"/login"} name={"Iniciar Sesión"} target="" />
                </div>*/}
            </div>
        </header>
    )
}

export default Header;