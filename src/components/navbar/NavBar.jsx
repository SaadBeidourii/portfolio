"use client"
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { motion } from "framer-motion"

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const location = useLocation()

    const handleNav = () => {
        setNav(!nav)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { id: 1, text: "Home", link: "/" },
        { id: 2, text: "Projects", link: "/projects" },
    ]

    return (
        <motion.div
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "py-3 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md" : "py-5"
            }`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
                <nav className="hidden md:flex items-center space-x-4">
                    {navItems.map((item) => {
                        const isActive = location.pathname === item.link
                        return (
                            <Link
                                key={item.id}
                                to={item.link}
                                className={`px-6 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                                    isActive
                                        ? "bg-[#2a6a55] text-white"
                                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                }`}
                            >
                                {item.text}
                            </Link>
                        )
                    })}
                </nav>

                <button
                    onClick={handleNav}
                    className="md:hidden p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                    {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </button>
            </div>

            {/* Mobile menu */}
            <div
                className={`md:hidden fixed inset-y-0 right-0 transform ${
                    nav ? "translate-x-0" : "translate-x-full"
                } w-64 bg-white dark:bg-gray-900 shadow-xl transition-transform duration-300 ease-in-out z-50`}
            >
                <div className="p-6 space-y-2">
                    <div className="flex justify-end">
                        <button
                            onClick={handleNav}
                            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        >
                            <AiOutlineClose size={24} />
                        </button>
                    </div>
                    <nav className="flex flex-col space-y-4 mt-8">
                        {navItems.map((item) => {
                            const isActive = location.pathname === item.link
                            return (
                                <Link
                                    key={item.id}
                                    to={item.link}
                                    onClick={() => setNav(false)}
                                    className={`px-6 py-4 rounded-lg text-base font-medium transition-colors duration-200 ${
                                        isActive
                                            ? "bg-[#2a6a55] text-white"
                                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    }`}
                                >
                                    {item.text}
                                </Link>
                            )
                        })}
                    </nav>
                </div>
            </div>
        </motion.div>
    )
}

export default NavBar
