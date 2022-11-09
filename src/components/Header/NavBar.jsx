import { HStack, Box, Text, Spacer, Image } from '@chakra-ui/react'
import React from 'react'
import Nav from './Nav'
import logo from '../../assets/logo.svg'

const navBarStyle = {
    h: '20px',
    w: ['100%', '90%'],
    py: '50px',
    px: '20px',
    m: 'auto',
}

const NavBar = () => {

    return (
        <HStack sx={navBarStyle} >
            <Image src={logo} alt='loopstudio logo' />
            <Spacer />
            <Nav />
        </HStack>
    )
}

export default NavBar