import React from 'react'

interface LatestMessageProps{
    username: String;
    content: String;
}

interface MessageCardProps{
    latestMessage: LatestMessageProps;
    avatar: String;
    time: String;
    isOnline: Boolean;
    isRead: Boolean;
}

const MessageCard = (props: MessageCardProps) => {
    const {latestMessage,time,avatar,isRead,isOnline} = props;
    const {username,content} = latestMessage;
    let message = username.concat(": "+content.toString());
    if(message.length > 40){
        message = message.slice(0,40);
        message += "..."
    }
    return (
        <div className={isRead?"message-card__container m-tb-1rem":"message-card__container--bg m-tb-1rem"}>
            <div className="message-card__avatar-section">
                <img src="https://thumbs.dreamstime.com/b/female-user-avatar-profile-picture-icon-isolated-vector-illustration-flat-design-people-character-white-background-woman-146472409.jpg" alt="avatar" className="notification-card-avatar"/>
                {isOnline?<div className="message-card__user-online"></div>:<></>}
            </div>
            <div className="message-card__content-section">
                <div className="message-card__latest-message">
                    {message}
                </div>
                <div className="message-card__time">
                    {time}
                </div>
            </div>
        </div>
    )
}

export default MessageCard
