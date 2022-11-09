import { Stack, IconButton } from '@chakra-ui/react'
import { FaBars } from "react-icons/fa";
import React from 'react'

const Nav = () => {
    return (
        // <IconButton
        //     icon={<FaBars />}
        //     variant='outline'
        //     color='white'
        //     size='lg'
        // />
        <Stack direction={['column', 'row']} spacing='10px' color='white' fontWeight='bold'>
            <a href="#" className="nav-link">About</a>
            <a href="#" className="nav-link">Careers</a>
            <a href="#" className="nav-link">Events</a>
            <a href="#" className="nav-link">Products</a>
            <a href="#" className="nav-link">Support</a>
        </Stack>
    )
}

export default Nav