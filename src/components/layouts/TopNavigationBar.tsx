import React from 'react';
import { RiSearch2Line,RiNotification4Fill } from 'react-icons/ri';
import { AiFillMessage } from 'react-icons/ai';
import NotificationCard from './top_navigation_bar/NotificationCard';
const TopNavigationBar = () => {
    return (
        <div className="top-navbar-container">
            <form className="top-navbar-search-area">
                <input type="text" className="top-navbar-search-input" placeholder="Type to search..."/>
                <button type="submit" className="top-navbar-search-btn"><RiSearch2Line></RiSearch2Line></button>
            </form>
            <div className="top-navbar-right-section">
                <div className="wrapper pos-relative">
                    <div className="top-navbar-notification-section">
                        <RiNotification4Fill className="top-navbar-notification-btn"/>
                        <div className="top-navbar-notification-announcement"></div>
                    </div>
                    <div className="top-navbar-notification-container">
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
                            <NotificationCard content="Order dfasczxsdf has been delivered" time="2days ago" username="Jane" avatar=""/>
                            <NotificationCard content="New account has been created" time="5hrs ago" username="Lucy" avatar=""/>
                            <NotificationCard content="New recepies has been created and post" time="12hrs ago" username="Ashe" avatar=""/>
                            <NotificationCard content="Order sasrtwasgh has been refunded" time="Just now" username="Kate" avatar=""/>
                            <NotificationCard content="80kgs potatoes and 20kgs beef has been received" time="19mins ago" username="Kim" avatar=""/>
                        </div>
                    </div>
                </div>
                <div className="top-navbar-notification-section">
                    <AiFillMessage className="top-navbar-notification-btn"/>
                    <div className="top-navbar-notification-announcement"></div>
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
