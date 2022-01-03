import appLogo from '../../public/navigation-logo.jpg';
import NavigationSubItemContainer from './navigation_bar/NavigationSubItemContainer'; '../layouts/navigation_bar/NavigationSubItemContainer';
import { AiOutlineHome } from "react-icons/ai";
import { FiPieChart } from 'react-icons/fi';
import { CgUserList } from 'react-icons/cg';
import { ImUserTie } from 'react-icons/im';
import { SiCodechef } from 'react-icons/si';
import { HiOutlineUserGroup } from 'react-icons/hi';
import { IoFastFoodOutline } from 'react-icons/io5';
import Image from 'next/image';
import { useState } from 'react';

const NavigationBar:React.FC = () => 
    {
        const [analystNavItemToggle,setAnalystNavItemToggle] = useState(false);

        const onToggleAnalystNavItem = () => {
            setAnalystNavItemToggle(!analystNavItemToggle);
        }

        return (
            <div className="navbar-container">
                <div className="navbar-logo-container">
                    <Image src={appLogo}></Image>
                </div>
                <div className="navbar-item m-tb-2rem">
                    <div>
                        <AiOutlineHome className="navbar-item-icon"></AiOutlineHome>
                        <div className="navbar-item-title">
                            Home
                        </div>
                    </div>
                </div>
                <NavigationSubItemContainer
                    parentIcon={FiPieChart}
                    parentTitle='Analystics'
                    subItems={[{icon:IoFastFoodOutline,title:'Dishes'},{icon:HiOutlineUserGroup,title:'Customers'}]}
                />
                <NavigationSubItemContainer
                    parentIcon={CgUserList}
                    parentTitle='Employees'
                    subItems={[{icon:ImUserTie,title:'Manager'},{icon:SiCodechef,title:'Chefs'}]}
                />
                <div className="navbar-item m-tb-2rem">
                    <div>
                        <HiOutlineUserGroup className="navbar-item-icon"></HiOutlineUserGroup>
                        <div className="navbar-item-title">
                            Customers
                        </div>
                    </div>
                </div>
                <div className="navbar-item m-tb-2rem">
                    <div>
                        <IoFastFoodOutline className="navbar-item-icon"></IoFastFoodOutline>
                        <div className="navbar-item-title">
                            Dishes
                        </div>
                    </div>
                </div>
            </div>
        );
    }
export default NavigationBar;