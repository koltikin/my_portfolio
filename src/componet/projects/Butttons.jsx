import React from 'react'

function Butttons({ link, icon: Icon, text }) {
    return (

        <a href={link ? link : '#'} className='flex items-center text-[10px] sm:text-sm gap-2 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600'>
            {Icon && <Icon className='text-xl hidden sm:block' />} {text}
        </a>


    )
}

export default Butttons