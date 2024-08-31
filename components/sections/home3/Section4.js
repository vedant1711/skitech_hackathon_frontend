import BlogPost from "@/components/blog/BlogPost"

export default function Section4() {
    return (
        <>
            <section className="relative md:pb-12 lg:pt-12 lg:pb-12">
                <div className="container px-4">
                    <h3 className="heading-2 text-center mb-16"><span className="font-light">See what we’ve</span><br /> written lately
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-[30px] gap-y-[65px]">
                        <BlogPost showItem={3} style={11} startFrom={13} toEnd={17} />
                    </div>
                </div>
            </section>

        </>
    )
}
