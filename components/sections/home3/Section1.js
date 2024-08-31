'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
    },
    breakpoints: {
        1800: {
            slidesPerView: 1,
        },
        1200: {
            slidesPerView: 1,
        },
        992: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        0: {
            slidesPerView: 1,
        },
    },
}

export default function Section1() {
    return (
        <>
            <section className="pb-16 pt-32">
                <div className="container px-4">
                    <div className="swiper-container post-slider-1">
                        <Swiper {...swiperOptions} className="swiper-wrapper pt-4">
                            <SwiperSlide>
                                <div className="flex flex-col md:grid md:grid-cols-2 md:col-spans-2 lg:grid-cols-4 gap-[30px]">
                                    <div className="md:col-span-2">
                                        <div className="grid md:grid-cols-2 justify-start items-center gap-4 rounded-3xl overflow-hidden border-2 bg-neutral-950 border-neutral-700 dark:border-neutral-dark-300 hover-up">
                                            <Link href="/single" className="rounded-2xl overflow-hidden">
                                                <img className="md:min-h-[340px] w-auto" src="/assets/imgs/pages/img-18.png" />
                                            </Link>
                                            <div className="flex flex-col justify-start items-start gap-4 p-8">
                                                <div className="justify-start items-center gap-5 flex">
                                                    <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                                        <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                            Lifestyle</div>
                                                    </Link>
                                                    <div className="justify-start items-center gap-2 flex">
                                                        <Link href="/author" className="w-9 h-9"><img className="w-9 h-9 rounded-3xl" src="/assets/imgs/avatar/avatar-01.png" /></Link>
                                                        <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-300">
                                                            <Link href="/author">Rose M.</Link></div>
                                                    </div>
                                                </div>
                                                <h4>
                                                    <Link className="text-neutral-0 dark:text-neutral-dark-950 text-lg font-bold item-link" href="/single">Fashionable Bytes: Blending Style with Tech Savvy</Link>
                                                </h4>
                                                <p className="text-neutral-700 text-sm font-medium leading-snug dark:text-neutral-dark-300">
                                                    Fecessitatibus maiores aut quo repellat dolore dolor. Ipsam iusto sit illo
                                                    enim officia soluta qui.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-3xl bg-neutral-950 border-2 border-neutral-dark-300 dark:border-neutral-dark-300 flex-col justify-start items-start inline-flex overflow-hidden hover-up">
                                        <div className="justify-start items-center gap-4 flex flex-col">
                                            <Link href="/single" className="rounded-[18px] overflow-hidden max-h-[180px]">
                                                <img src="/assets/imgs/pages/img-02.png" />
                                            </Link>
                                            <div className="p-4 flex-col gap-4 inline-flex items-center md:items-start">
                                                <div className="justify-start items-center gap-2 inline-flex">
                                                    <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                                        <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                            Technology</div>
                                                    </Link>
                                                    <div className="justify-start items-center gap-2 flex">
                                                        <div className="text-neutral-700 text-sm font-regular leading-none dark:text-neutral-dark-700">
                                                            26 Jan 2024</div>
                                                    </div>
                                                </div>
                                                <h3 className="text-center md:text-start mb-4 md-mb-0">
                                                    <Link className="text-neutral-dark-950 dark:text-neutral-dark-950 text-lg font-bold leading-tight item-link" href="/single">Canvas and Keyboard: An Art-Tech Affair</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-3xl bg-neutral-950 border-2 border-neutral-dark-300 dark:border-neutral-dark-300 flex-col justify-start items-start inline-flex overflow-hidden hover-up">
                                        <div className="justify-start items-center gap-4 flex flex-col">
                                            <Link href="/single" className="rounded-[18px] overflow-hidden max-h-[180px]">
                                                <img src="/assets/imgs/pages/img-04.png" />
                                            </Link>
                                            <div className="p-4 flex-col gap-4 inline-flex items-center md:items-start">
                                                <div className="justify-start items-center gap-2 inline-flex">
                                                    <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                                        <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                            Technology</div>
                                                    </Link>
                                                    <div className="justify-start items-center gap-2 flex">
                                                        <div className="text-neutral-700 text-sm font-regular leading-none dark:text-neutral-dark-700">
                                                            26 Jan 2024</div>
                                                    </div>
                                                </div>
                                                <h3 className="text-center md:text-start mb-4 md-mb-0">
                                                    <Link className="text-neutral-dark-950 dark:text-neutral-dark-950 text-lg font-bold leading-tight item-link" href="/single">Navigating Life's Tapestry: My Lifestyle
                                                        Chronicle</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="flex flex-col md:grid md:grid-cols-2 md:col-spans-2 lg:grid-cols-4 gap-[30px]">
                                    <div className="md:col-span-2">
                                        <div className="grid md:grid-cols-2 justify-start items-center gap-4 rounded-3xl overflow-hidden bg-neutral-950 border-2 border-neutral-700 dark:border-neutral-dark-300 hover-up">
                                            <Link href="/single" className="rounded-2xl overflow-hidden">
                                                <img className="md:min-h-[340px] w-auto" src="/assets/imgs/pages/img-19.png" />
                                            </Link>
                                            <div className="flex flex-col justify-start items-start gap-4 p-8">
                                                <div className="justify-start items-center gap-5 flex">
                                                    <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                                        <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                            Lifestyle</div>
                                                    </Link>
                                                    <div className="justify-start items-center gap-2 flex">
                                                        <Link href="/author" className="w-9 h-9"><img className="w-9 h-9 rounded-3xl" src="/assets/imgs/avatar/avatar-01.png" /></Link>
                                                        <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-300">
                                                            <Link href="/author">Rose M.</Link></div>
                                                    </div>
                                                </div>
                                                <h4>
                                                    <Link className="text-neutral-0 dark:text-neutral-dark-950 text-lg font-bold item-link" href="/single">Innovation in Space Exploration: New Frontiers
                                                        Await</Link>
                                                </h4>
                                                <p className="text-neutral-700 text-sm font-medium leading-snug dark:text-neutral-dark-300">
                                                    Fecessitatibus maiores aut quo repellat dolore dolor. Ipsam iusto sit illo
                                                    enim officia soluta qui.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-3xl bg-neutral-950 border-2 border-neutral-dark-300 dark:border-neutral-dark-300 flex-col justify-start items-start inline-flex overflow-hidden hover-up">
                                        <div className="justify-start items-center gap-4 flex flex-col">
                                            <Link href="/single" className="rounded-[18px] overflow-hidden max-h-[180px]">
                                                <img src="/assets/imgs/pages/img-03.png" />
                                            </Link>
                                            <div className="p-4 flex-col gap-4 inline-flex items-center md:items-start">
                                                <div className="justify-start items-center gap-2 inline-flex">
                                                    <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                                        <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                            Technology</div>
                                                    </Link>
                                                    <div className="justify-start items-center gap-2 flex">
                                                        <div className="text-neutral-700 text-sm font-regular leading-none dark:text-neutral-dark-700">
                                                            26 Jan 2024</div>
                                                    </div>
                                                </div>
                                                <h3 className="text-center md:text-start mb-4 md-mb-0">
                                                    <Link className="text-neutral-dark-950 dark:text-neutral-dark-950 text-lg font-bold leading-tight item-link" href="/single">The Impact of Social Media on Society</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="rounded-3xl bg-neutral-950 border-2 border-neutral-dark-300 dark:border-neutral-dark-300 flex-col justify-start items-start inline-flex overflow-hidden hover-up">
                                        <div className="justify-start items-center gap-4 flex flex-col">
                                            <Link href="/single" className="rounded-[18px] overflow-hidden max-h-[180px]">
                                                <img src="/assets/imgs/pages/img-05.png" />
                                            </Link>
                                            <div className="p-4 flex-col gap-4 inline-flex items-center md:items-start">
                                                <div className="justify-start items-center gap-2 inline-flex">
                                                    <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                                        <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                                            Technology</div>
                                                    </Link>
                                                    <div className="justify-start items-center gap-2 flex">
                                                        <div className="text-neutral-700 text-sm font-regular leading-none dark:text-neutral-dark-700">
                                                            26 Jan 2024</div>
                                                    </div>
                                                </div>
                                                <h3 className="text-center md:text-start mb-4 md-mb-0">
                                                    <Link className="text-neutral-dark-950 dark:text-neutral-dark-950 text-lg font-bold leading-tight item-link" href="/single">Diversity in Cinema: Representations in Film</Link>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="pt-8 flex justify-center">
                        <div className="swiper-pagination dark" />
                    </div>
                </div>
            </section>

        </>
    )
}
