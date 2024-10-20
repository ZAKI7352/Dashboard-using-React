import React from 'react'
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Button,
} from '@chakra-ui/react'
import SideNav from './SideNav'

const SideDrawer = ({isOpen,onClose}) => {
   

    return (
        <>
           
            <Drawer
                isOpen={isOpen}
                placement='left'
                onClose={onClose}
               
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton />
                    <SideNav/>
                    

                    
                </DrawerContent>
            </Drawer>
        </>
    )
}

export default SideDrawer
