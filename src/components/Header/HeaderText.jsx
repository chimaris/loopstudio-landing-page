import { Heading } from '@chakra-ui/react'
import React from 'react'

const headingStyle = {
    border: '2px solid white',
    color: 'white',
    textAlign: 'left',
    fontSize: '5rem',
    lineHeight: '4.8rem',
    letterSpacing: '2',
    textTransform: 'uppercase',
    fontWeight: 'thin',
    w: ['90%', '90%', '60%', '30%'],
    p: '1.5rem',
    mx: ['auto', 'auto', '6%'],
    my: '10rem'
}

const HeaderText = () => {
    return (
        <Heading as='h1' sx={headingStyle} noOfLines={4}>Immersive experiences that deliver</Heading>
    )
}

export default HeaderText