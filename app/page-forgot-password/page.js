
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default async function ForgotPass() {
    return (
        <>
            <Layout>
                <section className="relative py-12 lg:pt-32 lg:pb-32">
                    <div className="container px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2">
                            <div className="mr-12">
                                <span className="h-12 px-7 py-3.5 bg-neutral-0 dark:bg-neutral-dark-0 rounded-3xl border border-neutral-300 dark:border-neutral-dark-300 text-neutral-700 dark:text-neutral-dark-700 text-base font-bold leading-none mb-4 inline-block">
                                    Welcome Back!
                                </span>
                                <h3 className="heading-3 mb-2">Forgot <span className="font-light"> Password?</span></h3>
                                <p className="text-neutral-700 dark:text-neutral-dark-700 mb-16 font-medium text-2xl">No worries, we’ll
                                    send you reset instructions</p>
                                <form >
                                    <div className="form-group mb-4">
                                        <label htmlFor="email" className="input-label">Email address or Username</label>
                                        <input type="email" placeholder="johndoe@site.com" className="input-lg" />
                                    </div>
                                    <button type="submit" className="w-full btn bg-primary-light-950 dark:bg-primary-dark-950 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950 font-bold text-center">
                                        Reset Password
                                    </button>
                                    <p className="text-lg font-medium text-neutral-700 dark:text-neutral-dark-700 pt-8 pb-12">Do not
                                        have an account? <Link href="/page-register" className="text-neutral-950 dark:text-neutral-dark-950 underline">Create Now</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
