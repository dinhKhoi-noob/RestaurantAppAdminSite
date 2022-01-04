import React, { useState } from 'react';
import NavigationItem from './NavigationItem';
import {Transition, animated} from 'react-spring';
import { IoIosArrowForward,IoIosArrowDown } from 'react-icons/io';
import { IconType } from 'react-icons/lib';

interface SubItemContent{
    parentIcon: IconType;
    parentTitle: String;
    subItems: {icon:IconType,title:String}[];
    url: String
}

const NavigationSubItemContainer = (props: SubItemContent) => {
    const [isToggle,setIsToggle] = useState(false);
    const ParentTag = props.parentIcon;
    const {parentTitle,subItems,url} = props;
    const onToggleItem = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div className={isToggle?"navbar-expand-section m-tb-1rem min-h-6rem":"navbar-expand-section m-tb-1rem"}>
            <div className="navbar-item justify-space-between" onClick={onToggleItem}>
                <div>
                    <ParentTag className="navbar-item-icon"></ParentTag>
                    <div className="navbar-item-title">
                        {parentTitle}
                    </div>
                </div>
                {isToggle?<IoIosArrowDown className="navbar-item-icon-dropdown"></IoIosArrowDown>:<IoIosArrowForward className="navbar-item-icon-dropdown"></IoIosArrowForward>}
            </div>
            <Transition
                native
                config={{duration:100}}
                items={isToggle}
                from={{opacity:0,display:'none'}}
                enter={{opacity:1,display:'unset'}}
                leave={{opacity:0,display:'none'}}
            >
                {
                    ({opacity},item) => (
                        item?
                        <animated.div style={{opacity:opacity.to({range:[0.0,1.0],output:[0,1]})}}>
                            <div className="navbar-subitem-container">
                                {
                                    subItems.map((item)=>{
                                        let {icon,title} = item;
                                        return(
                                            <NavigationItem icon={icon} title={title} url={url+"/"+title.toLowerCase()} isSubItem={true}/>
                                        );
                                    })
                                }
                            </div>
                        </animated.div>
                        :
                        <></>
                    )
                }
            </Transition>
        </div>
    )
}

export default NavigationSubItemContainer;
