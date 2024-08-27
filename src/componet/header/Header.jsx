import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Logo from '../../assets/images/ziya.svg';
import DarkModeButton from './DarkModeButton';
import NavLink from '../NavLink';
import { IoMdMenu } from "react-icons/io";
import { toggleMenu } from '../../redux/slice/PopUpSlice';
import PopupMenue from '../PopupMenue';
import { headrMenue } from '../../content/Content';

function Header() {
    const dispatch = useDispatch();
    const [activeLink, setActiveLink] = useState(0);

    const handlePopUp = () => {
        dispatch(toggleMenu());
    };

    return (
        <div className=' fixed w-[100%] bg-white dark:bg-primary_dark dark:drop-shadow-[1px_1px_1px_white] dark:text-white z-40'>
            <div className='shadow-md bg-primary-light py-4 px-2'>
                <div className='container flex justify-between items-center'>
                    {/* Left Section (Logo) */}
                    <div className='flex-shrink-0 ml-2 sm:ml-0'>
                        <a href='#' className='font-bold text-2xl sm:text-3xl flex gap-2 items-center'>
                            <img className='w-[36px] h-auto uppercase' alt='logo' src={Logo} />
                            Ziya
                        </a>
                    </div>

                    {/* Middle Menu (for larger screens) */}
                    <div className='hidden md:flex justify-center items-center gap-8 flex-grow'>
                        {
                            headrMenue && headrMenue.map((menue, i) => (
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

                    {/* DarkMode Button */}
                    <div className="mr-2 sm:mr-0">
                        <DarkModeButton />
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className='md:hidden absolute left-1/2 transform -translate-x-1/2'>
                        <IoMdMenu className='text-3xl cursor-pointer' onClick={handlePopUp} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
