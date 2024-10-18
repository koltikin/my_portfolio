import React from 'react'

function Butttons({ link, icon: Icon, text }) {
    return (

        <a href={link ? link : '#'} className='flex items-center text-sm sm:text-sm gap-2 bg-primary text-primary_content py-2 px-4 rounded-md hover:bg-primary_dark'>
            {Icon && <Icon className='text-xl hidden sm:block' />} {text}
        </a>


    )
}

export default Butttons