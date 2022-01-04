import appLogo from '../../../public/navigation-logo.jpg';
import NavigationSubItemContainer from './navigation_bar/NavigationSubItemContainer'; '../layouts/navigation_bar/NavigationSubItemContainer';
import NavigationItem from './navigation_bar/NavigationItem';
import { AiOutlineHome,AiOutlineLineChart } from "react-icons/ai";
import { FiPieChart } from 'react-icons/fi';
import { CgUserList } from 'react-icons/cg';
import { ImUserTie } from 'react-icons/im';
import { SiCodechef } from 'react-icons/si';
import { HiOutlineUserGroup, HiUserGroup } from 'react-icons/hi';
import { RiShieldUserLine } from 'react-icons/ri';
import { FaFileInvoiceDollar, FaOpencart, FaRegUserCircle } from 'react-icons/fa';
import { GiEntryDoor } from 'react-icons/gi';
import { IoFastFoodOutline } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';

const NavigationBar:React.FC = () => 
    {
        return (
            <div className="navbar-container">
                <div className="navbar-logo-container">
                    <Link href="/">
                        <Image src={appLogo}></Image>
                    </Link>
                </div>
                <NavigationItem icon={AiOutlineHome} title="Dashboard" url="" isSubItem={false}/>
                <div className="navbar-subcontainer">
                    <div className="navbar-subtitle">
                        Management
                    </div>
                    <NavigationSubItemContainer
                        parentIcon={FiPieChart}
                        parentTitle='Analytics'
                        subItems={[{icon:IoFastFoodOutline,title:'Dishes'},{icon:HiOutlineUserGroup,title:'Customers'}]}
                        url="analytics"
                    />
                    <NavigationSubItemContainer
                        parentIcon={CgUserList}
                        parentTitle='Employees'
                        subItems={[{icon:ImUserTie,title:'Managers'},{icon:SiCodechef,title:'Chefs'}]}
                        url="employees"
                    />
                    <NavigationItem icon={HiUserGroup} title="Customers" url="customers" isSubItem={false}/>
                    <NavigationItem icon={IoFastFoodOutline} title="Dishes" url="dishes" isSubItem={false}/>
                    <NavigationItem icon={FaFileInvoiceDollar} title="Invoices" url="invoices" isSubItem={false}/>
                    <NavigationItem icon={FaOpencart} title="Orders" url="orders" isSubItem={false}/>
                </div>
                <div className="navbar-subcontainer">
                    <div className="navbar-subtitle">
                        Others
                    </div>
                    <NavigationSubItemContainer
                        parentIcon={RiShieldUserLine}
                        parentTitle='Authentication'
                        subItems={[{icon:FaRegUserCircle,title:'Profile'},{icon:GiEntryDoor,title:'Logout'}]}
                        url="authentication"
                    />
                    <div className="navbar-item m-tb-1rem">
                        <div>
                            <AiOutlineLineChart className="navbar-item-icon"></AiOutlineLineChart>
                            <div className="navbar-item-title">
                                Charts
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
export default NavigationBar;