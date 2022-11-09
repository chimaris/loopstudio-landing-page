import { Box, Heading, VStack, Stack, HStack, Button } from '@chakra-ui/react'
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
import './Footer.css';



export const Creation = ({ heading, imgMobile, imgDesk }) => {
    return (
        <Box backgroundImage={[imgMobile, imgDesk]} backgroundSize='cover' backgroundPosition='center' w='100%' h={['150px', '500px']} pl='10' pt={['20%', '130%']}>
            <Heading textAlign='left' color='white' w='120px' textTransform='uppercase'>{heading}</Heading>
        </Box>
    )
}

const Creations = () => {
    return (
        <>
            <Stack direction={['column', 'row']} justifyItems={['center', 'start']} alignItems={['center', 'start']} w='90%' mx='auto' my='25' spacing='70%' position='relative'>
                <Heading fontSize={40} fontWeight='thin'>OUR CREATIONS</Heading>
                <Button position={['absolute', 'unset']} top={['1500px', 'unset']} size={['lg', 'lg', 'md']}> SEE ALL</Button>
            </Stack>
            <Box w='90%' mx='auto' className='creations'>
                <Creation heading='Deep earth' imgMobile={deepEarthMobile} imgDesk={deepEarthDesk} />
                <Creation heading='Night arcade' imgMobile={nightArcadeMobile} imgDesk={nightArcadeDesk} />
                <Creation heading='Soccer team VR' imgMobile={soccerTeamMobile} imgDesk={soccerTeamDesk} />
                <Creation heading='The grid' imgMobile={gridMobile} imgDesk={gridDesk} />
                <Creation heading='From up above VR' imgMobile={fromAboveMobile} imgDesk={fromAboveDesk} />
                <Creation heading='Pocket borealis' imgMobile={pocketBorealisMobile} imgDesk={pocketBorealisDesk} />
                <Creation heading='The curiosity' imgMobile={curiosityMobile} imgDesk={curiosityDesk} />
                <Creation heading='Make it fisheye' imgMobile={fisheyeMobile} imgDesk={fisheyeDesk} />
            </Box>
        </>
    )
}

export default Creations