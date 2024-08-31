import Image from "next/image"
import Link from "next/link"

export default function PostCard6({ post }) {
    // console.log(post)
    // Format Date



    return (
        <>
            <div className="w-full rounded-3xl border-2 border-neutral-300 dark:border-neutral-dark-300 flex-col justify-start items-start inline-flex  hover-up">
                <div className="justify-start items-center gap-4 flex flex-col">
                    <Link href={`/blog/${post?.id}`} className="rounded-[18px] overflow-hidden max-h-[180px]">
                        <Image
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                            src={`/assets/imgs/pages/${post?.img}`}
                            alt=""
                        />
                    </Link>
                    <div className="p-4 flex-col gap-4 inline-flex items-center md:items-start">
                        <div className="justify-start items-center gap-2 inline-flex">
                            <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                                <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none capitalize">
                                    {post?.category}</div>
                            </Link>
                            <div className="justify-start items-center gap-2 flex">
                                <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                    {post?.date}</div>
                            </div>
                        </div>
                        <h3 className="text-center md:text-start mb-4 md-mb-0">
                            <Link className="text-neutral-950 dark:text-neutral-dark-950 text-lg font-bold leading-tight item-link" href={`/blog/${post?.id}`}>{post?.title}</Link>
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}
