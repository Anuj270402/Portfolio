import React, { useEffect, useState } from "react";

const Navbar =() =>{
    const [isVisible , setIsVisible] = useState(false) ;
    const [menuOpen , setMenuOpen] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 200){
                setIsVisible(true);
            }
            else{
                setIsVisible(false);
            }
        }
        window.addEventListener("scroll" , toggleVisibility);
        return() => {
            window.removeEventListener("scroll" , toggleVisibility);
        }
    },[]);
    const toggleMenu = ()=> {
        setMenuOpen(!menuOpen);
       };
    return(
        <nav className="fixed top-0 left -0 right -0 bg-blue-600 shadow-md z-50">
            <div className="max-w--7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* {Logo} */}
                    <div className="flex-shrink-0"> 
                        Portfolio
                    </div>
                </div>
            </div>
        </nav>
    )
}