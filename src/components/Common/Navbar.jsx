import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineUser, HiOutlineShoppingBag, HiBars3BottomLeft } from "react-icons/hi2"
import SearchBar from './SearchBar'
import CartDrawer from '../Layout/CartDrawer'
import { IoMdClose } from 'react-icons/io'
import { IoChevronDown } from 'react-icons/io5'
const Navbar = () => {

    const collectionMenuItems = [
        { title: "Tout Voir", path: "collections/all" },
        { title: "Meubles", path: "#" },
        { title: "Panier", path: "#" },
        { title: "Plateau", path: "#" },
        { title: "Objects Décoratifs", path: "#" },

    ];

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);
    const [isCollectionOpen, setIsCollectionOpen] = useState(false);
    const [isNavCollectionOpen, setIsNavCollectionOpen] = useState(false);
    const collectionMenuRef = useRef(null);

    const toggleNavDrawer = () => {
        setNavDrawerOpen(!navDrawerOpen);
    }

    const toggleCartDrawer = () => {
      setDrawerOpen(!drawerOpen);
    };

    const toggleCollectionMenu = () => setIsCollectionOpen(!isCollectionOpen);
    const toggleNavCollectionMenu = () => setIsNavCollectionOpen(!isNavCollectionOpen);

    const handleClickOutside = (e) => {
        // Close sidebar if clicked outside
        if (collectionMenuRef.current && !collectionMenuRef.current.contains(e.target)) {
            setIsCollectionOpen(false);
        }
    };

    useEffect(() => {
        // Ajouter l'écouteur d'événement pour détecter les clics extérieurs
        document.addEventListener("mousedown", handleClickOutside);
    
        // Nettoyer l'événement lors du démontage du composant
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []); 
    

  return (
    <>
    <nav className="container mx-auto flex items-center justify-between py-4 px-6">
            <button onClick={toggleNavDrawer} className="lg:hidden hover:text-black">
                <HiBars3BottomLeft className="h-6 w-6 text-gray-700"/>
            </button>
        <div>
            <Link to="/" className="Artisanat text-xl font-medium">
            Artisanat Cheffi
            </Link>
        </div>
        <div className="hidden lg:flex space-x-10">
            <Link to="/" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Accueil 
            </Link>
            <div ref={collectionMenuRef} className="relative">
                        <button 
                            onClick={toggleCollectionMenu} 
                            className="text-gray-700 hover:text-black text-sm font-medium uppercase flex items-center gap-1"
                        >
                            Collection
                            <IoChevronDown className={`h-4 w-4 transition-transform ${isCollectionOpen ? "rotate-180" : ""}`} />
                        </button>

                        {isCollectionOpen && (
                            <div onClick={toggleCollectionMenu} className="absolute left-0 mt-2 w-44 bg-white shadow-md rounded-md py-2 z-50">
                                {collectionMenuItems.map((item, index) => (
                                    <Link 
                                        key={index} 
                                        to={item.path} 
                                        className="block px-4 py-2  text-gray-700 hover:text-black"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        )}
            </div>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Notre Histoire
            </Link>
            <Link to="#" className="text-gray-700 hover:text-black text-sm font-medium uppercase">
            Contactez-nous
            </Link>
        </div>
        <div className="flex items-center space-x-4">
            <div className="overflow-hidden">
                <SearchBar/>
            </div>
            <Link to="/profile" className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700"/>
            </Link>
            <button onClick={toggleCartDrawer} className="relative hover:text-black">
                <HiOutlineShoppingBag className="h-6 w-6 text-gray-700"/>
                <span className="absolute -top-1 bg-[#dbb47e] text-white text-xs rounded-full px-2 py-0.5">5</span>
            </button>
        </div>
    </nav>
    <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer}/>
    <div className={`fixed top-0 left-0 w-2/3 md:w-1/3 lg:hidden h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-end p-4">
                    <button onClick={toggleNavDrawer}>
                        <IoMdClose className="h-6 w-6 text-gray-600 hover:text-black" />
                    </button>
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Menu</h2>
                    <nav className="space-y-4">
                        <Link to="/" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">Accueil</Link>
                        <button 
                            onClick={toggleNavCollectionMenu} 
                            className="w-full text-left text-gray-700 hover:text-black flex items-center justify-between"
                        >
                            Collection
                            <IoChevronDown className={`h-4 w-4 transition-transform ${isNavCollectionOpen ? "rotate-180" : ""}`} />
                        </button>
                        {isNavCollectionOpen && (
                            <div onClick={toggleNavDrawer} className="ml-4 space-y-2">
                                {collectionMenuItems.map((item, index) => (
                                    <Link 
                                        key={index} 
                                        to={item.path} 
                                        className="block text-gray-600 hover:text-black"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        )}
                        <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">Notre Histoire</Link>
                        <Link to="#" onClick={toggleNavDrawer} className="block text-gray-600 hover:text-black">Contactez-nous</Link>
                    </nav>
                </div>
        </div>
    </>
  )
}

export default Navbar
