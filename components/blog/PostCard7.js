import Image from "next/image"
import Link from "next/link"

export default function PostCard7({ post }) {
    // console.log(post)
    // Format Date



    return (
        <>
            <div className="grid md:grid-cols-2 justify-start items-center gap-4 rounded-3xl overflow-hidden border-2 bg-neutral-950 border-neutral-700 dark:border-neutral-dark-300 hover-up">
                <Link href={`/blog/${post?.id}`} className="rounded-2xl overflow-hidden">
                    <Image
                        className="md:min-h-[340px] w-auto"
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src={`/assets/imgs/pages/${post?.img}`}
                        alt=""
                    />
                </Link>
                <div className="flex flex-col justify-start items-start gap-4 p-8">
                    <div className="justify-start items-center gap-5 flex">
                        <Link href={`/category/${post?.category}`} className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none capitalize">
                                {post?.category}</div>
                        </Link>
                        <div className="justify-start items-center gap-2 flex">
                            <Link href="/author" className="w-9 h-9"><img className="w-9 h-9 rounded-3xl" src={`/assets/imgs/avatar/${post?.avatar}`} /></Link>
                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-300">
                                <Link href="/author">{post?.author}</Link></div>
                        </div>
                    </div>
                    <h4>
                        <Link className="text-neutral-0 dark:text-neutral-dark-950 text-lg font-bold item-link" href={`/blog/${post?.id}`}>{post?.title}</Link>
                    </h4>
                    <p className="text-neutral-700 text-sm font-medium leading-snug dark:text-neutral-dark-300">
                        {post?.subTitle}
                    </p>
                </div>
            </div>
        </>
    )
}
