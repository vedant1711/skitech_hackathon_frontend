import Image from "next/image";
import Link from "next/link";

export default function PostCard9({ post }) {
    return (
        <>
            <div className="w-full border-neutral-300 dark:border-neutral-dark-300 flex-col justify-start items-start gap-2.5 inline-flex hover-up">
                <div className="justify-start items-center gap-8 flex flex-col md:flex-row">
                    <Link
                        className="rounded-[18px] overflow-hidden h-36 w-full md:max-w-48 relative"
                        href={`${post.articleUrl}`}
                    >
                        <Image
                            fill
                            sizes="100vw"
                            src={`/assets/imgs/pages/${post?.img}`}
                            alt=""
                            className="object-contain"
                        />
                    </Link>
                    <div className="flex-col gap-4 inline-flex items-start w-full md:w-auto">
                        <div className="justify-start items-center gap-5 inline-flex flex-wrap">
                            <Link
                                className="px-3 py-[8px] bg-neutral-200 dark:bg-neutral-dark-200 rounded-3xl border border-neutral-200 dark:border-neutral-dark-300 justify-center items-center gap-2.5 flex"
                                href="/category"
                            >
                                <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                    {post?.category}
                                </div>
                            </Link>
                            <div className="justify-start items-center gap-2 flex">
                                <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                    {post?.duration} mins read - {post?.date}
                                </div>
                            </div>
                        </div>
                        <h3 className="text-start md:mb-0">
                            <Link
                                className="text-neutral-950 dark:text-neutral-dark-950 text-xl md:text-2xl font-bold leading-snug item-link"
                                href={`${post.articleUrl}`}
                            >
                                {post?.title}
                            </Link>
                        </h3>
                        {/* Description Section */}
                        <div className="text-neutral-700 dark:text-neutral-dark-700 text-sm md:text-base leading-relaxed">
                            {post?.description}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
