'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    centeredSlides: true,
    breakpoints: {
        1200: {
            slidesPerView: 6,
        },
        992: {
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 2,
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
            <section className="my-20 py-16 flex flex-col gap-8 relative">
                <h3 className="text-3xl md:text-5xl text-neutral-950 dark:text-neutral-dark-950 font-light text-center z-10 relative">
                    Subscribe to <span className="font-bold">New posts</span></h3>
                <div className=" z-10 relative">
                    <div className="swiper-container post-slider-6">
                        <Swiper {...swiperOptions} className="swiper-wrapper pt-4">
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute rounded-3xl" src="/assets/imgs/pages/img-01.png" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Fashion</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                15</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute rounded-3xl" src="/assets/imgs/pages/img-02.png" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Health</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                26</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute rounded-3xl" src="/assets/imgs/pages/img-03.png" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Food</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                37</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute rounded-3xl" src="/assets/imgs/pages/img-04.png" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Travel</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                48</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute rounded-3xl" src="/assets/imgs/pages/img-05.png" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Sports</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                59</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute rounded-3xl" src="/assets/imgs/pages/img-01.png" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Fashion</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                15</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute rounded-3xl" src="/assets/imgs/pages/img-02.png" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Health</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                26</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute rounded-3xl" src="/assets/imgs/pages/img-03.png" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Food</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                37</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute rounded-3xl" src="/assets/imgs/pages/img-04.png" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Travel</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                48</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute rounded-3xl" src="/assets/imgs/pages/img-05.png" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Sports</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                59</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
                <div className="flex justify-between items-center gap-8 lg:gap-32 flex-col lg:flex-row z-10 relative">
                    <form className="max-w-full overflow-hidden mx-auto pt-4" >
                        <div className="flex flex-col md:flex-row mb-4 md:bg-neutral-0 dark:bg-neutral-dark-200 rounded-full p-1 md:border border-neutral-300 dark:border-neutral-dark-300">
                            <input className="focus:outline-none transition duration-200 py-4 bg-neutral-0 dark:bg-neutral-dark-200 rounded-full pl-6 w-full mb-2 md:mb-0 md:border-0 border border-neutral-300 dark:border-neutral-dark-300 " type="text" placeholder="Your email address" />
                            <button className="w-full sm:w-auto h-14 py-4 px-6 rounded-full bg-neutral-950 transition duration-200 flex items-center justify-center gap-2" type="submit">
                                <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 fill-primary-light-950" preserveAspectRatio="none">
                                    <path d="M19.8829 0.671875H2.8827C2.35277 0.673442 1.84497 0.890991 1.47025 1.277C1.09552 1.663 0.884334 2.18609 0.882812 2.73198V15.6118C0.884334 16.1577 1.09552 16.6807 1.47025 17.0668C1.84497 17.4528 2.35277 17.6703 2.8827 17.6719H19.8829C20.4129 17.6703 20.9207 17.4528 21.2954 17.0668C21.6701 16.6807 21.8813 16.1577 21.8828 15.6118V2.73198C21.8813 2.18609 21.6701 1.663 21.2954 1.277C20.9207 0.890991 20.4129 0.673442 19.8829 0.671875ZM19.6326 5.04989L11.3828 10.7158L3.13182 5.04989V2.98979L11.3817 8.65566L19.6315 2.98979L19.6326 5.04989Z">
                                    </path>
                                </svg>
                                <span className="text-neutral-0 font-medium text-2xl">Subscribe</span>
                            </button>
                        </div>
                    </form></div>
                <div className="absolute w-full top-0 left-0 z-0">
                    <div className="container px-4">
                        <div className="w-full h-[562px] bg-primary-light-950 dark:bg-primary-dark-950 rounded-[30px]" />
                    </div>
                </div>
            </section>

        </>
    )
}
