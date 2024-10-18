import React from 'react'
import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";

const SideNav = () => {
    const navLinks = [
        {
            icon: RxDashboard,
            text: "Dashboard",
            link: "/",
        },
        {
            icon: BsArrowDownUp,
            text: "Transactions",
            link: "/transactions",
        },
    ];

    return (
        <Stack 
        boxShadow={{
            base:'none',
            lg:'lg'
        }}
        w={{
            base:'full',
            lg:"16rem" 
        }}
        h="100vh" 
        justify="space-between"
        bg="white"
        
        >
            <Box >
                <Heading textAlign="center" fontSize="20px" as="h1" pt="3.5rem">Zaki</Heading>
                <Box mx="3">
                    {navLinks.map((nav) => (
                        <HStack key={nav.text}
                            py="3"
                            px="4"
                            borderRadius="10px"
                            _hover={{ bg: "#F3F3F7", color: "#171717" }}
                            color="#797E82"
                        >
                            <Icon as={nav.icon} />
                            <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
                        </HStack>
                    ))}
                </Box>
            </Box>


            <Box mx="3" mb="6">
                <HStack
                    py="3"
                    px="4"
                    borderRadius="10px"
                    _hover={{ bg: "#F3F3F7", color: "#171717" }}
                    color="#797E82">

                    <Icon as={BiSupport} />
                    <Text fontSize="14px" fontWeight="medium">Support</Text>
                </HStack>
            </Box>
        </Stack>
    );
}

export default SideNav;
