import BlogPost from "@/components/blog/BlogPost"

export default function Section3() {
    return (
        <>
            <section className="relative py-10 lg:py-12">
                <div className="container px-4">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16">
                        <h3 className="heading-2 text-left mb-4 lg:mb-0"><span className="font-light">Featured </span> Posts</h3>
                        <div>
                            <button className="button-3 text-neutral-950 dark:text-neutral-dark-950">View More</button>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-3 gap-[30px]">
                        {/*col*/}
                        <div className="relative flex flex-col gap-4 mb-8 lg:mb-0 justify-start">
                            <BlogPost showItem={1} style={4} startFrom={13} toEnd={14} />
                            <BlogPost showItem={2} style={5} startFrom={36} toEnd={38} />
                        </div>
                        <div className="relative flex flex-col gap-4 mb-8 lg:mb-0">
                            <BlogPost showItem={1} style={4} startFrom={14} toEnd={15} />
                            <BlogPost showItem={2} style={5} startFrom={38} toEnd={40} />
                        </div>
                        <div className="relative flex flex-col gap-4 mb-8 lg:mb-0">
                            <BlogPost showItem={1} style={4} startFrom={15} toEnd={16} />
                            <BlogPost showItem={2} style={5} startFrom={40} toEnd={42} />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
