import React from 'react'
import { IconType } from 'react-icons'

interface SubItemContent{
    icon: IconType,
    title: String
}

const NavigationSubItem = (props:SubItemContent) => {
    const ItemIcon = props.icon;
    const title = props.title;
    return (
        <div className="navbar-subitem-item">
            <ItemIcon className="navbar-item-icon"></ItemIcon>
            <div className="navbar-subitem-title">
                {title}
            </div>
        </div>
    )
}

export default NavigationSubItem
