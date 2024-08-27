import { FaMoon } from "react-icons/fa";
import { IoIosSunny } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { useSwipeable } from 'react-swipeable';
import { toggleTheme } from "../../redux/slice/ThemeSlice";

function DarkModeButton() {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme.theme);

    const handleToggle = () => {
        dispatch(toggleTheme());
    };

    const handlers = useSwipeable({
        onSwipedRight: () => dispatch(setTheme('dark')),
        onSwipedLeft: () => dispatch(setTheme('light')),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true,
    });

    return (
        <div
            {...handlers}
            className="flex items-center w-[40px] h-5 p-1 rounded-full bg-gray-200 dark:bg-gray-600 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] dark:drop-shadow-[1px_1px_1px_white]"
            onClick={handleToggle}
        >
            <div className={`transform ${theme === 'dark' ? 'translate-x-full' : ''} transition-transform duration-300`}>
                {theme === 'dark' ? (
                    < FaMoon className="h-4 w-4 text-primary" />
                ) : (
                    <IoIosSunny className="h-4 w-4 text-blue-500" />
                )}
            </div>
        </div>
    );
}

export default DarkModeButton;