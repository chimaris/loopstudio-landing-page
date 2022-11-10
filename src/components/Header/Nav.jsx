import { useState } from 'react'
import { Image } from '@chakra-ui/react'
import logo from '../../assets/logo.svg'
import hamburgerIcon from '../../assets/icon-hamburger.svg'
import closeIcon from '../../assets/icon-close.svg'
import './Header.css'

const Nav = () => {
    const [toggle, setToggle] = useState(false);

    const toggleHandler = () => setToggle(!toggle);

    return (
        <nav className="navigation">
            <Image src={logo} alt='loopstudio logo' w={['40%', '40%', '30%']} h={['70%', '70%', '100%']} />

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