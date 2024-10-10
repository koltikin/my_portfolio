import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    theme: localStorage.getItem('theme') ? localStorage.getItem('theme') : (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'default-dark' : 'default-light'),
    themeMode: localStorage.getItem('themeMode') ? localStorage.getItem('themeMode') : (window.matchMedia("(prefers-color-scheme: dark)").matches ? 'dark' : 'light'),
};

const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleThemeMode: (state) => {
            const classArray = [...document.body.classList];
            const themeClass = classArray.find(cls => cls.endsWith('-dark') || cls.endsWith('-light'));

            if (themeClass) {
                const isDark = themeClass.endsWith('-dark');
                const newThemeClass = isDark ? themeClass.replace('-dark', '-light') : themeClass.replace('-light', '-dark');
                state.theme = newThemeClass;
                const newThemeMode = newThemeClass.split('-')[1];

                state.themeMode = newThemeMode;
                if (typeof localStorage !== 'undefined') {
                    localStorage.setItem('theme', newThemeClass);
                    localStorage.setItem('themeMode', newThemeMode);
                }
                document.body.classList.replace(themeClass, newThemeClass);
            }
        },
        setTheme: (state, action) => {
            const classArray = [...document.body.classList];
            const currentThemeClass = classArray.find(cls => cls.endsWith('-dark') || cls.endsWith('-light'));

            if (currentThemeClass) {
                const newThemeClass = action.payload.concat(`-${state.themeMode}`);

                state.theme = newThemeClass;

                localStorage.setItem('theme', newThemeClass);

                document.body.classList.replace(currentThemeClass, newThemeClass);
            } else {

                localStorage.setItem('theme', action.payload);
                const themeMode = action.payload.split('-')[1];
                localStorage.setItem("themeMode", themeMode);
                document.body.classList.add(action.payload);
            }
        },
        changeThemeMode: (state, action) => {
            const classArray = [...document.body.classList];
            const currentThemeClass = classArray.find(cls => cls.endsWith('dark') || cls.endsWith('light'));

            if (currentThemeClass) {
                const newThemeClass = currentThemeClass.replace(/(dark|light)$/, action.payload);
                const newThemeMode = action.payload;

                state.theme = newThemeClass;
                state.themeMode = newThemeMode;

                localStorage.setItem('theme', newThemeClass);
                localStorage.setItem('themeMode', newThemeMode);

                document.body.classList.replace(currentThemeClass, newThemeClass);
            }
        },
    },
});

export const { toggleThemeMode, setTheme, changeThemeMode } = themeSlice.actions;
export default themeSlice.reducer;
