import { HStack, Stack, Image, VStack, Text, Spacer, Box } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/logo.svg'
import fb from '../../assets/icon-facebook.svg'
import twitter from '../../assets/icon-twitter.svg'
import instagram from '../../assets/icon-instagram.svg'
import pinterest from '../../assets/icon-pinterest.svg'

import './Section.css';


const Footer = () => {
    return (
        <Box bgColor='black' w='100%' mt='40' mx='auto' p={20}>
            <Stack direction={['column', 'column', 'row']} spacing='20px' color='white'>
                <VStack spacing={5} alignItems={['center', 'center', 'start']}>
                    <Image src={logo} alt='loopstudio logo' />
                    <Stack direction={['column', 'column', 'row']} spacing='10px' className='footerLinks'>
                        <a href="#" >About</a>
                        <a href="#">Careers</a>
                        <a href="#" >Events</a>
                        <a href="#" >Products</a>
                        <a href="#" >Support</a>
                    </Stack>
                </VStack>
                <Spacer />
                <VStack spacing={5} alignItems={['center', 'center', 'end']}>
                    <HStack spacing={5}>
                        <button> <img src={fb} alt="facebook icon" /> </button>
                        <button> <img src={twitter} alt="twitter icon" /> </button>
                        <button> <img src={instagram} alt="instagram icon" /> </button>
                        <button> <img src={pinterest} alt="pinterest icon" /> </button>
                    </HStack>
                    <Text fontSize={['1.5rem', '2rem']}>Support © 2021 Loopstudios. All rights reserved.</Text>
                </VStack>

            </Stack >
        </Box >
    )
}

export default Footer