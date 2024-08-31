'use client'
import { useEffect, useState } from 'react'
export default function Language() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeLanguage, setActiveLanguage] = useState("en")

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".language")) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [])

    const toggleLanguageSwitch = () => {
        setIsOpen(!isOpen)
    }

    const setActiveLanguageHandler = (language) => {
        setActiveLanguage(language)
        setIsOpen(false)
    }
    return (
        <>
            <div className="relative size-6 z-10">
                <div className={`language absolute inline-flex flex-col gap-[2px] overflow-hidden min-w-32 h-[24px] top-0 left-0 ${isOpen ? 'is-open' : ''}`} onClick={toggleLanguageSwitch}>
                    <div className={`language__el bg-neutral-0 dark:bg-neutral-dark-0 cursor-pointer ${activeLanguage === 'en' ? 'is-active' : ''}`} onClick={() => setActiveLanguageHandler('en')}>
                        <div className="language__link flex gap-2 items-center">
                            <img className="language__img size-6" alt="en" src="/assets/imgs/template/flag-england.svg" />
                            <span className="language__text text-sm text-neutral-700 dark:text-neutral-dark-300">English</span>
                        </div>
                    </div>
                    <div className={`language__el bg-neutral-0 dark:bg-neutral-dark-0 cursor-pointer ${activeLanguage === 'fr' ? 'is-active' : ''}`} onClick={() => setActiveLanguageHandler('fr')} data-lang="fr">
                        <div className="language__link flex gap-2 items-center">
                            <img className="language__img size-6" alt="fr" src="/assets/imgs/template/flag-france.svg" />
                            <span className="language__text text-sm text-neutral-700 dark:text-neutral-dark-300">French</span>
                        </div>
                    </div>
                    <div className={`language__el bg-neutral-0 dark:bg-neutral-dark-0 cursor-pointer ${activeLanguage === 'vn' ? 'is-active' : ''}`} onClick={() => setActiveLanguageHandler('vn')} data-lang="vn">
                        <div className="language__link flex gap-2 items-center">
                            <img className="language__img size-6" alt="vn" src="/assets/imgs/template/flag-vietnam.svg" />
                            <span className="language__text text-sm text-neutral-700 dark:text-neutral-dark-300">Vietnamese</span>
                        </div>
                    </div>
                    <div className={`language__el bg-neutral-0 dark:bg-neutral-dark-0 cursor-pointer ${activeLanguage === 'ge' ? 'is-active' : ''}`} onClick={() => setActiveLanguageHandler('ge')} data-lang="ge">
                        <div className="language__link flex gap-2 items-center">
                            <img className="language__img size-6" alt="ge" src="/assets/imgs/template/flag-germany.svg" />
                            <span className="language__text text-sm text-neutral-700 dark:text-neutral-dark-300">German</span>
                        </div>
                    </div>
                    <div className={`language__el bg-neutral-0 dark:bg-neutral-dark-0 cursor-pointer ${activeLanguage === 'sp' ? 'is-active' : ''}`} onClick={() => setActiveLanguageHandler('sp')} data-lang="sp">
                        <div className="language__link flex gap-2 items-center">
                            <img className="language__img size-6" alt="sp" src="/assets/imgs/template/flag-spain.svg" />
                            <span className="language__text text-sm text-neutral-700 dark:text-neutral-dark-300">Spanish</span>
                        </div>
                    </div>
                    <div className={`language__el bg-neutral-0 dark:bg-neutral-dark-0 cursor-pointer ${activeLanguage === 'cn' ? 'is-active' : ''}`} onClick={() => setActiveLanguageHandler('cn')} data-lang="cn">
                        <div className="language__link flex gap-2 items-center">
                            <img className="language__img size-6" alt="cn" src="/assets/imgs/template/flag-china.svg" />
                            <span className="language__text text-sm text-neutral-700 dark:text-neutral-dark-300">中国人</span>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
