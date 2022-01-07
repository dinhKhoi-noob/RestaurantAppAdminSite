import React, { useState,useEffect } from 'react';
import { FaRegUserCircle } from 'react-icons/fa';
import { GiEntryDoor } from 'react-icons/gi'
import { RiSearch2Line,RiNotification4Fill } from 'react-icons/ri';
import { AiFillMessage } from 'react-icons/ai';
import { animated, Transition } from 'react-spring';
import NotificationCard from './top_navigation_bar/NotificationCard';
import MessageCard from './top_navigation_bar/MessageCard';


const TopNavigationBar = () => {

    const [isToggleOnNotification,setIsToggleOnNotification] = useState(false);
    const [isToggleOnMessage,setIsToggleOnMessage] = useState(false);
    const [isToggleOnUser,setIsToggleOnUser] = useState(false);
    return (
        <div className="top-navbar-container">
            <form className="top-navbar-search-area">
                <input type="text" className="top-navbar-search-input" placeholder="Type to search..."/>
                <button type="submit" className="top-navbar-search-btn"><RiSearch2Line></RiSearch2Line></button>
            </form>
            <div className="top-navbar-right-section">
                <div className="wrapper pos-relative">
                    <div className="top-navbar-notification-section"
                        onClick={()=>{
                            const duration = (isToggleOnMessage || isToggleOnUser) ? 500:0;
                            setIsToggleOnMessage(false);
                            setIsToggleOnUser(false);
                            setTimeout(()=>{
                                setIsToggleOnNotification(!isToggleOnNotification);
                            },duration);
                        }}
                    >
                        <RiNotification4Fill className="top-navbar-notification-btn"/>
                        <div className="top-navbar-notification-announcement"></div>
                    </div>
                    <Transition
                        native
                        items={isToggleOnNotification}
                        from={{display:'none',opacity:0,height:0}}
                        enter={{display:'unset',opacity:1,height:450}}
                        leave={{display:'unset',opacity:0,height:0}}
                    >
                    {
                        ({display,opacity,height},item)=>(
                            item?
                            <animated.div style={{opacity:opacity,display:display,height:height}} className="top-navbar-notification-container">
                                
                                <div className="top-navbar-section-title">
                                    Notifications
                                </div>
                                <div className="top-navbar-notification-tag-container">
                                    <div className="top-navbar-notification-tag-item">
                                        All
                                    </div>
                                    <div className="top-navbar-notification-tag-item">
                                        Unread
                                    </div>
                                </div>
                                <div className="top-navbar-section-subtitle">
                                    Earlier
                                </div>
                                <div>
                                    <NotificationCard content="Order dfasczxsdf has been delivered" time="2days ago" username="Jane" avatar="" isRead={true}/>
                                    <NotificationCard content="New account has been created" time="5hrs ago" username="Lucy" avatar="" isRead={false}/>
                                    <NotificationCard content="New recepies has been created and post" time="12hrs ago" username="Ashe" avatar="" isRead={false}/>
                                    <NotificationCard content="Order sasrtwasgh has been refunded" time="Just now" username="Kate" avatar="" isRead={false}/>
                                    <NotificationCard content="80kgs potatoes and 20kgs beef has been received" time="19mins ago" username="Kim" avatar="" isRead={true}/>
                                </div>
                                
                            </animated.div>
                            :
                            <></>
                        )   
                    }
                    </Transition>
                </div>
                <div className="wrapper pos-relative">
                    <div className="top-navbar-notification-section"
                        onClick={()=>{
                            const duration = (isToggleOnNotification || isToggleOnUser)?500:0;
                            setIsToggleOnNotification(false);
                            setIsToggleOnUser(false);
                            setTimeout(()=>{
                                setIsToggleOnMessage(!isToggleOnMessage);
                            },duration);
                        }}
                    >
                        <AiFillMessage className="top-navbar-notification-btn"/>
                        <div className="top-navbar-notification-announcement"></div>
                    </div>
                    <Transition
                        native
                        items={isToggleOnMessage}
                        from={{display:'none',opacity:0,height:0}}
                        enter={{display:'unset',opacity:1,height:450}}
                        leave={{display:'unset',opacity:0,height:0}}
                    >
                    {
                        ({display,opacity,height},item)=>(
                            item?
                            <animated.div style={{opacity:opacity,display:display,height:height,transform:"translateX(-61%)"}} className="top-navbar-notification-container" id="top-navbar-message-container">
                                <div className="top-navbar-section-title">
                                    Messages
                                </div>
                                <form className="top-navbar-search-area m-all-1rem">
                                    <input type="text" className="top-navbar-search-input" placeholder="Type name to search..."/>
                                    <button type="submit" className="top-navbar-search-btn"><RiSearch2Line></RiSearch2Line></button>
                                </form>
                                <div className="top-navbar-section-subtitle">
                                    Earlier
                                </div>
                                <div>
                                    <MessageCard latestMessage={{username:"Jane",content:"Hello"}} avatar="" time="12hrs" isRead={true} isOnline={false}/>
                                    <MessageCard latestMessage={{username:"Kate",content:"Lorem ipsum dos noqs mets iesast bry"}} avatar="" time="18hrs" isRead={true} isOnline={true}/>
                                    <MessageCard latestMessage={{username:"Khoi",content:"What I want just is working"}} avatar="" time="2mins" isRead={false} isOnline={true}/>
                                    <MessageCard latestMessage={{username:"Khoi Phan",content:"From Axon with all of my disapointed"}} avatar="" time="1min" isRead={false} isOnline={true}/>
                                    <MessageCard latestMessage={{username:"Harry",content:"G9 all"}} avatar="" time="9hrs" isRead={true} isOnline={false}/>
                                    <MessageCard latestMessage={{username:"Dinh Khoi",content:"Lose one, win others"}} avatar="" time="Just now" isRead={false} isOnline={true}/>
                                </div>
                                
                            </animated.div>
                            :
                            <></>
                        )   
                    }
                    </Transition>
                </div>
                <div className="top-navbar-user-section"
                    onClick={()=>{
                        const duration = (isToggleOnMessage || isToggleOnNotification) ? 500:0;
                        setIsToggleOnMessage(false);
                        setIsToggleOnNotification(false);
                        setTimeout(()=>{
                            setIsToggleOnUser(!isToggleOnUser);
                        },duration);
                    }}
                >
                        <div className="top-navbar-user-avatar"></div>
                        <div className="top-navbar-user-username">
                            Dinh Khoi
                        </div>
                    <Transition
                        native
                        items={isToggleOnUser}
                        from={{display:'none',opacity:0,height:0}}
                        enter={{display:'unset',opacity:1,height:95}}
                        leave={{display:'unset',opacity:0,height:0}}
                    >
                    {
                        ({display,opacity,height},item)=>(
                            item?
                            <animated.div style={{opacity:opacity,display:display,height:height}} className="top-navbar-user-dropdown-container">
                                <div className="top-navbar-user-dropdown-tag">
                                    <FaRegUserCircle/>
                                    <div>Profile</div>
                                </div>
                                <div className="top-navbar-user-dropdown-tag">
                                    <GiEntryDoor/>
                                    <div>Logout</div>
                                </div>
                            </animated.div>
                            :
                            <></>
                        )   
                    }
                    </Transition>
                </div>
            </div>
        </div>
    )
}

export default TopNavigationBar
