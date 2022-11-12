import { useState, useEffect } from 'react'
import { Image } from '@chakra-ui/react'
import logo from '../../assets/logo.svg'
import hamburgerIcon from '../../assets/icon-hamburger.svg'
import closeIcon from '../../assets/icon-close.svg'
import './Header.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        AOS.init();
    }, [])

    const toggleHandler = () => setToggle(!toggle);

    return (
        <nav className="navigation" data-aos="fade-in" once='true' data-aos-duration="2000">
            <Image src={logo} alt='loopstudio logo' />

            <button className="hamburger" onClick={toggleHandler}>
                <img src={toggle ? closeIcon : hamburgerIcon} alt="hamburger icon" />
            </button>

            <div
                className={toggle ? "navigation-menu display" : "navigation-menu"}>
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
    )
}

export default Nav