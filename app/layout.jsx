import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "/public/assets/css/vendors/normalize.css"
import "/public/assets/css/vendors/animate.min.css"
import "/public/assets/css/vendors/swiper-bundle.css"
import "/public/assets/css/vendors/lightbox.css"
import "/public/assets/css/main.css"

import { Inter } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const inter = Inter({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    // variable: "--nunito-font-family",
    display: 'swap',
})

export const metadata = {
    title: 'FarmFit',
    description: 'FarmFit-An agricultural platform',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} bg-neutral-0 dark:bg-neutral-dark-0`}>
                {children}
            </body>
        </html>
    )
}
