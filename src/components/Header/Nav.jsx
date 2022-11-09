import { Stack, IconButton, Image } from '@chakra-ui/react'
import { FaBars } from "react-icons/fa";
import logo from '../../assets/logo.svg'

import { useState } from 'react'

import './Header.css'

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    const toggleHandler = () => {
        setToggle(!toggle);
    }

    return (
        <nav className="navigation">
            <Image src={logo} alt='loopstudio logo' w={['40%', '30%']} h={['70%', '100%']} />

            <button className="hamburger" onClick={toggleHandler}>
                {/* icon from heroicons.com */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="white"
                >
                    <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            <div
                className={toggle ? "navigation-menu expanded" : "navigation-menu"}>
                <ul>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Careers</a>
                    </li>
                    <li>
                        <a href="#">Events</a>
                    </li>
                    <li>
                        <a href="#">Products</a>
                    </li>
                    <li>
                        <a href="#">Support</a>
                    </li>
                </ul>
            </div>
        </nav>
        // <Stack direction={['column', 'row']} spacing='10px' color='white' fontWeight='bold'>
        //     <a href="#" className="nav-link">About</a>
        //     <a href="#" className="nav-link">Careers</a>
        //     <a href="#" className="nav-link">Events</a>
        //     <a href="#" className="nav-link">Products</a>
        //     <a href="#" className="nav-link">Support</a>
        // </Stack>
    )
}

export default Nav