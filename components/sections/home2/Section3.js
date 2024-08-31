import BlogPost from "@/components/blog/BlogPost"
import Link from "next/link"

export default function Section3() {
    return (
        <>
            <section className="relative pt-20 py-10 lg:pt-12 lg:pb-24">
                <div className="container px-4">
                    <div className="flex flex-col justify-start mb-16 items-start lg:flex-row lg:justify-between lg:items-end">
                        <h3 className="heading-3 text-left mb-8 lg:mb-0 leading-none"><span className="font-light">Featured </span>
                            Posts</h3>
                        <div className="justify-start items-start gap-2 inline-flex flex-wrap">
                            <Link className="button-7 hover-up" href="/category">Art</Link>
                            <Link className="button-7 hover-up" href="/category">Fashion</Link>
                            <Link className="button-7 hover-up" href="/category">Health</Link>
                            <Link className="button-7 hover-up" href="/category">Food</Link>
                            <Link className="button-7 hover-up" href="/category">Travel</Link>
                            <Link className="button-7 hover-up" href="/category">Sports</Link>
                        </div>
                    </div>
                    {/*Grid*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                        <BlogPost showItem={4} style={6} startFrom={12} toEnd={17} />
                    </div>
                </div>
            </section>

        </>
    )
}
