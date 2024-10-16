import React from 'react';
import { Button } from './ui/button';
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
    return (
        <header className="bg-white/80 bl p-6 text-[#2D6AD6] fixed top-0 w-full z-50">
          <nav className='max-w-screen-lg mx-auto flex justify-between items-center'>
                <div className="logo text-2xl font-bold">
                    <StaticImage src={"../images/logo.png"} alt="Hero" className="w-48 h-auto object-contain mb-2" objectFit="contain" />
                </div>
                <nav>
                    <ul className="flex space-x-4">
                        <li className="hover:text-gray-400"><a href="#call-aperta">Call aperta</a></li>
                        <li className="hover:text-gray-400"><a href="#bando">Bando</a></li>
                        <li className="hover:text-gray-400"><a href="#chi-siamo">Chi siamo</a></li>
                    </ul>
                </nav>
                <Button className="bg-[#ea5b74] text-white px-24 py-6">
                    CANDIDATI ORA
                </Button>
          </nav>
        </header>
    );
};

export default Header;