import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { Container } from '@chakra-ui/react'
import PortfolioSection from './components/portfolioSection'



const Dashboard = ({ }) => {
    return (
        <DashboardLayout title="Dashboard">
            <PortfolioSection />
        </DashboardLayout>
    )
}

export default Dashboard
