
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default async function About() {
    return (
        <>
            <Layout>
                <section className="py-16 lg:py-24">
                    <div className="container px-4">
                        <div className="md:w-3/4 lg:w-1/2">
                            <h1 className="heading-2 max-w-7xl mb-12 text-neutral-950 dark:text-neutral-dark-950"><span className="font-light">Let's</span> explore <span className="font-light">and</span><br /> create <span className="font-light">together!</span></h1>
                            <p className="mb-8 text-base font-md text-neutral-950 dark:text-neutral-dark-950">Hello and welcome to my
                                digital haven! I'm Sarah, your guide through the realms of content creation and storytelling. As a
                                passionate content marketing maker and writer, I'm thrilled to have you here. Get ready to embark on
                                a journey where words come to life, ideas unfold, and creativity knows no limits.</p>
                            <p className="mb-8 text-base font-md text-neutral-950 dark:text-neutral-dark-950">Gratitude for joining me
                                in this space! Together, let's delve into new adventures, forge meaningful connections, and craft
                                moments of inspiration. Here's to our shared journey of exploration and creation!</p>
                        </div>
                        <div className="grid md:grid-col-2 lg:grid-cols-4 mt-24">
                            <div className="flex flex-col">
                                <h6 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-dark-900">Address</h6>
                                <p className="mb-8 text-base font-md text-neutral-950 dark:text-neutral-dark-950">4517 Washington Ave.
                                    <br />Manchester, Kentucky 39495</p>
                            </div>
                            <div className="flex flex-col">
                                <h6 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-dark-900">Email</h6>
                                <p className="mb-8 text-base font-md text-neutral-950 dark:text-neutral-dark-950">sarah-emily@ideko.com
                                </p>
                            </div>
                            <div className="flex flex-col">
                                <h6 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-dark-900">Phone</h6>
                                <p className="mb-8 text-base font-md text-neutral-950 dark:text-neutral-dark-950">(239) 555-0108</p>
                            </div>
                            <div className="flex flex-col">
                                <h6 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-neutral-dark-900">Skype</h6>
                                <p className="mb-8 text-base font-md text-neutral-950 dark:text-neutral-dark-950">sarahemily290</p>
                            </div>
                        </div>
                        <img src="/assets/imgs/pages/img-29.png" alt="" className="mt-12 rounded-3xl" />
                    </div>
                </section>
                <section className="pb-12 lg:pb-24">
                    <div className="container px-4">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className>
                                <h1 className="heading-2 max-w-7xl mb-12 text-neutral-950 dark:text-neutral-dark-950"><span className="font-light">Words from my</span><br /> satisfied <span className="font-light">clients!</span></h1>
                                <div className="font-bold text-lg text-neutral-700 dark:text-neutral-dark-700 mb-24">
                                    Hear from those who have experienced<br /> satisfaction with my services!
                                </div>
                                <div className="flex flex-col md:flex-row gap-4">
                                    <Link href="/page-login" className="group btn bg-primary-light-950 dark:bg-primary-dark-950 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950 flex gap-2 items-center">
                                        <span>Get Started</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" className="fill-neutral-950 dark:fill-neutral-dark-950 group-hover:translate-x-1 transition-all duration-300">
                                            <g clipPath="url(#clip0_253_4238)">
                                                <path d="M23.6164 11.0663L14.9491 2.39884C14.7017 2.15143 14.372 2.01562 14.0204 2.01562C13.6684 2.01562 13.3388 2.15162 13.0914 2.39884L12.3045 3.18596C12.0573 3.43298 11.9211 3.76293 11.9211 4.11473C11.9211 4.46634 12.0573 4.80741 12.3045 5.05443L17.3608 10.1219H1.29657C0.572288 10.1219 0 10.6889 0 11.4134V12.5262C0 13.2507 0.572288 13.8748 1.29657 13.8748H17.4182L12.3047 18.9706C12.0575 19.218 11.9213 19.539 11.9213 19.8908C11.9213 20.2422 12.0575 20.5679 12.3047 20.8151L13.0916 21.5997C13.339 21.8471 13.6686 21.9819 14.0206 21.9819C14.3722 21.9819 14.7019 21.8453 14.9493 21.5979L23.6166 12.9307C23.8646 12.6825 24.001 12.3512 24 11.999C24.0008 11.6456 23.8646 11.3141 23.6164 11.0663Z">
                                                </path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_253_4238">
                                                    <rect width={24} height={24} />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </Link>
                                    <Link href="/page-contact" className="btn border border-neutral-950 dark:border-neutral-dark-300 dark:bg-neutral-dark-0 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950 items-center">Contact
                                        Us</Link>
                                </div>
                            </div>
                            <div className="flex flex-col gap-16 lg:pl-24">
                                <div className="test-monials flex flex-col flex-wrap gap-8">
                                    <p className="text-base font-medium text-neutral-950 dark:text-neutral-dark-950">Sarah's guidance
                                        has been instrumental in shaping my freelance career. Her insights into content marketing
                                        have helped me secure better projects and build a solid client base. I appreciate her
                                        willingness to share knowledge and the practical tips that have made a real difference in my
                                        professional journey.</p>
                                    <div className="flex flex-wrap flex-row gap-3 items-center">
                                        <img src="/assets/imgs/avatar/avatar-03.png" alt="" className="rounded-full size-16" />
                                        <div className="flex flex-col ">
                                            <h6 className="text-base font-bold mb-1 text-neutral-900 dark:text-neutral-dark-900">John D
                                            </h6>
                                            <p className="text-xs font-medium text-neutral-700 dark:text-neutral-dark-700">Marketing
                                                Manager</p>
                                        </div>
                                    </div>
                                </div> {/* End of Testimonial */}
                                <div className="test-monials flex flex-col flex-wrap gap-8">
                                    <p className="text-base font-medium text-neutral-950 dark:text-neutral-dark-950">Sarah's guidance
                                        has been instrumental in shaping my freelance career. Her insights into content marketing
                                        have helped me secure better projects and build a solid client base. I appreciate her
                                        willingness to share knowledge and the practical tips that have made a real difference in my
                                        professional journey.</p>
                                    <div className="flex flex-wrap flex-row gap-3 items-center">
                                        <img src="/assets/imgs/avatar/avatar-04.png" alt="" className="rounded-full size-16" />
                                        <div className="flex flex-col ">
                                            <h6 className="text-base font-bold mb-1 text-neutral-900 dark:text-neutral-dark-900">Alex P
                                            </h6>
                                            <p className="text-xs font-medium text-neutral-700 dark:text-neutral-dark-700">Blog Reader
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* End of Testimonial */}
                                <div className="test-monials flex flex-col flex-wrap gap-8">
                                    <p className="text-base font-medium text-neutral-950 dark:text-neutral-dark-950">Sarah's guidance
                                        has been instrumental in shaping my freelance career. Her insights into content marketing
                                        have helped me secure better projects and build a solid client base. I appreciate her
                                        willingness to share knowledge and the practical tips that have made a real difference in my
                                        professional journey.</p>
                                    <div className="flex flex-wrap flex-row gap-3 items-center">
                                        <img src="/assets/imgs/avatar/avatar-05.png" alt="" className="rounded-full size-16" />
                                        <div className="flex flex-col ">
                                            <h6 className="text-base font-bold mb-1 text-neutral-900 dark:text-neutral-dark-900">Jessica
                                                M</h6>
                                            <p className="text-xs font-medium text-neutral-700 dark:text-neutral-dark-700">Freelancer
                                            </p>
                                        </div>
                                    </div>
                                </div> {/* End of Testimonial */}
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pb-24">
                    <div className="container px-4">
                        <h1 className="heading-2 max-w-7xl mb-12 text-neutral-950 dark:text-neutral-dark-950"><span className="font-light">Photo</span>Gallery</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                            <Link href="#"><img src="/assets/imgs/gallery/gallery-01.png" alt="" /></Link>
                            <Link href="#"><img src="/assets/imgs/gallery/gallery-02.png" alt="" /></Link>
                            <Link href="#"><img src="/assets/imgs/gallery/gallery-03.png" alt="" /></Link>
                            <Link href="#"><img src="/assets/imgs/gallery/gallery-04.png" alt="" /></Link>
                            <Link href="#"><img src="/assets/imgs/gallery/gallery-05.png" alt="" /></Link>
                            <Link href="#"><img src="/assets/imgs/gallery/gallery-06.png" alt="" /></Link>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
