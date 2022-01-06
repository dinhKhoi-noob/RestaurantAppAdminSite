import React from 'react';

interface NotificationCardPropsScript{
    username: String;
    avatar: String;
    content: String;
    time: String;
    isRead: Boolean;
}

const NotificationCard = (props: NotificationCardPropsScript) => {
    const {username,content,time,isRead} = props;
    return (
        <div className={isRead?"notification-card-container":"notification-card-container-unread"}>
            
            <img src="https://thumbs.dreamstime.com/b/female-user-avatar-profile-picture-icon-isolated-vector-illustration-flat-design-people-character-white-background-woman-146472409.jpg" alt="avatar" className="notification-card-avatar"/>
            <div className="notification-card-content-container">
                <div className="notification-card-content">
                    {content}
                </div>
                <div className="notification-card-time">
                    {time}
                </div>
                <div className="notification-card-user-name">
                    By: <strong>{username}</strong>
                </div>
            </div>
        </div>
    )
}

export default NotificationCard
