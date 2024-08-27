import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isMenuOpen: false,
};

const popUpSlice = createSlice({
    name: 'popUp',
    initialState,
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
    },
});

export const { toggleMenu } = popUpSlice.actions;
export default popUpSlice.reducer;