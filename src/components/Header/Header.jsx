import React from 'react'
import { Box, Stack, Image } from '@chakra-ui/react'
import NavBar from './NavBar';
import HeaderText from './HeaderText';
import bgImageMobile from '../../assets/mobile/image-hero.jpg'
import bgImageDesk from '../../assets/desktop/image-hero.jpg'

const headerStyle = {
    backgroundImage: [bgImageMobile, bgImageDesk],
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    h: '50rem',
    w: '100%',
}

const Header = () => {

    return (
        <Box sx={headerStyle}  >
            <NavBar />
            <HeaderText />
        </Box>
    )
}

export default Header