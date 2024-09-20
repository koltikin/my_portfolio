import React, { useEffect } from 'react'

import Header from './header/Header'
import Hero from './hero/Hero'
import PopupMenue from './PopupMenue'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme } from '../redux/slice/ThemeSlice'

function Wrapper() {

    const dispatch = useDispatch();
    const theme = useSelector((store) => store.theme.theme)

    useEffect(() => {
        dispatch(dispatch(setTheme(theme)))
    }, []);
    return (
        <>
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <PopupMenue />
        </>
    )
}

export default Wrapper