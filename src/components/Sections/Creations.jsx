import { Box, Heading, Stack, Button, Spacer } from '@chakra-ui/react'
import React from 'react';
import deepEarthMobile from '../../assets/mobile/image-deep-earth.jpg'
import nightArcadeMobile from '../../assets/mobile/image-night-arcade.jpg'
import soccerTeamMobile from '../../assets/mobile/image-soccer-team.jpg'
import gridMobile from '../../assets/mobile/image-grid.jpg'
import fromAboveMobile from '../../assets/mobile/image-from-above.jpg'
import pocketBorealisMobile from '../../assets/mobile/image-pocket-borealis.jpg'
import curiosityMobile from '../../assets/mobile/image-curiosity.jpg'
import fisheyeMobile from '../../assets/mobile/image-fisheye.jpg'
import deepEarthDesk from '../../assets/desktop/image-deep-earth.jpg'
import nightArcadeDesk from '../../assets/desktop/image-night-arcade.jpg'
import soccerTeamDesk from '../../assets/desktop/image-soccer-team.jpg'
import gridDesk from '../../assets/desktop/image-grid.jpg'
import fromAboveDesk from '../../assets/desktop/image-from-above.jpg'
import pocketBorealisDesk from '../../assets/desktop/image-pocket-borealis.jpg'
import curiosityDesk from '../../assets/desktop/image-curiosity.jpg'
import fisheyeDesk from '../../assets/desktop/image-fisheye.jpg'

import './Section.css';



export const Creation = ({ text, imgMobile, imgDesk }) => {
    return (
        <Box backgroundImage={[imgMobile, imgMobile, imgMobile, imgDesk]} backgroundSize='cover' backgroundPosition='center' w='100%' h={['150px', '150px', '150px', '500px']} my={['10', '10', '0']} pl='10' pt={['20%', '20%', '15%', '130%']}>
            <Heading textAlign='left' color='white' w='120px' textTransform='uppercase'>{text}</Heading>
        </Box>
    )
}

const Creations = () => {
    return (
        <>
            <Stack direction={['column', 'column', 'row']} justifyItems={['center', 'center', 'start']} alignItems={['center', 'center', 'start']} w='90%' mx='auto' my='25px' position='relative'>
                <Heading fontSize={40} fontWeight='thin'>OUR CREATIONS</Heading>
                <Spacer />
                <Button position={['absolute', 'absolute', 'unset']} top={['1470px', '1470px', 'unset']} w={['200px', '150px']} p={8} border='2px solid black' background='transparent' fontWeight={900} fontSize='16px'> SEE ALL</Button>
            </Stack>
            <Box w='90%' mx='auto' className='creations'>
                <Creation text='Deep earth' imgMobile={deepEarthMobile} imgDesk={deepEarthDesk} />
                <Creation text='Night arcade' imgMobile={nightArcadeMobile} imgDesk={nightArcadeDesk} />
                <Creation text='Soccer team VR' imgMobile={soccerTeamMobile} imgDesk={soccerTeamDesk} />
                <Creation text='The grid' imgMobile={gridMobile} imgDesk={gridDesk} />
                <Creation text='From up above VR' imgMobile={fromAboveMobile} imgDesk={fromAboveDesk} />
                <Creation text='Pocket borealis' imgMobile={pocketBorealisMobile} imgDesk={pocketBorealisDesk} />
                <Creation text='The curiosity' imgMobile={curiosityMobile} imgDesk={curiosityDesk} />
                <Creation text='Make it fisheye' imgMobile={fisheyeMobile} imgDesk={fisheyeDesk} />
            </Box>
        </>
    )
}

export default Creations