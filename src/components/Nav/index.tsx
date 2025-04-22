import { useState, useEffect } from "react";
import { Button } from "../../components/global/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import image from '../global/images/my-uploads/orielixlogo.png';

export function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Handle scroll event to change navbar appearance
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (isMenuOpen && !target.closest('header')) {
                setIsMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isMenuOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isMenuOpen]);

    return (
        <header className={`py-0 px-0 md:px-2 fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md h-16' : 'bg-white/80 backdrop-blur-sm shadow-sm h-20 md:h-24'}`}>
            <div className="max-w-7xl mx-auto w-full">
                <div className="flex items-center justify-between h-full">
                    <div className="flex-shrink-0 pl-2 flex items-center h-full overflow-visible">
                        <Link
                            to="/"
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                                setIsMenuOpen(false);
                            }}
                            className="cursor-pointer transition-all duration-300 flex items-center justify-center overflow-visible"
                        >
                            <img
                                src={image}
                                alt="Orielix Logo"
                                className={`transition-all duration-300 transform hover:scale-110 ${isScrolled ? 'h-[60px] -mt-1' : 'h-[80px] md:h-[110px] -mt-1'}`}
                            />
                        </Link>
                    </div>

                    <div className="hidden md:flex flex-1 justify-center pl-10 lg:pl-20">
                        <nav className="flex items-center gap-4 lg:gap-10 px-4">
                            <Link
                                to="/"
                                className={`text-base lg:text-xl font-medium transition-all duration-300 relative px-2 lg:px-3 py-2 rounded-lg group ${location.pathname === '/' ? 'text-purple-600' : 'text-gray-900 hover:text-purple-600'}`}
                            >
                                <span className="relative z-10">Home</span>
                                <span className={`absolute inset-0 bg-purple-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center ${location.pathname === '/' ? 'scale-100 opacity-60' : 'opacity-0 group-hover:opacity-40'}`}></span>
                            </Link>
                            <Link
                                to="/about"
                                className={`text-base lg:text-xl font-medium transition-all duration-300 relative px-2 lg:px-3 py-2 rounded-lg group ${location.pathname === '/about' ? 'text-purple-600' : 'text-gray-900 hover:text-purple-600'}`}
                            >
                                <span className="relative z-10">Community</span>
                                <span className={`absolute inset-0 bg-purple-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center ${location.pathname === '/about' ? 'scale-100 opacity-60' : 'opacity-0 group-hover:opacity-40'}`}></span>
                            </Link>
                            <Link
                                to="/team"
                                className={`text-base lg:text-xl font-medium transition-all duration-300 relative px-2 lg:px-3 py-2 rounded-lg group ${location.pathname === '/team' ? 'text-purple-600' : 'text-gray-900 hover:text-purple-600'}`}
                            >
                                <span className="relative z-10">Session</span>
                                <span className={`absolute inset-0 bg-purple-100 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 origin-center ${location.pathname === '/team' ? 'scale-100 opacity-60' : 'opacity-0 group-hover:opacity-40'}`}></span>
                            </Link>
                        </nav>
                    </div>

                    <div className="hidden md:flex items-center flex-shrink-0 gap-2 lg:gap-4 mr-3 lg:mr-5">
                        <Link to="/login">
                            <Button variant="outline" className="border-2 rounded-full px-3 lg:px-5 py-1 lg:py-2 hover:bg-purple-50 hover:text-purple-600 hover:border-purple-300 transition-all text-sm lg:text-base font-medium">
                                Log in
                            </Button>
                        </Link>
                        <Link to="/register">
                            <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 rounded-full px-4 lg:px-6 py-1 lg:py-2 shadow-md hover:shadow-lg transition-all text-sm lg:text-base font-medium relative overflow-hidden group border-0">
                                <span className="relative z-10">Register</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Button>
                        </Link>
                    </div>

                    <button
                        className="md:hidden text-gray-700 mr-4 p-4 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 touch-manipulation relative z-50 flex items-center justify-center min-w-[50px] min-h-[50px]"
                        onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleMenu();
                        }}
                        onTouchStart={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                        }}
                        onTouchEnd={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleMenu();
                        }}
                        aria-label="Toggle menu"
                    >
                        <div className="w-full h-full absolute inset-0" aria-hidden="true"></div>
                        {isMenuOpen ? <X className="h-8 w-8 pointer-events-none" /> : <Menu className="h-8 w-8 pointer-events-none" />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden absolute left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'max-h-[calc(100vh-5rem)] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}
                    style={{ top: isScrolled ? '64px' : '80px' }}
                >
                    <nav className="flex flex-col space-y-4 px-6 py-6">
                        <Link
                            to="/"
                            className={`text-lg font-medium rounded-lg p-3 transition-all duration-300 w-full block ${location.pathname === '/' ? 'bg-purple-100 text-purple-600' : 'hover:bg-purple-50 hover:text-purple-600'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className={`text-lg font-medium rounded-lg p-3 transition-all duration-300 w-full block ${location.pathname === '/about' ? 'bg-purple-100 text-purple-600' : 'hover:bg-purple-50 hover:text-purple-600'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Community
                        </Link>
                        <Link
                            to="/team"
                            className={`text-lg font-medium rounded-lg p-3 transition-all duration-300 w-full block ${location.pathname === '/team' ? 'bg-purple-100 text-purple-600' : 'hover:bg-purple-50 hover:text-purple-600'}`}
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Session
                        </Link>
                        <div className="flex flex-col space-y-3 pt-4">
                            <Link to="/login" className="w-full" onClick={() => setIsMenuOpen(false)}>
                                <Button variant="outline" className="border-2 w-full justify-center p-6 text-base">
                                    Log in
                                </Button>
                            </Link>
                            <Link to="/register" className="w-full" onClick={() => setIsMenuOpen(false)}>
                                <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 w-full justify-center p-6 text-base relative overflow-hidden group border-0">
                                    <span className="relative z-10">Register</span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </Button>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
