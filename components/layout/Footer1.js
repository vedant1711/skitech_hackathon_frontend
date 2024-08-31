import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="w-full pb-20">
                <div className="container px-4">
                    <div className="border-t border-neutral-950 dark:border-neutral-dark-500 pb-20 " />
                    <div className="grid lg:grid-cols-2">
                        <div className="mb-8 lg:mb-4 lg:max-w-96">
                            <h1 className="mb-8">
                                <Link href="/">
                                    <img src="/assets/imgs/template/logo.svg" alt="logo" className="flex-shrink-0 relative dark:hidden" />
                                    <img src="/assets/imgs/template/logo-white.svg" alt="logo" className="flex-shrink-0 relative hidden dark:inline-block" />
                                </Link>
                            </h1>
                            <p className="font-medium text-neutral-950 dark:text-neutral-dark-950 mb-8 lg:mb-12 max-w-[350px]">
                                It involves entrepreneurship, management, marketing, finance, and many other aspects. Businesses
                                aim to generate
                            </p>
                            <div className="flex gap-2">
                                <div className="w-12 h-12 rounded-[5px] flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-primary-light-200 dark:hover:bg-primary-dark-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={9} height={16} viewBox="0 0 9 16" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                        <path d="M8.03125 9H5.6875V16H2.5625V9H0V6.125H2.5625V3.90625C2.5625 1.40625 4.0625 0 6.34375 0C7.4375 0 8.59375 0.21875 8.59375 0.21875V2.6875H7.3125C6.0625 2.6875 5.6875 3.4375 5.6875 4.25V6.125H8.46875L8.03125 9Z" />
                                    </svg>
                                </div>
                                <div className="w-12 h-12 rounded-[5px] flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-primary-light-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={17} height={16} viewBox="0 0 17 16" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                        <g clipPath="url(#clip0_191_5465)">
                                            <path d="M10.083 6.77491L15.9113 0H14.5302L9.46951 5.88256L5.42755 0H0.765625L6.87786 8.89547L0.765625 16H2.14682L7.49104 9.78782L11.7596 16H16.4216L10.0827 6.77491H10.083ZM8.1913 8.97384L7.57201 8.08805L2.64448 1.03974H4.76591L8.74248 6.72795L9.36178 7.61374L14.5308 15.0075H12.4094L8.1913 8.97418V8.97384Z" />
                                        </g>
                                    </svg>
                                </div>
                                <div className="w-12 h-12 rounded-[5px] flex justify-center items-center border border-neutral-300 dark:border-neutral-dark-300 cursor-pointer hover-up hover:bg-primary-light-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={15} height={14} viewBox="0 0 15 14" className="fill-neutral-950 dark:fill-neutral-dark-950">
                                        <path d="M7.60938 3.39062C9.57812 3.39062 11.2031 5.01562 11.2031 6.98438C11.2031 8.98438 9.57812 10.5781 7.60938 10.5781C5.60938 10.5781 4.01562 8.98438 4.01562 6.98438C4.01562 5.01562 5.60938 3.39062 7.60938 3.39062ZM7.60938 9.32812C8.89062 9.32812 9.92188 8.29688 9.92188 6.98438C9.92188 5.70312 8.89062 4.67188 7.60938 4.67188C6.29688 4.67188 5.26562 5.70312 5.26562 6.98438C5.26562 8.29688 6.32812 9.32812 7.60938 9.32812ZM12.1719 3.26562C12.1719 2.79688 11.7969 2.42188 11.3281 2.42188C10.8594 2.42188 10.4844 2.79688 10.4844 3.26562C10.4844 3.73438 10.8594 4.10938 11.3281 4.10938C11.7969 4.10938 12.1719 3.73438 12.1719 3.26562ZM14.5469 4.10938C14.6094 5.26562 14.6094 8.73438 14.5469 9.89062C14.4844 11.0156 14.2344 11.9844 13.4219 12.8281C12.6094 13.6406 11.6094 13.8906 10.4844 13.9531C9.32812 14.0156 5.85938 14.0156 4.70312 13.9531C3.57812 13.8906 2.60938 13.6406 1.76562 12.8281C0.953125 11.9844 0.703125 11.0156 0.640625 9.89062C0.578125 8.73438 0.578125 5.26562 0.640625 4.10938C0.703125 2.98438 0.953125 1.98438 1.76562 1.17188C2.60938 0.359375 3.57812 0.109375 4.70312 0.046875C5.85938 -0.015625 9.32812 -0.015625 10.4844 0.046875C11.6094 0.109375 12.6094 0.359375 13.4219 1.17188C14.2344 1.98438 14.4844 2.98438 14.5469 4.10938ZM13.0469 11.1094C13.4219 10.2031 13.3281 8.01562 13.3281 6.98438C13.3281 5.98438 13.4219 3.79688 13.0469 2.85938C12.7969 2.26562 12.3281 1.76562 11.7344 1.54688C10.7969 1.17188 8.60938 1.26562 7.60938 1.26562C6.57812 1.26562 4.39062 1.17188 3.48438 1.54688C2.85938 1.79688 2.39062 2.26562 2.14062 2.85938C1.76562 3.79688 1.85938 5.98438 1.85938 6.98438C1.85938 8.01562 1.76562 10.2031 2.14062 11.1094C2.39062 11.7344 2.85938 12.2031 3.48438 12.4531C4.39062 12.8281 6.57812 12.7344 7.60938 12.7344C8.60938 12.7344 10.7969 12.8281 11.7344 12.4531C12.3281 12.2031 12.8281 11.7344 13.0469 11.1094Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols- lg:grid-cols-3 md:grid-cols-3">
                            <div className="mb-4">
                                <h6 className="text-base font-bold text-neutral-700 dark:text-neutral-dark-700 mb-2">Category</h6>
                                <ul>
                                    <li className="footer-menu">
                                        <Link href="/category" className="text-base font-regular text-neutral-950 dark:text-neutral-dark-950">Trending</Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link href="/category-2" className="text-base font-regular text-neutral-950 dark:text-neutral-dark-950">Fashion</Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link href="/category-3" className="text-base font-regular text-neutral-950 dark:text-neutral-dark-950">Technology</Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link href="/category-4" className="text-base font-regular text-neutral-950 dark:text-neutral-dark-950">Healthy</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h6 className="text-base font-bold text-neutral-700 dark:text-neutral-dark-700 mb-2">Pages</h6>
                                <ul>
                                    <li className="footer-menu">
                                        <Link href="/page-about" className="text-base font-regular text-neutral-950 dark:text-neutral-dark-950">About
                                            me</Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link href="/page-contact" className="text-base font-regular text-neutral-950 dark:text-neutral-dark-950">Contact</Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link href="/page-author" className="text-base font-regular text-neutral-950 dark:text-neutral-dark-950">Author</Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link href="/page-search" className="text-base font-regular text-neutral-950 dark:text-neutral-dark-950">Search
                                            results</Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h6 className="text-base font-bold text-neutral-700 dark:text-neutral-dark-700 mb-2">Account</h6>
                                <ul>
                                    <li className="footer-menu">
                                        <Link href="/page-register" className="text-base font-regular text-neutral-950 dark:text-neutral-dark-950">Register</Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link href="/page-login" className="text-base font-regular text-neutral-950 dark:text-neutral-dark-950">Login</Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link href="/page-forgot-password" className="text-base font-regular text-neutral-950 dark:text-neutral-dark-950">Forgot
                                            Password</Link>
                                    </li>
                                    <li className="footer-menu">
                                        <Link href="/page-404" className="text-base font-regular text-neutral-950 dark:text-neutral-dark-950">404</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8">
                        <p className="text-sm text-neutral-700 dark:text-neutral-dark-700">© IDEKO 2024. Designed by <Link href="/https://alithemes.com" className="text-neutral-950 dark:text-neutral-dark-950">Alithemes</Link>
                        </p>
                    </div>
                </div>
            </footer>

        </>
    )
}
