import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { changeThemeMode, toggleThemeMode } from "../../redux/slice/ThemeSlice";
import { useEffect } from "react";

function DarkModeButton() {

    const dispatch = useDispatch();
    const theme = useSelector((store) => store.theme.theme);
    const themeMode = useSelector((state) => state.theme.themeMode);

    useEffect(() => {
        const root = document.body;
        dispatch(changeThemeMode(theme));
        root.classList.add(theme);
    }, []);

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
            className="flex items-center w-[41px] h-5 p-[3px] border border-theme_border hover:border-primary_light rounded-full bg-theme_bg cursor-pointer drop-shadow-[1px_1px_1px_white]"
            onClick={handleToggle}
        >
            <div className={`transform bg-theme_fg rounded-full p-[1px] ${themeMode === 'dark' ? 'translate-x-full' : ''} transition-transform duration-300`}>
                {themeMode === 'dark' ? (
                    < FaMoon className="h-4 w-4" />
                ) : (
                    <IoIosSunny className="h-4 w-4" />
                )}
            </div>
        </div>
    );
}

export default DarkModeButton;