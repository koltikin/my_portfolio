import React, { useEffect } from 'react'

import Header from './header/Header'
import Hero from './hero/Hero'
import PopupMenue from './PopupMenue'
import Projects from './projects/Projects'
import Skills from './skills/Skills'
import SocialMediaIcons from './socialMediaIcons/SocialMediaIcons'

function Wrapper() {

    return (
        <>
            <SocialMediaIcons />
            <Header />
            <Hero />
            <Projects />
            <Skills />
            <PopupMenue />
        </>
    )
}

export default Wrapper