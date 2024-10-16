import React, { useState } from 'react';
import { popUpMenuecontent } from '../content/Contents';
import { createElement } from "react";
import { useSelector } from 'react-redux';

function PopupMenue() {
    const { nav } = popUpMenuecontent;
    const [active, setActive] = useState(0);

    const menueOpen = useSelector((state) => state.popUp.isMenuOpen)

    return (
        <div className="w-full flex justify-center">
            <nav
                className={`fixed  z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-2 backdrop-blur-md rounded-full dark:bg-gray-700/65 duration-300 ${menueOpen ? "bottom-3" : "bottom-[-100%]"
                    } md:hidden`}
            >
                {nav.map((item, i) => (
                    <a key={i}
                        href={item.link}
                        onClick={() => setActive(i)}
                        className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-primary_dark dark:bg-primary font-bold hover:bg-primary_dark text-white"}  hover:bg-primary_dark hover:text-white dark:hover:bg-primary dark:text-white`}
                    >
                        {createElement(item.icon)}
                    </a>
                ))}
            </nav>
        </div>
    );
};


export default PopupMenue;
