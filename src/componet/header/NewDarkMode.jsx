"use client"
import { Icon } from '@iconify/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { toggleThemeMode, changeThemeMode } from "../../redux/slice/ThemeSlice";

function NewDarkMode() {
    const dispatch = useDispatch();

    const theme = useSelector((store) => store.theme.theme);

    // const theme = savedTheme
    //     ? savedTheme
    //     : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "default-dark" : "default-light");


    useEffect(() => {
        const root = document.body;
        // Save the selected theme to localStorage whenever the theme changes
        dispatch(changeThemeMode(theme));
        // root.classList.remove();

        root.classList.add(theme);
    }, []);

    const themeMode = useSelector((state) => state.theme.themeMode);

    // Handle theme toggle (manual switch)
    const handleToggle = () => {
        dispatch(toggleThemeMode());
    };

    // Listen for system preference changes
    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        // Set theme based on system preference initially
        const handleSystemThemeChange = (e) => {
            if (e.matches) {
                // System prefers dark mode
                dispatch(changeThemeMode('dark'));
            } else {
                // System prefers light mode
                dispatch(changeThemeMode('light'));
            }
        };

        // Listen for changes in system preference
        mediaQuery.addEventListener('change', handleSystemThemeChange);

        // Clean up event listener on component unmount
        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, [dispatch, themeMode]);

    return (
        <div
            className="flex items-center w-[30px] h-[30px] md:w-[45px] md:h-6 p-[2px] rounded-full bg-theme_border border border-theme_bg cursor-pointer hover:border-primary"
            onClick={handleToggle}
        >
            <div className={`transform ${themeMode === 'dark' ? 'md:translate-x-full' : 'translate-x-0'} rounded-full p-[2px] bg-theme_fg dark:bg-theme_fg transition-transform duration-300`}>
                {themeMode === 'dark' ? (
                    <Icon icon="line-md:sunny-outline-to-moon-loop-transition" className="text-white w-[20px] h-[20px] md:w-[16px] md:h-[16px]" />
                ) : (
                    <Icon icon="line-md:sunny-loop" className="text-black w-[20px] h-[20px] md:w-[16px] md:h-[16px]" />
                )}
            </div>
        </div>
    );
}

export default NewDarkMode;
