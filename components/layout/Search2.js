import { Menu } from '@headlessui/react'
import Link from "next/link"
export default function Search2() {
    return (
        <>
            <Menu as="div" className="search-box flex relative py-4 z-20">
                <Menu.Button as="div" className="search-icon cursor-pointer flex pr-2">
                    <img src="assets/imgs/template/icon-search-white.svg" alt="dark/light" className="flex-shrink-0 relative" />
                </Menu.Button>
                <Menu.Items as="div" className="search-box-content absolute top-full right-0 p-10 bg-neutral-0 dark:bg-neutral-dark-200 rounded-2xl shadow-sm mt-8 transition-all duration-300">
                    <h1 className="text-5xl font-bold text-neutral-950 dark:text-neutral-0 mb-4">Search <span className="font-light">Content</span></h1>
                    <div className="relative mb-8">
                        <form >
                            <div className="flex gap-4 mb-4 bg-neutral-0 dark:bg-neutral-dark-200 rounded-full p-1 pl-9 border border-neutral-300 dark:border-neutral-dark-300">
                                <input className="flex-1 focus:outline-none transition duration-200 bg-transparent" type="text" placeholder="Enter your key words" />
                                <button className="size-12 rounded-full bg-primary-light-950 transition duration-200 flex items-center justify-center gap-2" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width={22} height={22} viewBox="0 0 22 22" fill="none">
                                        <g clipPath="url(#clip0_135_1647)">
                                            <path d="M15.4202 17.2452L19.8183 21.6443C20.0585 21.8716 20.3775 22 20.7093 22C21.417 21.999 21.9991 21.416 21.9991 20.7084C21.9991 20.3775 21.8717 20.0585 21.6443 19.8183L17.2452 15.421C20.1162 11.6554 19.8321 6.24979 16.3946 2.81137L16.3882 2.80496L16.1333 2.55012C16.0977 2.51274 16.0577 2.47981 16.0142 2.45204C12.2467 -0.932293 6.43592 -0.814043 2.8105 2.81137C-0.936833 6.55962 -0.936833 12.6463 2.8105 16.3927C6.24983 19.832 11.6563 20.1171 15.4202 17.2452ZM14.5356 4.66946C17.2397 7.37637 17.2397 11.8286 14.5356 14.5355C11.8287 17.2388 7.37733 17.2388 4.67042 14.5355C1.96533 11.8286 1.96533 7.37637 4.67042 4.66946C7.37733 1.96529 11.8287 1.96529 14.5356 4.66946Z" fill="#151618" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_135_1647">
                                                <rect width={22} height={22} fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </button>
                            </div>
                        </form>
                        <div className="flex-col justify-start items-start gap-3 inline-flex mt-8">
                            <div className="text-neutral-950 dark:text-neutral-dark-950 text-base font-bold">Suggested
                            </div>
                            <div className="flex flex-wrap gap-4">
                                <Link href="/#" className="font-regular text-base text-neutral-700 link-hover hover:text-neutral-950 dark:text-neutral-0 dark:hover:text-neutral-dark-600">Events</Link>
                                <Link href="/#" className="font-regular text-base text-neutral-700 link-hover hover:text-neutral-950 dark:text-neutral-0 dark:hover:text-neutral-dark-600">Shop</Link>
                                <Link href="/#" className="font-regular text-base text-neutral-700 link-hover hover:text-neutral-950 dark:text-neutral-0 dark:hover:text-neutral-dark-600">Tech</Link>
                                <Link href="/#" className="font-regular text-base text-neutral-700 link-hover hover:text-neutral-950 dark:text-neutral-0 dark:hover:text-neutral-dark-600">Fashion</Link>
                                <Link href="/#" className="font-regular text-base text-neutral-700 link-hover hover:text-neutral-950 dark:text-neutral-0 dark:hover:text-neutral-dark-600">Books</Link>
                                <Link href="/#" className="font-regular text-base text-neutral-700 link-hover hover:text-neutral-950 dark:text-neutral-0 dark:hover:text-neutral-dark-600">Travel</Link>
                            </div>
                        </div>
                    </div>
                </Menu.Items>
            </Menu>
        </>
    )
}
