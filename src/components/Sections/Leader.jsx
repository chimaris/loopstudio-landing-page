import { VStack, Image, Text, Heading, Stack } from '@chakra-ui/react';
import React from 'react';
import interactive from '../../assets/mobile/image-interactive.jpg'

import './Section.css';

const inFoStyle = {
    w: ['90%', '80%', '90%'],
    mx: 'auto',
    my: '100',
}
const leaderStyle = {
    w: ['90%', '95%'],
    bgColor: 'white',
    alignSelf: 'center',
}
const textStyle = {
    fontFamily: "Alata",
    fontSize: '1.5rem',
    lineHeight: '2.5rem',
    color: '#8c8c8c',

}

const Leader = () => {
    return (
        <Stack sx={inFoStyle} direction={['column', 'column', 'column', 'row']} >
            <Image src={interactive} className='leaderImage' data-aos="fade-right" once='true' data-aos-duration="1000" />
            <VStack sx={leaderStyle} className='leaderText' data-aos="fade-left" once='true' data-aos-duration="1000">
                <Heading py={10} size={['4xl', '3xl']} textTransform='uppercase' fontWeight='normal'>The leader in interactive VR</Heading>
                <Text sx={textStyle}>Founded in 2011, Loopstudios has been producing world-class virtual reality
                    projects for some of the best companies around the globe. Our award-winning
                    creations have transformed businesses through digital experiences that bind
                    to their brand.</Text>
            </VStack>
        </Stack>
    )
}

export default Leader