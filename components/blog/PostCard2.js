import Image from "next/image"
import Link from "next/link"

export default function PostCard2({ post }) {
    return (
        <>
            <div className="flex-col justify-start items-start gap-5 inline-flex hover-up">
                <Link href={`/blog/${post?.id}`} className="rounded-3xl overflow-hidden max-h-[606px]">
                    <Image
                        width="0"
                        height="0"
                        sizes="100vw"
                        style={{ width: "auto", height: "auto" }}
                        src={`/assets/imgs/pages/${post?.img}`}
                        alt=""
                    />
                </Link>
                <div className="flex-col justify-start items-start gap-3.5 flex">
                    <div className="justify-start items-center gap-5 inline-flex">
                        <Link href="/category" className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex">
                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none capitalize">
                                {post?.category}</div>
                        </Link>
                        <div className="justify-start items-center gap-2 flex">
                            <Link href="/author"><img className="w-9 h-9 rounded-3xl" src={`/assets/imgs/avatar/${`${post?.avatar}`}`} /></Link>
                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                <Link href="/author">{post?.author}</Link> - {post?.date}</div>
                        </div>
                    </div>
                    <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-2xl font-bold leading-snug item-link" href={`/blog/${post?.id}`}>{post?.title}</Link></h3>
                </div>
            </div>
        </>
    )
}
