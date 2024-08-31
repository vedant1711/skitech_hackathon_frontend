'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
    },
    centeredSlides: true,
    breakpoints: {
        1200: {
            slidesPerView: 4,
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



export default function Hero() {
    return (
        <>
            <section className="relative py-20 lg:py-24 lg:mb-16">
                <div className="container px-4">
                    <h3 className="heading-2">Hello Fellow Farmers!!<span className="font-light"> </span></h3>
                    <p className="heading-3">Welcome to FarmFit<span className="font-light"> </span></p>
                    <div className="swiper-container post-slider-4">
                        <Swiper {...swiperOptions} className="swiper-wrapper pt-4">
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 h-full absolute rounded-3xl" alt="" src="/assets/imgs/pages/rice.jpg" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Rice</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                17</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute h-full rounded-3xl" alt="" src="/assets/imgs/pages/potato.jpg" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Potato</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                32</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute h-full rounded-3xl" alt="" src="/assets/imgs/pages/corn.jpeg" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Corn</Link>
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
                                    <Link href="/category"><img className="left-0 top-0 absolute  rounded-3xl" alt="" src="/assets/imgs/pages/wheat.jpg" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Wheat</Link>
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
                                    <Link href="/category"><img className="left-0 top-0 absolute h-full rounded-3xl" alt="" src="/assets/imgs/pages/tomato.jpg" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Tomato</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                24</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute h-full rounded-3xl" alt="" src="/assets/imgs/pages/cotton.jpg" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Cotton</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                17</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 absolute h-full rounded-3xl" alt="" src="/assets/imgs/pages/coffee.jpg" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">coffee</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                32</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide hover-up">
                                <div className="w-full h-52 relative rounded-3xl overflow-hidden">
                                    <Link href="/category"><img className="left-0 top-0 h-full absolute rounded-3xl" alt="" src="/assets/imgs/pages/tea.jpg" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Tea</Link>
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
                                    <Link href="/category"><img className="left-0 top-0 absolute h-full rounded-3xl" alt="" src="/assets/imgs/pages/onion.jpg" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Onion</Link>
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
                                    <Link href="/category"><img className="left-0 top-0 absolute h-full rounded-3xl" alt="" src="/assets/imgs/pages/sugarcane.jpg" /></Link>
                                    <div className="px-[13px] py-[9px] left-[10px] top-[150px] absolute bg-neutral-0 dark:bg-neutral-dark-0 rounded-[26px] justify-center items-center gap-2.5 inline-flex">
                                        <Link href="/category" className="text-neutral-950 dark:text-neutral-dark-950 text-sm font-medium">Sugarcane</Link>
                                        <div className="w-[22px] h-[22px] relative">
                                            <div className="w-7 h-7 left-[-3px] top-[-3px] absolute bg-primary-light-950 rounded-full">
                                            </div>
                                            <div className="left-[3px] top-[5px] absolute text-center text-neutral-950 text-xs font-medium  leading-3">
                                                24</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    {/* <div className="flex justify-between items-center gap-8 lg:gap-32 mt-12 flex-col lg:flex-row">
                        <p className="text-neutral-950 dark:text-neutral-dark-950 text-base font-medium lg:w-2/4">Goods and
                            services. It involves entrepreneurship, management, marketing, finance, and many other aspects.
                            Businesses aim to generate profit while meeting</p>
                        <form className="max-w-full overflow-hidden" >
                            <div className="flex flex-col md:flex-row mb-4 md:bg-neutral-0 dark:bg-neutral-dark-200 rounded-full p-1">
                                <input className="focus:outline-none transition duration-200 py-4 bg-neutral-0 dark:bg-neutral-dark-200 rounded-full pl-6 w-full mb-2 md:mb-0" type="text" placeholder="Your email address" />
                                <button className="w-full sm:w-auto h-14 py-4 px-6 rounded-full bg-neutral-950 transition duration-200 flex items-center justify-center gap-2" type="submit">
                                    <svg width={22} height={18} viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 fill-primary-light-950" preserveAspectRatio="none">
                                        <path d="M19.8829 0.671875H2.8827C2.35277 0.673442 1.84497 0.890991 1.47025 1.277C1.09552 1.663 0.884334 2.18609 0.882812 2.73198V15.6118C0.884334 16.1577 1.09552 16.6807 1.47025 17.0668C1.84497 17.4528 2.35277 17.6703 2.8827 17.6719H19.8829C20.4129 17.6703 20.9207 17.4528 21.2954 17.0668C21.6701 16.6807 21.8813 16.1577 21.8828 15.6118V2.73198C21.8813 2.18609 21.6701 1.663 21.2954 1.277C20.9207 0.890991 20.4129 0.673442 19.8829 0.671875ZM19.6326 5.04989L11.3828 10.7158L3.13182 5.04989V2.98979L11.3817 8.65566L19.6315 2.98979L19.6326 5.04989Z">
                                        </path>
                                    </svg>
                                    <span className="text-neutral-0 font-medium text-2xl">Subscribe</span>
                                </button>
                            </div>
                            <p className="text-neutral-700 text-sm pl-4">* Unsubscribe anytime</p>
                        </form>
                    </div> */}
                </div> {/*.container*/}
                <div className="header-bg absolute bottom-0 left-0 right-0 -z-50 w-full h-full bg-gradient-to-t from-primary-light-950/15 to-transparent">
                </div>
            </section>

        </>
    )
}
