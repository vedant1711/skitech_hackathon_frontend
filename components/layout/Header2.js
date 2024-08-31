import Link from "next/link"
import ThemeSwitch2 from "../elements/ThemeSwitch2"
import Language from "./Language"
import Menu2 from "./Menu2"
import MobileMenu from "./MobileMenu"
import Search2 from "./Search2"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className={`main-header main-header-dark w-full mx-auto flex justify-center py-2 z-50  dark:bg-primary-dark-0 ${scroll ? "fixed" : "relative"}`}>
                <div className="w-full flex justify-between items-center relative px-4 lg:px-16">
                    <h1>
                        <Link href="/">
                            <img src="/assets/imgs/template/logo-white.svg" alt="logo" className="flex-shrink-0 relative" />
                        </Link>
                    </h1>
                    <Menu2 />
                    <div className="flex justify-end align-middle content-center items-center relative gap-4">
                        <div className="language-switcher py-4 relative z-10">
                            <Language />
                        </div>
                        <ThemeSwitch2 />
                        <Search2 />
                        <div className="py-4 hover-up xl:flex hidden relative z-20">
                            <Link className="btn-primary" href="/page-login">
                                Sign in
                            </Link>
                        </div>
                        <button className="navbar-burger self-center xl:hidden">
                            <svg className="fill-neutral-0 dark:fill-neutral-dark-950" id="fi_2976215" enableBackground="new 0 0 464.205 464.205" height={26} viewBox="0 0 464.205 464.205" width={26} xmlns="http://www.w3.org/2000/svg">
                                <g>
                                    <g id="grip-solid-horizontal_1_">
                                        <path d="m435.192 406.18h-406.179c-16.024 0-29.013-12.99-29.013-29.013s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.99 29.013 29.013-.001 16.023-12.99 29.013-29.014 29.013z">
                                        </path>
                                        <path d="m435.192 261.115h-406.179c-16.024 0-29.013-12.989-29.013-29.012s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.012-29.014 29.012z">
                                        </path>
                                        <path d="m435.192 116.051h-406.179c-16.024 0-29.013-12.989-29.013-29.013s12.989-29.013 29.013-29.013h406.18c16.023 0 29.013 12.989 29.013 29.013s-12.99 29.013-29.014 29.013z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </button>
                    </div>
                    {/*Mobile Menu*/}
                    <MobileMenu isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />
                </div>
            </header>

        </>
    )
}
