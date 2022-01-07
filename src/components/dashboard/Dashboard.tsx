import React from 'react';
import DashboardCard from './DashboardCard';
import LineChart from './LineChart';
import PieChart from './PieChart';
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
                <div className="flex-row dashboard-chart__container">
                    <div className="dashboard-chart__wrapper-line">
                        <div className="dashboard-chart__title">
                            Total order and profit
                        </div>
                        <div className="dashboard-chart__dropdown-section m-r-1rem">
                            <span>Order by: </span>
                            <select className="dashboard-chart__dropdown-selector">
                                <option value="this_week">This week</option>
                                <option value="this_month">This month</option>
                                <option value="this_year">This year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                            </select>
                        </div>
                        <LineChart/>
                    </div>
                    <div className="dashboard-chart__wrapper-pie">
                        <div className="dashboard-chart__title">
                            Total ordered dishes by category
                        </div>
                        <div className="dashboard-chart__dropdown-section">
                            <span>Order by: </span>
                            <select className="dashboard-chart__dropdown-selector">
                                <option value="this_week">This week</option>
                                <option value="this_month">This month</option>
                                <option value="this_year">This year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                            </select>
                        </div>
                        <PieChart/>
                    </div>
                </div>
                <div className="flex-row dashboard-chart__container">
                    <div className="dashboard-chart__wrapper-line">
                        <div className="dashboard-chart__title">
                            Total order and profit
                        </div>
                        <div className="dashboard-chart__dropdown-section m-r-1rem">
                            <span>Order by: </span>
                            <select className="dashboard-chart__dropdown-selector">
                                <option value="this_week">This week</option>
                                <option value="this_month">This month</option>
                                <option value="this_year">This year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                            </select>
                        </div>
                        <LineChart/>
                    </div>
                    <div className="dashboard-chart__wrapper-pie">
                        <div className="dashboard-chart__title">
                            Total ordered dishes by category
                        </div>
                        <div className="dashboard-chart__dropdown-section">
                            <span>Order by: </span>
                            <select className="dashboard-chart__dropdown-selector">
                                <option value="this_week">This week</option>
                                <option value="this_month">This month</option>
                                <option value="this_year">This year</option>
                                <option value="2021">2021</option>
                                <option value="2020">2020</option>
                                <option value="2019">2019</option>
                            </select>
                        </div>
                        <PieChart/>
                    </div>
                </div>
        </div>
    )
}

export default Dashboard
