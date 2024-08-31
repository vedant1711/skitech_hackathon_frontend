import BlogPost from "@/components/blog/BlogPost"
import Link from "next/link"

export default function Section2() {
    return (
        <>
            <section className="relative py-10 lg:py-12">
                <div className="container px-4">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
                        <h3 className="heading-2 text-left mb-4 lg:mb-0"><span className="font-light">Featured </span>Posts</h3>
                        <div className="mb-3">
                            <button className="button-3 text-neutral-950 dark:text-neutral-dark-950">All Authors</button>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-[30px]">
                        {/*Author box*/}
                        <div className="relative w-full min-w-[310px] border-2 border-neutral-300 dark:border-neutral-dark-300 rounded-3xl bg-neutral-0 dark:bg-neutral-dark-0 py-12 px-4 overflow-hidden max-h-[414px]">
                            <div className="bg-primary-light-950 absolute top-0 left-0 right-0 h-28 w-full z-1" />
                            <div className="w-full relative z-2 text-center flex flex-col justify-center content-center justify-items-center justify-self-center items-center">
                                <div className="w-36 h-36 rounded-full border-4 border-neutral-0 dark:border-neutral-dark-300 overflow-hidden mb-8">
                                    <img src="/assets/imgs/avatar/avatar-12.png" />
                                </div>
                                <div className="flex-col justify-start items-center gap-4 inline-flex">
                                    <Link className="text-center text-neutral-950 dark:text-neutral-dark-950 text-4xl font-bold" href="/author">Brooklyn Simmons</Link>
                                    <div className="text-center text-neutral-700 text-base font-medium leading-normal">Goods and
                                        services. It involves entrepreneurship, management, marketing, finance, and many other
                                        aspects. Businesses aim to generate</div>
                                </div>
                            </div>
                        </div>
                        {/*Post list 2*/}
                        <div className="col-span-2">
                            <div className="flex flex-col gap-8">
                                <BlogPost showItem={4} style={3} startFrom={12} toEnd={16} />
                            </div>
                        </div>
                    </div>
                </div></section>

        </>
    )
}
