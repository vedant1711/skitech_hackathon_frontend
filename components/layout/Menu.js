import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}
            <ul className="xl:flex hidden">
                {/* <li className="relative group">
                    <Link className="menu-item" href="/">Home</Link>
                    <ul className="z-100 absolute px-6 py-4 rounded-md left-4 bg-neutral-0 dark:bg-neutral-dark-0 min-w-48 shadow-sm mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
                        <li><Link href="/" className="menu-sub-item">Home page 01</Link></li>
                        <li><Link href="/index-2" className="menu-sub-item">Home page 02</Link></li>
                        <li><Link href="/index-3" className="menu-sub-item">Home page 03</Link></li>
                    </ul>
                </li> */}
                {/* <li className="relative group">
                    <Link className="menu-item" href="/#">Blog</Link>
                    <ul className="z-100 absolute px-6 py-4 rounded-md left-4 bg-neutral-0 dark:bg-neutral-dark-0 min-w-48 shadow-sm mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
                        <li><Link href="/category" className="menu-sub-item">Category 01</Link></li>
                        <li><Link href="/category-2" className="menu-sub-item">Category 02</Link></li>
                        <li><Link href="/category-3" className="menu-sub-item">Category 03</Link></li>
                        <li><Link href="/category-4" className="menu-sub-item">Category 04</Link></li>
                        <li><Link href="/single" className="menu-sub-item">Single 01</Link></li>
                        <li><Link href="/single-2" className="menu-sub-item">Single 02</Link></li>
                    </ul>
                </li> */}
                {/* <li className="relative group">
                    <Link className="menu-item" href="diseaseDetection">Disease Detection</Link>
                    <ul className="z-100 absolute px-6 py-4 rounded-md left-4 bg-neutral-0 dark:bg-neutral-dark-0 min-w-48 shadow-sm mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
                        <li><Link href="/page-about" className="menu-sub-item">About me</Link></li>
                        <li><Link href="/page-author" className="menu-sub-item">Author</Link></li>
                        <li><Link href="/page-search" className="menu-sub-item">Search Results</Link></li>
                        <li><Link href="/page-contact" className="menu-sub-item">Contact</Link></li>
                        <li><Link href="/page-login" className="menu-sub-item">Login</Link></li>
                        <li><Link href="/page-register" className="menu-sub-item">Register</Link></li>
                        <li><Link href="/page-forgot-password" className="menu-sub-item">Forgot Password</Link></li>
                        <li><Link href="/page-404" className="menu-sub-item">Error 404</Link></li>
                    </ul>
                </li> */}
                <li className="relative group">
                    <Link className="menu-item text-center" href="commodityPrices">Commodity Price</Link>
                </li>
                <li className="relative group">
                    <Link className="menu-item text-center" href="cropInsurance">Insurance</Link>
                </li>
                
                <li className="relative group">
                    <Link className="menu-item text-center" href="/#">Get Recommendation</Link>
                    
                    <ul className="z-100 absolute px-6 py-4 rounded-md left-4 bg-neutral-0 dark:bg-neutral-dark-0 min-w-48 shadow-sm mt-8 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:mt-4 transition-all duration-500">
                        <li><Link href="/recommendationPage" className="menu-sub-item">Crop</Link></li>
                        <li><Link href="/recommendationPage" className="menu-sub-item">Fertilizer</Link></li>
                    </ul>
                </li>
                <li className="relative group">
                    <Link className="menu-item text-center" href="diseaseDetection">Disease Detection</Link>
                </li>
     
                {/* <li className="relative"><Link href="/page-contact" className="menu-item">Contact</Link></li> */}
                {/* <li className="relative"><Link href="/DiseaseDetection" className="menu-item">Disease Detection</Link></li>
                <li className="relative"><Link href="/CropInsurance" className="menu-item">Crop Insurance</Link></li> */}
            </ul>
        </>
    )
}
