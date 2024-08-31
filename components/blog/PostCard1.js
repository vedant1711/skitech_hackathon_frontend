import Image from "next/image"
import Link from "next/link"

export default function PostCard1({ post }) {
    return (
        <>
            <div className="w-full flex items-center gap-2.5  hover-up">
                <div className="justify-start items-center gap-4 inline-flex">
                    <Link href={`/blog/${post?.id}`} className="rounded-2xl overflow-hidden max-h-[90px] max-w-[175px] relative">
                        <Image
                            width="0"
                            height="0"
                            sizes="100vw"
                            style={{ width: "auto", height: "auto" }}
                            src={`/assets/imgs/pages/${post?.img}`}
                            alt=""
                        />
                    </Link>
                    <div className="flex-col justify-start items-start gap-4 inline-flex">
                        <h4>
                            <Link className="text-neutral-950 dark:text-neutral-dark-950 text-base font-bold item-link" href={`/blog/${post?.id}`}>{post?.title}</Link>
                        </h4>
                        <p className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700"> 2 mins read - {post?.date} </p>
                    </div>
                </div>
            </div>


        </>
    )
}
