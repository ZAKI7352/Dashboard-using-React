import React from 'react'
import { Box, HStack, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import { RxDashboard } from "react-icons/rx";
import { BsArrowDownUp } from "react-icons/bs";



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
        <Stack boxShadow="sm" maxW="16rem"bg="red" h="100vh" >
            <Heading textAlign="center" fontSize= "20px" as="h1" pt="3.5rem">Zaki</Heading>
            <Box mx="3">
            {navLinks.map((nav) => {
                <HStack key={nav.text}>
                    <Icon as={nav.icon} />
                    <Text>{nav.text}</Text>
                </HStack>
            })}
            </Box>
        </Stack>
    )
}

export default SideNav

