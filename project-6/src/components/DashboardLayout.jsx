import React from 'react'
import { Box,Flex } from '@chakra-ui/react'
import SideNav from './SideNav'
import Topnav from './Topnav'

const DashboardLayout = ({title, children}) => {
    return (
        <Box>
            <Flex>
                <SideNav />
                <Box flexGrow={1}>
                    <Topnav title={title}/>
                    <Box px="4">{children}</Box>
                </Box >
            </Flex>
        </Box>
    )
}

export default DashboardLayout
