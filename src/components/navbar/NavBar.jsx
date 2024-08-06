import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    };

    const navItems = [
        { id: 1, text: 'Home', link: '/' },
        { id: 2, text: 'Projects', link: '/projects' },
        { id: 3, text: 'About', link: '/about' },
        { id: 4, text: 'Contact', link: '/contact' },
    ];

    return (
        <div className='bg-[#1c2e4a] flex justify-between items-center max-w-[70%] mx-auto px-4 text-white rounded-[30px] m-[10px] border-[#00df9a] border-2 '>
            <ul className='hidden md:flex'>
                {navItems.map(item => (
                    <li key={item.id} className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'>
                        <Link to={item.link}>{item.text}</Link>
                    </li>
                ))}
            </ul>
            <div onClick={handleNav} className='md:hidden'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>
            <ul className={nav ? 'fixed md:hidden left-0 top-0 w-[30%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'}>
                {navItems.map(item => (
                    <li key={item.id} className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'>
                        <Link to={item.link} onClick={() => setNav(false)}>{item.text}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default NavBar;
