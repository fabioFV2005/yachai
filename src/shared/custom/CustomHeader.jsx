import { Link, useLocation } from "react-router";
import { useState, useEffect } from "react";
import Logo from "../../assets/logo/yachai_logo.png";

export const CustomHeader = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const shouldShowPill = isScrolled || !isHome;

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-2 md:pt-4 px-4">
            <header className={`flex lg:grid lg:grid-cols-3 items-center justify-between gap-4 md:gap-8 px-4 md:px-8 py-3 transition-all duration-500 w-full max-w-7xl ${shouldShowPill
                ? 'bg-blue-petroleum shadow-2xl rounded-full'
                : 'bg-transparent lg:px-16 py-4'
                }`}>
                <h1 className="font-bold text-white text-xl md:text-2xl flex items-center gap-x-2">
                    YACHAI
                </h1>

                <button
                    className="lg:hidden text-white text-2xl"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? '✕' : '☰'}
                </button>

                <ul className="hidden lg:flex items-center justify-center flex-row gap-4 xl:gap-6 font-semibold whitespace-nowrap">
                    <li>
                        <Link className="font-semibold text-white hover:text-blue transition-colors duration-300 text-sm xl:text-base" to="/">
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link className="font-semibold text-white hover:text-blue transition-colors duration-300 text-sm xl:text-base" to="/about">
                            Sobre nosotros
                        </Link>
                    </li>
                    <li>
                        <Link className="font-semibold text-white hover:text-blue transition-colors duration-300 text-sm xl:text-base" to="/services">
                            Servicios
                        </Link>
                    </li>
                    <li>
                        <Link className="font-semibold text-white hover:text-blue transition-colors duration-300 text-sm xl:text-base" to="/clients">
                            Clientes
                        </Link>
                    </li>
                </ul>
                <div className="hidden lg:flex items-center justify-end">
                    <Link className="button text-xs xl:text-sm px-4 xl:px-6 py-2" to="/contact">
                        programar una llamada
                    </Link>
                </div>
            </header>

            {isMobileMenuOpen && (
                <div className="lg:hidden fixed top-20 left-4 right-4 bg-blue-petroleum rounded-2xl shadow-2xl p-6 z-40">
                    <ul className="flex flex-col gap-4 font-semibold">
                        <li>
                            <Link
                                className="block font-semibold text-white hover:text-blue transition-colors duration-300 py-2"
                                to="/"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Inicio
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block font-semibold text-white hover:text-blue transition-colors duration-300 py-2"
                                to="/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Sobre nosotros
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block font-semibold text-white hover:text-blue transition-colors duration-300 py-2"
                                to="/services"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Servicios
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="block font-semibold text-white hover:text-blue transition-colors duration-300 py-2"
                                to="/clients"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Clientes
                            </Link>
                        </li>
                        <li className="pt-2">
                            <Link
                                className="button block text-center w-full py-3"
                                to="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                programar una llamada
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    )
}
