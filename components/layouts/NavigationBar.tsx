import appLogo from '../../public/navigation-logo.jpg';
import { AiOutlineHome } from "react-icons/ai";
import { FiPieChart } from 'react-icons/fi';
import { IoIosArrowForward } from 'react-icons/io';
import Image from 'next/image';

const NavigationBar = () => (
    <div className="navbar-container">
        <div className="navbar-logo-container">
            <Image src={appLogo}></Image>
        </div>
        <div className="navbar-item">
            <div>
                <AiOutlineHome className="navbar-item-icon"></AiOutlineHome>
                <div className="navbar-item-title">
                    Home
                </div>
            </div>
        </div>
        <div className="navbar-item justify-space-between">
            <div>
                <FiPieChart className="navbar-item-icon"></FiPieChart>
                <div className="navbar-item-title">
                    Analytics
                </div>
            </div>
            <IoIosArrowForward className="navbar-item-icon-dropdown"></IoIosArrowForward>
        </div>
    </div>
)
export default NavigationBar;