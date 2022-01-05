import React from 'react';
import DashboardCard from './DashboardCard';
import { MdLocalShipping } from 'react-icons/md';
import { FaUserTag } from 'react-icons/fa';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { GiReceiveMoney } from 'react-icons/gi';

const Dashboard = () => {
    return (
        <div className="page-container">
            <div className="dashboard-card-container">
                <DashboardCard 
                    icon={GiReceiveMoney}
                    title="Total budget today"
                    statistic="$12k"
                    mainColor="5e2a75"
                />
                <DashboardCard
                    icon={MdLocalShipping}
                    title="Total orders today"
                    statistic="20"
                    mainColor="darkgreen"
                    additionalInfomation={{
                        content: "5 since yesterday",
                        isDeacreasing: true
                    }}
                />
                <DashboardCard
                    icon={FaUserTag}
                    title="Total Customers"
                    statistic="1000"
                    mainColor="1750c1"
                    additionalInfomation={{   
                        content: "12 Since last month",
                        isDeacreasing: false
                    }}
                />
                <DashboardCard
                    icon={RiMoneyDollarCircleFill}
                    title="Total profit today"
                    statistic="$10k"
                    mainColor="yellow"
                />
            </div>
            <div className="dashboard-card-container">
                <DashboardCard 
                    icon={GiReceiveMoney}
                    title="Total budget today"
                    statistic="$12k"
                    mainColor="5e2a75"
                />
                <DashboardCard
                    icon={MdLocalShipping}
                    title="Total orders today"
                    statistic="20"
                    mainColor="darkgreen"
                    additionalInfomation={{
                        content: "5 since yesterday",
                        isDeacreasing: true
                    }}
                />
                <DashboardCard
                    icon={FaUserTag}
                    title="Total Customers"
                    statistic="1000"
                    mainColor="1750c1"
                    additionalInfomation={{   
                        content: "12 Since last month",
                        isDeacreasing: false
                    }}
                />
                <DashboardCard
                    icon={RiMoneyDollarCircleFill}
                    title="Total profit today"
                    statistic="$10k"
                    mainColor="yellow"
                />
            </div>
            <div className="dashboard-card-container">
                <DashboardCard 
                    icon={GiReceiveMoney}
                    title="Total budget today"
                    statistic="$12k"
                    mainColor="5e2a75"
                />
                <DashboardCard
                    icon={MdLocalShipping}
                    title="Total orders today"
                    statistic="20"
                    mainColor="darkgreen"
                    additionalInfomation={{
                        content: "5 since yesterday",
                        isDeacreasing: true
                    }}
                />
                <DashboardCard
                    icon={FaUserTag}
                    title="Total Customers"
                    statistic="1000"
                    mainColor="1750c1"
                    additionalInfomation={{   
                        content: "12 Since last month",
                        isDeacreasing: false
                    }}
                />
                <DashboardCard
                    icon={RiMoneyDollarCircleFill}
                    title="Total profit today"
                    statistic="$10k"
                    mainColor="yellow"
                />
            </div>
        </div>
    )
}

export default Dashboard
