'use client'

import Layout from "@/components/layout/Layout"
export default async function Register() {
    return (
        <>
            <Layout>
                <section className="relative py-12 lg:pt-32">
                    <div className="container px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="mr-12 lg:pl-12">
                                <span className="h-12 px-7 py-3.5 bg-neutral-0 dark:bg-neutral-dark-0 rounded-3xl border border-neutral-300 dark:border-neutral-dark-300 text-neutral-700 dark:text-neutral-dark-700 text-base font-bold leading-none mb-4 inline-block">
                                    Sign Up
                                </span>
                                <h3 className="heading-3 mb-2">Create <span className="font-light">an Account</span></h3>
                                <p className="text-neutral-700 dark:text-neutral-dark-700 mb-16 font-medium text-2xl">Create a new
                                    account and enjoy premium content</p>
                                <form >
                                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                                        <div className="form-group">
                                            <label htmlFor="last-name" className="input-label">First Name</label>
                                            <input type="text" placeholder="First name" className="input-lg" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="last-name" className="input-label">Last Name</label>
                                            <input type="text" placeholder="Last name" className="input-lg" />
                                        </div>
                                    </div>
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
                                            <label htmlFor="save-info" className="text-sm text-neutral-950 dark:text-neutral-dark-950">I
                                                agree to the <a href="#" className="font-bold">Terms &amp; conditions</a></label>
                                        </div>
                                        {/* <a href="#" className="text-neutral-950 dark:text-neutral-dark-950 underline text-sm">Need
                                            help?</a> */}
                                    </div>
                                    <button type="submit" className="w-full btn bg-primary-light-950 dark:bg-primary-dark-950 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950 font-bold text-center">
                                        Sign Up
                                    </button>
                                    
                                    <p className="text-center text-lg font-medium text-neutral-700 dark:text-neutral-dark-700 pt-8 pb-12">
                                        Already have an account? <a href="page-login" className="text-neutral-950 dark:text-neutral-dark-950 underline">Sign In</a></p>
                                </form>
                            </div> {/*Left col*/}
                            <div className="lg:pl-12 mt-20 hidden lg:block">
                                <div className="w-full md:max-w-[565px] rounded-[26px] bg-gradient-to-t from-primary-light-950 via-primary-light-300 to-primary-light-200 p-2">
                                    <img className="rounded-3xl md:max-w-[550px]" src="assets/imgs/pages/signup.jpg" alt />
                                    </div>
                                <div className="w-full md:max-w-[565px] rounded-[26px] bg-gradient-to-t from-primary-light-950 via-primary-light-300 to-primary-light-200 p-2">
                                <img className="rounded-3xl p-3  md:max-w-[550px]" src="assets/imgs/pages/farmer2.jpg" alt />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
