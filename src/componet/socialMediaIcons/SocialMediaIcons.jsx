import React from 'react';
import { Icon } from '@iconify/react';

const SocialMediaIcons = () => {
    return (

        <div className="hidden sm:flex fixed left-8 top-1/3 transform -translate-y-1/2 flex-col  space-y-2 z-30">
            <a href="https://www.linkedin.com/in/alim-zahiroglu" target="_blank" rel="noopener noreferrer">
                <Icon icon='basil:linkedin-outline' height='26' width='26' className='text-secondary_light hover:text-secondary' />
            </a>
            <a href="https://github.com/koltikin" target="_blank" rel="noopener noreferrer">
                <Icon icon='proicons:github' height='26' width='26' className='text-secondary_light hover:text-secondary' />
            </a>
            <a href="https://www.youtube.com/@alim-zahiroglu" target="_blank" rel="noopener noreferrer">
                <Icon icon='basil:youtube-outline' height='26' width='26' className='text-secondary_light hover:text-secondary' />
            </a>
            <a href="mailto:koltikin210@gmail.com">
                <Icon icon='mdi:email-outline' height='26' width='26' className='text-secondary_light hover:text-secondary' />
            </a>
        </div>
    );
};

export default SocialMediaIcons;
