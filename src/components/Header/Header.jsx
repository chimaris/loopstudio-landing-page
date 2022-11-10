import React from 'react'
import { Box } from '@chakra-ui/react'
import Nav from './Nav';
import HeaderText from './HeaderText';
import bgImageMobile from '../../assets/mobile/image-hero.jpg'
import bgImageDesk from '../../assets/desktop/image-hero.jpg'

const headerStyle = {
    backgroundImage: [bgImageMobile, bgImageMobile, bgImageDesk],
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    h: '50rem',
    w: '100%',
}

const Header = () => {

    return (
        <Box sx={headerStyle}  >
            <Nav />
            <HeaderText />
        </Box>
    )
}

export default Header