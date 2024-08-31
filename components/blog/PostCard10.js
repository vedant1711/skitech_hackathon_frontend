import Image from "next/image"
import Link from "next/link"

export default function PostCard10({ post }) {
    return (
        <>
            <div className="flex-col justify-start items-start gap-5 inline-flex hover-up">
                <Link href={`/blog/${post?.id}`} className="rounded-3xl overflow-hidden max-h-[465px]">
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
                            <div className="text-neutral-900 dark:text-neutral-dark-950 text-sm font-medium leading-none">
                                {post?.category}</div>
                        </Link>
                        <div className="justify-start items-center gap-2 flex">
                            <Link href="/page-author"><img className="w-9 h-9 rounded-3xl" src={`assets/imgs/avatar/${post.avatar}`} /></Link>
                            <div className="text-neutral-700 text-sm font-medium leading-none dark:text-neutral-dark-700">
                                <Link href="/page-author">{post?.author}</Link> - {post?.date}</div>
                        </div>
                    </div>
                    <h3><Link className="text-neutral-950 dark:text-neutral-dark-950 text-3xl font-bold leading-snug item-link" href={`/blog/${post?.id}`}>{post?.title}</Link></h3>
                    <p className="text-neutral-700 text-sm lg:text-base font-medium leading-relaxed dark:text-neutral-dark-500 mb-4">
                        Discover the narrative woven through each brushstroke, portraying the delicate dance
                        between chaos and harmony. As we navigate the intricate landscapes of inspiration,
                        we unravel the stories that shape us.
                    </p>
                    <Link href={`/blog/${post?.id}`} className="group btn bg-primary-light-950 dark:bg-primary-dark-950 rounded-full px-8 py-4 text-xl text-neutral-950 dark:text-neutral-dark-950 flex gap-2 items-center">
                        <span>Read More</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={18} height={18} viewBox="0 0 24 24" className="fill-neutral-950 dark:fill-neutral-dark-950 group-hover:translate-x-1 transition-all duration-300">
                            <g clipPath="url(#clip0_253_4238)">
                                <path d="M23.6164 11.0663L14.9491 2.39884C14.7017 2.15143 14.372 2.01562 14.0204 2.01562C13.6684 2.01562 13.3388 2.15162 13.0914 2.39884L12.3045 3.18596C12.0573 3.43298 11.9211 3.76293 11.9211 4.11473C11.9211 4.46634 12.0573 4.80741 12.3045 5.05443L17.3608 10.1219H1.29657C0.572288 10.1219 0 10.6889 0 11.4134V12.5262C0 13.2507 0.572288 13.8748 1.29657 13.8748H17.4182L12.3047 18.9706C12.0575 19.218 11.9213 19.539 11.9213 19.8908C11.9213 20.2422 12.0575 20.5679 12.3047 20.8151L13.0916 21.5997C13.339 21.8471 13.6686 21.9819 14.0206 21.9819C14.3722 21.9819 14.7019 21.8453 14.9493 21.5979L23.6166 12.9307C23.8646 12.6825 24.001 12.3512 24 11.999C24.0008 11.6456 23.8646 11.3141 23.6164 11.0663Z">
                                </path>
                            </g>
                            <defs>
                                <clipPath id="clip0_253_4238">
                                    <rect width={24} height={24} />
                                </clipPath>
                            </defs>
                        </svg>
                    </Link>
                </div>
            </div>

        </>
    )
}
