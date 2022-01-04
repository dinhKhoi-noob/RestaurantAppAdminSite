import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface NavigationItemInterface{
    icon: IconType;
    title: String;
    url: String;
    isSubItem: Boolean
}

const NavigationItem = (props:NavigationItemInterface) => {
    const {icon,title,url,isSubItem} = props;
    const DisplayIcon = icon;
    return (
        <Link href={"/"+url}>
            <div className={isSubItem?"navbar-subitem-item":"navbar-item m-tb-1rem"}>
                <DisplayIcon className="navbar-item-icon"></DisplayIcon>
                <div className={isSubItem?"navbar-subitem-title":"navbar-item-title"}>
                    {title}
                </div>
            </div>
        </Link>
    )
}

export default NavigationItem
