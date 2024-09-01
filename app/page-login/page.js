'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default async function Login() {
    return (
        <>
            <Layout>
                <section className="relative py-12 lg:pt-32">
                    <div className="container px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 items-start">
                            <div className="hidden lg:grid grid-cols-2 gap-4 items-stretch max-w-[580px]">
                                <img className="rounded-3xl w-full hover-up" src="/assets/imgs/pages/img-32.png" alt="" />
                                <img className="rounded-3xl w-full hover-up" src="/assets/imgs/pages/img-33.png" alt="" />
                                <img className="rounded-3xl w-full hover-up" src="/assets/imgs/pages/img-34.png" alt="" />
                                <img className="rounded-3xl w-full hover-up" src="/assets/imgs/pages/img-35.png" alt="" />
                                <img className="rounded-3xl w-full hover-up col-span-2" src="/assets/imgs/pages/img-36.png" alt="" />
                            </div>
                            <div className="mr-12 lg:pl-12">
                                <span className="h-12 px-7 py-3.5 bg-neutral-0 dark:bg-neutral-dark-0 rounded-3xl border border-neutral-300 dark:border-neutral-dark-300 text-neutral-700 dark:text-neutral-dark-700 text-base font-bold leading-none mb-4 inline-block">
                                    Welcome Back!
                                </span>
                                <h3 className="heading-3 mb-2">Sign in <span className="font-light">to Your account</span></h3>
                                <p className="text-neutral-700 dark:text-neutral-dark-700 mb-16 font-medium text-2xl">Switch to smarter farming! Sign up now and unlock the power of real-time insights, expert advice, and a thriving community of farmers like you!</p>
                                <form >
                                    <div className="form-group mb-4">
                                        <label htmlFor="mobile" className="input-label">Contact No.</label>
                                        <input type="number" placeholder="Contact No." className="input-lg" />
                                    </div>
                                    <div className="form-group mb-4">
                                        <label htmlFor="password" className="input-label">Password</label>
                                        <input type="password" placeholder="Password" className="input-lg" />
                                    </div>
                                    <div className="form-group flex justify-between mb-4 mt-6">
                                        <div className="flex items-center mb-8">
                                            <input type="checkbox" id="save-info" className="w-4 h-4 accent-primary-light-950  bg-primary-light-950 text-neutral-0  rounded cursor-pointer mr-2" />
                                            <label htmlFor="save-info" className="text-sm text-neutral-950 dark:text-neutral-dark-950">Remember me</label>
                                        </div>
                                        {/* <Link href="/#" className="text-neutral-950 dark:text-neutral-dark-950 underline text-sm">Forgot
                                            Password?</Link> */}
                                    </div>
                                    <button type="submit" className="w-full btn bg-primary-light-950 dark:bg-primary-dark-950 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950 font-bold text-center">
                                        Sign In
                                    </button>
                                    
                                    <p className="text-center text-lg font-medium text-neutral-700 dark:text-neutral-dark-700 pt-8 pb-12">
                                        Do not have an account? <Link href="/page-register" className="text-neutral-950 dark:text-neutral-dark-950 underline">Create Now</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
