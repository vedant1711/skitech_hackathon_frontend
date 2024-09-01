import Link from "next/link"

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <div className={`navbar-menu fixed top-0 left-0 z-50 w-full h-full bg-neutral-950 bg-opacity-30 ${isMobileMenu ? "" : "hidden"} `}>
                <div className="fixed top-0 left-0 bottom-0 w-5/6 max-w-xs bg-neutral-0 dark:bg-neutral-dark-0">
                    <nav className="relative p-6 h-full overflow-y-auto">
                        <div className="flex flex-col h-full">
                            <h1 className="pt-2 pb-6">
                                <Link href="/">
                                    <img src="/assets/imgs/template/image.png" alt="logo" className="flex-shrink-0 relative dark:hidden" />
                                    <img src="/assets/imgs/template/logo-white.svg" alt="logo" className="flex-shrink-0 relative hidden dark:inline-block" />
                                </Link>
                            </h1>
                            <ul className="py-6 mb-6 border-y border-neutral-300 dark:border-neutral-dark-300">
                                <li className="has-children">
                                    <Link className="menu-mobile-item" href="/#">Home</Link>
                                    <ul className="sub-menu">
                                        <li><Link className="menu-mobile-sub-item" href="/">Home page 01</Link></li>
                                        <li><Link className="menu-mobile-sub-item" href="/index-2">Home page 02</Link></li>
                                        <li><Link className="menu-mobile-sub-item" href="/index-3">Home page 03</Link></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <Link className="menu-mobile-item" href="/#">Blog</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/category" className="menu-mobile-sub-item">Category 01</Link></li>
                                        <li><Link href="/category-2" className="menu-mobile-sub-item">Category 02</Link></li>
                                        <li><Link href="/category-3" className="menu-mobile-sub-item">Category 03</Link></li>
                                        <li><Link href="/category-4" className="menu-mobile-sub-item">Category 04</Link></li>
                                        <li><Link href="/single" className="menu-mobile-sub-item">Single 01</Link></li>
                                        <li><Link href="/single-2" className="menu-mobile-sub-item">Single 02</Link></li>
                                    </ul>
                                </li>
                                <li className="has-children">
                                    <Link className="menu-mobile-item" href="/#">Pages</Link>
                                    <ul className="sub-menu">
                                        <li><Link href="/page-about" className="menu-mobile-sub-item">About me</Link></li>
                                        <li><Link href="/page-author" className="menu-mobile-sub-item">Author</Link></li>
                                        <li><Link href="/page-search" className="menu-mobile-sub-item">Search Results</Link>
                                        </li>
                                        <li><Link href="/page-contact" className="menu-mobile-sub-item">Contact</Link></li>
                                        <li><Link href="/page-login" className="menu-mobile-sub-item">Login</Link></li>
                                        <li><Link href="/page-register" className="menu-mobile-sub-item">Register</Link></li>
                                        <li><Link href="/page-forgot-password" className="menu-mobile-sub-item">Forgot
                                            Password</Link></li>
                                        <li><Link href="/page-404" className="menu-mobile-sub-item">Error 404</Link></li>
                                    </ul>
                                </li>
                                <li><Link className="menu-mobile-item" href="/page-about">About</Link></li>
                                <li><Link className="menu-mobile-item" href="/page-contact">Contact</Link></li>
                                <li><Link className="menu-mobile-item" href="/diseaseDetection">Disease Detection</Link></li>
                                <li><Link className="menu-mobile-item" href="/cropInsurance">Crop Insurance</Link></li>

                            </ul>
                            <div className="flex flex-wrap flex-col mt-4">
                                <h4 className="text-lg text-neutral-950 dark:text-neutral-dark-950 font-bold mb-4">Stay
                                    Connectted</h4>
                                <p className="text-sm text-neutral-700 font-medium mb-4 leading-5">Imagine waking up to a
                                    dose of positivity, lifestyle hacks, and inspiration tailored just for you. That's
                                    what you get when you subscribe!</p>
                                <Link href="/page-login" className="w-full p-4 text-neutral-950 bg-primary-light-950 rounded-md font-bold text-sm">Subscribe
                                    Now</Link>
                            </div>
                        </div>
                    </nav>
                    <a className="navbar-close absolute top-5 p-4 right-3" onClick={handleMobileMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 20 20" fill="none" className="fill-neutral-950 dark:fill-neutral-dark-950">
                            <g clipPath="url(#clip0_85_6880)">
                                <path d="M1.42193 15.7358C1.05417 15.7571 0.692494 15.6349 0.413167 15.3948C-0.137722 14.8406 -0.137722 13.9456 0.413167 13.3914L12.4758 1.32871C13.0488 0.792556 13.9479 0.82236 14.484 1.39533C14.9689 1.91347 14.9971 2.70986 14.5502 3.26103L2.41647 15.3948C2.14074 15.6314 1.78487 15.7534 1.42193 15.7358Z" />
                                <path d="M13.4712 15.7338C13.0985 15.7322 12.7412 15.5843 12.4766 15.3218L0.413906 3.25906C-0.0964635 2.66307 -0.027076 1.76613 0.568917 1.25571C1.10086 0.800179 1.88536 0.800179 2.41725 1.25571L14.551 13.3184C15.1238 13.8547 15.1534 14.7538 14.6171 15.3267C14.5958 15.3495 14.5738 15.3715 14.551 15.3928C14.2539 15.6512 13.8629 15.7747 13.4712 15.7338Z" />
                            </g>
                            <defs>
                                <clipPath id="clip0_85_6880">
                                    <rect width={15} height={15} fill="white" transform="translate(0 0.828125)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}
