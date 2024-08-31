
import Image from "next/image"
import Link from "next/link"

export default function PostCard3({ post }) {
    // console.log(post)
    // Format Date



    return (
        <>
            {/* <Link href={`/blog/${post?.id}`}>
                <h2>{post?.title}</h2>
            </Link>
            <img src={post?.userImage} alt="" width={50} />
            {post?.date}
            <p>{post?.category}</p>
            <img src={post?.img} alt="" width={200} />
            <p>{post?.userName}</p> */}
            {/* <div>{post?.description}</div> */}
            {/* <div className="" dangerouslySetInnerHTML={{ __html: post?.description }} /> */}
            <div className="w-full p-2.5 lg:pr-8 rounded-3xl border-2 border-neutral-300 dark:border-neutral-dark-300 flex-col justify-start items-start gap-2.5 inline-flex  hover-up">
                <div className="justify-start items-center gap-11 flex flex-col md:flex-row">
                    <Link href={`/blog/${post?.id}`} className="rounded-[18px] overflow-hidden max-h-44 md:max-w-72">
                        <Image
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                            src={`/assets/imgs/pages/${post?.img}`}
                            alt=""
                        />
                    </Link>
                    <div className="flex-col gap-4 inline-flex items-center md:items-start">
                        <div className="justify-start items-center gap-5 inline-flex">
                            <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none capitalize">
                                    {post?.category}</div>
                            </Link>
                            <div className="justify-start items-center gap-2 flex">
                                <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                    <Link href="/author">{post?.author}</Link> - {post?.date}</div>
                            </div>
                        </div>
                        <h3 className="text-center md:text-start mb-4 md-mb-0">
                            <Link className="text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug item-link" href={`/blog/${post?.id}`}>{post.title}</Link>
                        </h3>
                    </div>
                </div>
            </div>

        </>
    )
}
