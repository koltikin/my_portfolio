import React from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/slice/ThemeSlice';
import { themes } from '../../content/Contents'

const ThemeIcons = () => {

    const dispatch = useDispatch();

    const handleClick = (payload) => {
        dispatch(setTheme(payload));
    }

    return (
        <div className="hidden sm:flex fixed right-6 top-1/3 sm:top-1/3 transform -translate-y-1/2 flex-col space-y-2 z-30">
            {themes && themes.map((theme) => (
                <button
                    key={theme.name}
                    className="rounded-full w-4 h-4 cursor-pointer"
                    style={{ backgroundColor: theme.color }}
                    onClick={() => handleClick(theme.name)}  // Wrap handleClick in an arrow function
                >
                </button>
            ))}
        </div>
    );
};

export default ThemeIcons;
