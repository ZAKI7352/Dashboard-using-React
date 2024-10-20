import React from 'react'
import { Heading, Menu, MenuButton, MenuList, MenuItem, HStack, Box, Button ,Icon} from '@chakra-ui/react'
import { FaUserTie } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const Topnav = ({title, onOpen}) => {
    return (
        <Box px='4' bg="white">
            <HStack
                maxW="70rem"
                h="16"
                justify="space-between"
                // px="32"
                mx="auto"
            >
                <Icon as={FaBars} 
                onClick={onOpen} 
                display={{
                    base:"block",
                    lg:"none"
                }}
                
                />
                <Heading fontSize="28px" fontWeight="medium">{title}</Heading>
                <Menu>
                    <MenuButton >
                        <Icon as={FaUserTie} fontSize="24px"/>
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Profile</MenuItem>
                        <MenuItem>Support</MenuItem>
                        <MenuItem>Log Out</MenuItem>
                        
                    </MenuList>
                </Menu>
            </HStack>
        </Box>
    )
}

export default Topnav

