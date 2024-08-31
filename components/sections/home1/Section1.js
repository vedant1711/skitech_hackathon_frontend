import BlogPost from "@/components/blog/BlogPost"

export default function Section1() {
    return (
        <>
            <section className="relative pt-20 py-10 lg:pt-12 lg:pb-24">
                <div className="container px-4">
                    <h3 className="heading-2 text-center mb-16"><span className="font-light">See what we’ve</span><br /> written lately
                    </h3>
                    {/*Post list 1*/}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[65px]">
                        <BlogPost showItem={6} style={2} startFrom={12} toEnd={19} />
                    </div>
                </div>
            </section>

        </>
    )
}
