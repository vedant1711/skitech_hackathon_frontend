import { useEffect } from 'react'

function ThemeSwitch2() {
    useEffect(() => {
        const savedMode = localStorage.getItem("mode")
        if (savedMode === "dark") toggleDarkMode()
        else toggleLightMode()
        document.body.classList.add(savedMode === "dark" ? "dark" : "light")
    }, [])

    const handleDarkLightToggle = () => {
        if (document.documentElement.classList.contains("dark")) {
            toggleLightMode()
            document.body.classList.remove("dark")
            document.body.classList.add("light")
        } else {
            toggleDarkMode()
            document.body.classList.remove("light")
            document.body.classList.add("dark")
        }
    }

    const toggleDarkMode = () => {
        document.documentElement.classList.remove("light")
        document.documentElement.classList.add("dark")
        localStorage.setItem("mode", "dark")
    }

    const toggleLightMode = () => {
        document.documentElement.classList.remove("dark")
        document.documentElement.classList.add("light")
        localStorage.setItem("mode", "light")
    }

    return (
        <div>
            <div className="dark-light cursor-pointer flex relative z-20" onClick={handleDarkLightToggle}>
                <img src="assets/imgs/template/icon-dark-light-white.svg" alt="dark/light" />
            </div>
        </div>
    )
}

export default ThemeSwitch2
