import Link from "next/link"

export default function Menu2() {
    return (
        <>
            <ul className="xl:flex hidden container px-4 items-center justify-center relative">
                <li className="relative group">
                    <Link className="menu-item-light" href="/">Home</Link>
                    <ul className="z-100 absolute px-6 py-4 rounded-md left-4 bg-neutral-dark-0 dark:bg-neutral-dark-0 min-w-48 shadow-sm mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
                        <li><Link href="/" className="menu-sub-item-light">Home page 01</Link></li>
                        <li><Link href="/index-2" className="menu-sub-item-light">Home page 02</Link></li>
                        <li><Link href="/index-3" className="menu-sub-item-light">Home page 03</Link></li>
                    </ul>
                </li>
                <li className="relative group">
                    <Link className="menu-item-light" href="/#">Blog</Link>
                    <ul className="z-100 absolute px-6 py-4 rounded-md left-4 bg-neutral-dark-0 dark:bg-neutral-dark-0 min-w-48 shadow-sm mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
                        <li><Link href="/category" className="menu-sub-item-light">Category 01</Link></li>
                        <li><Link href="/category-2" className="menu-sub-item-light">Category 02</Link></li>
                        <li><Link href="/category-3" className="menu-sub-item-light">Category 03</Link></li>
                        <li><Link href="/category-4" className="menu-sub-item-light">Category 04</Link></li>
                        <li><Link href="/single" className="menu-sub-item-light">Single 01</Link></li>
                        <li><Link href="/single-2" className="menu-sub-item-light">Single 02</Link></li>
                    </ul>
                </li>
                <li className="relative group">
                    <Link className="menu-item-light" href="/#">Pages</Link>
                    <ul className="z-100 absolute px-6 py-4 rounded-md left-4 bg-neutral-dark-0 dark:bg-neutral-dark-0 min-w-48 shadow-sm mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
                        <li><Link href="/page-about" className="menu-sub-item-light">About me</Link></li>
                        <li><Link href="/page-author" className="menu-sub-item-light">Author</Link></li>
                        <li><Link href="/page-search" className="menu-sub-item-light">Search Results</Link></li>
                        <li><Link href="/page-contact" className="menu-sub-item-light">Contact</Link></li>
                        <li><Link href="/login" className="menu-sub-item-light">Login</Link></li>
                        <li><Link href="/register" className="menu-sub-item-light">Register</Link></li>
                        <li><Link href="/page-forgot-password" className="menu-sub-item-light">Forgot Password</Link></li>
                        <li><Link href="/page-404" className="menu-sub-item-light">Error 404</Link></li>
                    </ul>
                </li>
                <li className="group">
                    <Link href="/#" className="menu-item-light group-hover:border-white">Features</Link>
                    {/* MEGA MENU CONTENT */}
                    <div className="w-full fixed left-0 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
                        <div className="container px-4">
                            <div className="px-12 py-12 rounded-2xl bg-neutral-dark-0 dark:bg-neutral-dark-0 shadow-sm relative top-full left-0">
                                <h3 className="text-5xl mb-8 text-neutral-dark-950 dark:text-neutral-dark-950">Featured
                                    <span className="font-bold">Posts</span></h3>
                                <div className="grid grid-cols-3 w-full gap-10">
                                    <div className="flex flex-col gap-4">
                                        <div className="flex gap-6 content-center hover-up">
                                            <div className="max-w-28">
                                                <Link className="inline-block md:mb-0 overflow-hidden rounded-2xl" href="/single">
                                                    <img src="/assets/imgs/pages/thumb-01.png" alt="ideko" />
                                                </Link>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <Link className="text-base font-bold text-neutral-dark-950 dark:text-neutral-dark-950" href="/single">
                                                    Beyond the Pixels: My Art-Tech Lifestyle Journey
                                                </Link>
                                                <p className="text-sm font-medium text-neutral-700">
                                                    2 min read - June 8, 2024
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 content-center hover-up">
                                            <div className="max-w-28">
                                                <Link className="inline-block md:mb-0 overflow-hidden rounded-2xl" href="/single">
                                                    <img src="/assets/imgs/pages/thumb-02.png" alt="ideko" />
                                                </Link>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <Link className="text-base font-bold text-neutral-dark-950 dark:text-neutral-dark-950" href="/single">
                                                    Globetrotting in Style: A Journey Through My Lens
                                                </Link>
                                                <p className="text-sm font-medium text-neutral-700">
                                                    2 min read - June 8, 2024
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex gap-6 content-center hover-up">
                                            <div className="max-w-28">
                                                <Link className="inline-block md:mb-0 overflow-hidden rounded-2xl" href="/single">
                                                    <img src="/assets/imgs/pages/thumb-03.png" alt="ideko" />
                                                </Link>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <Link className="text-base font-bold text-neutral-dark-950 dark:text-neutral-dark-950" href="/single">
                                                    Canvas and Keyboard: An Art-Tech Affair
                                                </Link>
                                                <p className="text-sm font-medium text-neutral-700">
                                                    2 min read - June 8, 2024
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 content-center hover-up">
                                            <div className="max-w-28">
                                                <Link className="inline-block md:mb-0 overflow-hidden rounded-2xl" href="/single">
                                                    <img src="/assets/imgs/pages/thumb-04.png" alt="ideko" />
                                                </Link>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <Link className="text-base font-bold text-neutral-dark-950 dark:text-neutral-dark-950" href="/single">
                                                    Beyond the Pixels: My Art-Tech Lifestyle Journey
                                                </Link>
                                                <p className="text-sm font-medium text-neutral-700">
                                                    2 min read - June 8, 2024
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-4">
                                        <div className="flex gap-6 content-center hover-up">
                                            <div className="max-w-28">
                                                <Link className="inline-block md:mb-0 overflow-hidden rounded-2xl" href="/single">
                                                    <img src="/assets/imgs/pages/thumb-05.png" alt="ideko" />
                                                </Link>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <Link className="text-base font-bold text-neutral-dark-950 dark:text-neutral-dark-950" href="/single">
                                                    Chasing Sunsets: A Lifestyle in Living Color
                                                </Link>
                                                <p className="text-sm font-medium text-neutral-700">
                                                    2 min read - June 8, 2024
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex gap-6 content-center hover-up">
                                            <div className="max-w-28">
                                                <Link className="inline-block md:mb-0 overflow-hidden rounded-2xl" href="/single">
                                                    <img src="/assets/imgs/pages/thumb-06.png" alt="ideko" />
                                                </Link>
                                            </div>
                                            <div className="flex flex-col gap-3">
                                                <Link className="text-base font-bold text-neutral-dark-950 dark:text-neutral-dark-950" href="/single">
                                                    Exploring Life's Canvas: Style, Tech, and Beyond
                                                </Link>
                                                <p className="text-sm font-medium text-neutral-700">
                                                    2 min read - June 8, 2024
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* END MEGA MENU CONTENT */}
                </li>
                <li className="relative"><Link href="/page-contact" className="menu-item-light">Contact</Link></li>
                <li className="relative"><Link href="/diseaseDetection" className="menu-item-light">Disease Detection</Link></li>
                <li className="relative"><Link href="/cropInsurance" className="menu-item">Crop Insurance</Link></li>


            </ul>
        </>
    )
}
