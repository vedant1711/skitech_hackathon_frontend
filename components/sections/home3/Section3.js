import BlogPost from "@/components/blog/BlogPost"
import Link from "next/link"

export default function Section3() {
    return (
        <>
            <section className="relative py-12 md:py-12 lg:py-12">
                <div className="container px-4">
                    <div className="bg-primary-light-950 dark:bg-primary-dark-950 px-4 py-8  lg:px-32 lg:py-20 rounded-3xl">
                        <div className="flex flex-col justify-start mb-16 items-start lg:flex-row lg:justify-between lg:items-end">
                            <h3 className="heading-3 text-left mb-8 lg:mb-0 leading-none"><span className="font-light">Featured </span>
                                Posts</h3>
                            <div className="justify-start items-start gap-2 inline-flex flex-wrap">
                                <Link className="button-8 hover-up" href="/category">Art</Link>
                                <Link className="button-8 hover-up" href="/category">Fashion</Link>
                                <Link className="button-8 hover-up" href="/category">Health</Link>
                                <Link className="button-8 hover-up" href="/category">Food</Link>
                                <Link className="button-8 hover-up" href="/category">Travel</Link>
                                <Link className="button-8 hover-up" href="/category">Sports</Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                            <BlogPost showItem={3} style={6} startFrom={13} toEnd={17} />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
