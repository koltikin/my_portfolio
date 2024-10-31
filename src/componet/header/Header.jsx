import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DarkModeButton from './DarkModeButton';
import NavLink from '../NavLink';
import { IoMdMenu } from "react-icons/io";
import { toggleMenu } from '../../redux/slice/PopUpSlice';
import { useHeaderMenu } from '../../content/Contents';
import { IoClose } from "react-icons/io5";
import MobileThemes from '../themes/MobileThemes';
import LangSwicher from './LangSwicher';

function Header() {
    const header = useHeaderMenu();
    const logoLetter = header.logoLetter;
    const headerMenu = header.headerMenu;
    const dispatch = useDispatch();
    const [activeLink, setActiveLink] = useState(0);
    const isMenuOpen = useSelector((state) => state.popUp.isMenuOpen);

    const handlePopUp = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className='fixed w-[100%] bg-theme_fg drop-shadow-[1px_1px_1px_white] z-40'>
            <div className='shadow-md bg-primary-light py-2 px-2'>
                <div className='container flex justify-between items-center'>

                    {/* Left Section (Logo) */}
                    <div className='flex-shrink-0 ml-2 sm:ml-0'>
                        <a href={logoLetter.link} className='font-bold text-secondary font-dafoe text-2xl sm:text-3xl flex gap-2 items-center'>
                            {logoLetter.logo}
                        </a>
                    </div>

                    {/* Middle Menu (for larger screens) */}
                    <div className='hidden md:flex justify-center items-center gap-8 flex-grow'>
                        {
                            headerMenu && headerMenu.map((menue, i) => (
                                <NavLink
                                    key={i}
                                    href={menue.link}
                                    isActive={i === activeLink}
                                    onClick={() => setActiveLink(i)}
                                >
                                    {menue.title}
                                </NavLink>
                            ))
                        }
                    </div>

                    {/* LangSwicher (for large screens only) */}
                    <div className='hidden md:flex justify-center items-center'>
                        <LangSwicher />
                    </div>

                    {/* DarkMode Button and themes */}
                    <div className='flex justify-center items-center space-x-2 mr-2 sm:mr-0'>
                        <div className='sm:hidden'>
                            <MobileThemes />
                        </div>
                        <div className="">
                            <DarkModeButton />
                        </div>
                    </div>

                    {/* Mobile Menu Icon with LangSwicher */}
                    <div className='md:hidden flex items-center space-x-4 absolute left-1/2 transform -translate-x-1/2'>
                        <LangSwicher /> {/* Centered Language Switcher */}
                        <div onClick={handlePopUp} className=''>
                            {
                                isMenuOpen ? <IoClose className='text-3xl cursor-pointer' /> : <IoMdMenu className='text-3xl cursor-pointer' />
                            }
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Header;