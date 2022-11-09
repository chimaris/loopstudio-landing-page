import { HStack, IconButton, Stack, Image, VStack, Text, Spacer } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/logo.svg'
import fb from '../../assets/icon-facebook.svg'
import twitter from '../../assets/icon-twitter.svg'
import instagram from '../../assets/icon-instagram.svg'
import pinterest from '../../assets/icon-pinterest.svg'

import './Footer.css';


const Footer = () => {
    return (
        <Stack direction={['column', 'row']} bgColor='black' mt='20' spacing='20px' py={20} px={['100px', '200px']} color='white'>
            <VStack spacing={5} alignItems={['center', 'start']}>
                <Image src={logo} alt='loopstudio logo' />
                <Stack direction={['column', 'row']} spacing='10px'>
                    <a href="#" className="nav-link">About</a>
                    <a href="#" className="nav-link">Careers</a>
                    <a href="#" className="nav-link">Events</a>
                    <a href="#" className="nav-link">Products</a>
                    <a href="#" className="nav-link">Support</a>
                </Stack>
            </VStack>
            <Spacer />
            <VStack spacing={5} alignItems={['center', 'end']}>
                <HStack spacing={5}>
                    <IconButton icon={fb} color='#000' />
                    <IconButton icon={twitter} variant='outline' />
                    <IconButton icon={instagram} variant='outline' />
                    <IconButton icon={pinterest} variant='outline' />
                </HStack>
                <Text>Support © 2021 Loopstudios. All rights reserved.</Text>
            </VStack>

        </Stack>
    )
}

export default Footer