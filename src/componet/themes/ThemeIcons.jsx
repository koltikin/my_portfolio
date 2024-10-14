import React from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../../redux/slice/ThemeSlice';

const ThemeIcons = () => {
    const themes = [
        {
            name: "default",
            color: "rgb(17, 125, 192)",
        },
        {
            name: "youtube",
            color: "rgb(255, 2, 0)",
        },
        {
            name: "twitch",
            color: "rgb(145, 71, 255)",
        },
        {
            name: "hacker",
            color: "rgb(70, 153, 235)",
        },
        {
            name: "miro",
            color: "rgb(255, 221, 51)",
        },
        {
            name: "mangoDB",
            color: "rgb(0, 237, 100)",
        },
        {
            name: "jetBrian",
            color: "rgb(107, 86, 255)",
        },
        {
            name: "pusher",
            color: "rgb(135, 49, 210)",
        },
    ];
    const dispatch = useDispatch();

    const handleClick = (payload) => {
        dispatch(setTheme(payload));
    }

    return (
        <div className="hidden sm:flex fixed right-6 top-1/3 transform -translate-y-1/2 flex-col space-y-2 z-30">
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
