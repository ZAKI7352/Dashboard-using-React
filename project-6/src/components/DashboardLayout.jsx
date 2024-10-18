import React from 'react'
import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import SideNav from './SideNav'
import Topnav from './Topnav'
import SideDrawer from './SideDrawer'

const DashboardLayout = ({ title, children }) => {
    const {onOpen, onClose, isOpen } = useDisclosure();

    return (
        <Box>
            <Flex>
                <Box display={{
            base:"none",
            lg:"flex"
        }}>
                    
                <SideNav />
                </Box>
                <SideDrawer isOpen={isOpen} onClose={onClose}/>
                <Box flexGrow={1}>
                    <Topnav title={title} onOpen={onOpen}/>
                    <Box px="4">{children}</Box>
                </Box >
            </Flex>
        </Box>
    )
}

export default DashboardLayout
