
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default async function Search() {
    return (
        <>
            <Layout>
                <section className="py-12">
                    <div className="container px-4">
                        <div className="flex flex-col gap-8 items-center justify-center text-center">
                            {/* breadcrumb */}
                            <div className="hidden md:flex gap-2.5  justify-start items-center h-12 px-7 py-3.5 bg-neutral-0 dark:bg-neutral-dark-0 rounded-3xl border border-neutral-300 dark:border-neutral-dark-300">
                                <Link href="/" className="text-neutral-700 dark:text-neutral-dark-700 text-base font-medium  leading-normal">Home</Link>
                                <svg xmlns="http://www.w3.org/2000/svg" width={8} height={12} viewBox="0 0 8 12" className="fill-neutral-700 dark:fill-neutral-dark-700">
                                    <path d="M1.52344 11.9961C1.24219 11.9961 0.992188 11.9023 0.804688 11.7148C0.398438 11.3398 0.398438 10.6836 0.804688 10.3086L5.08594 5.99609L0.804688 1.71484C0.398438 1.33984 0.398438 0.683594 0.804688 0.308594C1.17969 -0.0976562 1.83594 -0.0976562 2.21094 0.308594L7.21094 5.30859C7.61719 5.68359 7.61719 6.33984 7.21094 6.71484L2.21094 11.7148C2.02344 11.9023 1.77344 11.9961 1.52344 11.9961Z" />
                                </svg>
                                <Link href="/category" className="text-neutral-700 dark:text-neutral-dark-700 text-base font-medium leading-normal">Search
                                    Results</Link>
                            </div>
                            <h1 className="heading-1 mb-0">
                                Search <span className="font-light">Results</span>
                            </h1>
                            <p className="text-2xl font-medium text-center text-neutral-700 dark:text-neutral-dark-700">We found 25
                                articles for <span className="font-bold text-neutral-950 dark:text-neutral-dark-950">“Lifestyle”</span>
                                key words </p>
                        </div>
                    </div>
                </section>

                <section className="py-12 pb-24">
                    <div className="container px-4">
                        <div className="flex flex-col gap-[30px] max-w-[850px] mx-auto">
                            <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                    <img src="/assets/imgs/pages/img-01.png" />
                                </Link>
                                <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                    <div className="justify-start items-center gap-5 inline-flex">
                                        <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                Technology</div>
                                        </Link>
                                        <div className="justify-start items-center gap-2 flex">
                                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                January 15, 2024 - 3 mins read</div>
                                        </div>
                                    </div>
                                    <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">Transformative Learning: Adapting to Educational Innovations</Link></h3>
                                </div>
                            </div>
                            <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                    <img src="/assets/imgs/pages/img-02.png" />
                                </Link>
                                <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                    <div className="justify-start items-center gap-5 inline-flex">
                                        <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                Science</div>
                                        </Link>
                                        <div className="justify-start items-center gap-2 flex">
                                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                February 22, 2024 - 4 mins read</div>
                                        </div>
                                    </div>
                                    <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">Unraveling the Mysteries of Dark Matter</Link></h3>
                                </div>
                            </div>
                            <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                    <img src="/assets/imgs/pages/img-03.png" />
                                </Link>
                                <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                    <div className="justify-start items-center gap-5 inline-flex">
                                        <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                Travel</div>
                                        </Link>
                                        <div className="justify-start items-center gap-2 flex">
                                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                March 10, 2024 - 5 mins read</div>
                                        </div>
                                    </div>
                                    <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">A Journey Through the Enchanting Landscapes of New Zealand</Link></h3>
                                </div>
                            </div>
                            <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                    <img src="/assets/imgs/pages/img-04.png" />
                                </Link>
                                <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                    <div className="justify-start items-center gap-5 inline-flex">
                                        <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                Health</div>
                                        </Link>
                                        <div className="justify-start items-center gap-2 flex">
                                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                April 5, 2024 - 2 mins read</div>
                                        </div>
                                    </div>
                                    <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">The Importance of Mental Health in Modern Society</Link></h3>
                                </div>
                            </div>
                            <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                    <img src="/assets/imgs/pages/img-05.png" />
                                </Link>
                                <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                    <div className="justify-start items-center gap-5 inline-flex">
                                        <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                Fashion</div>
                                        </Link>
                                        <div className="justify-start items-center gap-2 flex">
                                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                May 20, 2024 - 4 mins read</div>
                                        </div>
                                    </div>
                                    <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">Trends to Watch: Fashion Forecast for the Next Season</Link></h3>
                                </div>
                            </div>
                            <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                    <img src="/assets/imgs/pages/img-14.png" />
                                </Link>
                                <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                    <div className="justify-start items-center gap-5 inline-flex">
                                        <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                Food</div>
                                        </Link>
                                        <div className="justify-start items-center gap-2 flex">
                                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                June 8, 2024 - 3 mins read</div>
                                        </div>
                                    </div>
                                    <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">Culinary Delights: Exploring Exotic Flavors Around the World</Link></h3>
                                </div>
                            </div>
                            <div className="flex-col md:flex-row justify-start items-center gap-5 inline-flex hover-up border-2 bg-neutral-0 dark:bg-neutral-dark-0 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl overflow-hidden w-full p-2">
                                <Link href="/single" className="rounded-2xl overflow-hidden md:max-w-[280px]">
                                    <img src="/assets/imgs/pages/img-15.png" />
                                </Link>
                                <div className="flex-col justify-start items-start gap-3.5 flex pl-4 pr-6 pb-4">
                                    <div className="justify-start items-center gap-5 inline-flex">
                                        <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                Sports</div>
                                        </Link>
                                        <div className="justify-start items-center gap-2 flex">
                                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                                July 14, 2024 - 5 mins read</div>
                                        </div>
                                    </div>
                                    <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-xl font-bold leading-snug item-link" href="/single">The Rise of E-Sports: A New Era in Competitive Gaming</Link></h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
