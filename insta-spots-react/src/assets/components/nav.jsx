import React from 'react'
import logo from '/logo.svg'
import '../../App.css'


const Nav = () => {
    return (
        <nav className='w-full h-fit bg-white py-5 px-5 flex justify-center items-center'>
            <img src={logo} alt="insta spots logo" />
        </nav>
    )
}

export default Nav