import React, { useState } from 'react';
import { RiSearch2Line,RiNotification4Fill } from 'react-icons/ri';
import { AiFillMessage } from 'react-icons/ai';
import NotificationCard from './top_navigation_bar/NotificationCard';
import { animated, Transition } from 'react-spring';


const TopNavigationBar = () => {

    const [isToggleOnNotification,setIsToggleOnNotification] = useState(false);
    const [isToggleOnMessage,setIsToggleOnMessage] = useState(false);

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
                            const duration = isToggleOnMessage?500:0;
                            setIsToggleOnMessage(false);
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
                            const duration = isToggleOnNotification?500:0;
                            setIsToggleOnNotification(false);
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
                            <animated.div style={{opacity:opacity,display:display,height:height,transform:"translateX(-61%)"}} className="top-navbar-notification-container"
                                onBlur={()=>{
                                    console.log(1);
                                }}
                            >
                                <div className="top-navbar-section-title">
                                    Messages
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
                <div className="top-navbar-user-section">
                    <div className="top-navbar-user-avatar"></div>
                    <div className="top-navbar-user-username">
                        Dinh Khoi
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavigationBar
