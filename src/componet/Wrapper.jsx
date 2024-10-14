import React, { useEffect } from 'react'

import Header from './header/Header'
import Hero from './hero/Hero'
import PopupMenue from './PopupMenue'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import SocialMediaIcons from './socialMediaIcons/SocialMediaIcons'
import ThemeIcons from './themes/ThemeIcons'

function Wrapper() {

    return (
        <>
            <SocialMediaIcons />
            <ThemeIcons />
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <PopupMenue />
        </>
    )
}

export default Wrapper