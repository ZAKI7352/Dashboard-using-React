import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Container } from '@chakra-ui/react'



const Dashboard = ({}) => {
    return (
        <DashboardLayout title="Dashboard">         
        <Container bg="red" maxW="70rem" >How are you </Container>
        </DashboardLayout>
    )
}

export default Dashboard
