import React, { useState } from 'react';
import NavigationSubItem from './NavigationSubItem';
import {Transition, animated} from 'react-spring';
import { IoIosArrowForward,IoIosArrowDown } from 'react-icons/io';
import { IconType } from 'react-icons/lib';

interface SubItemContent{
    parentIcon: IconType;
    parentTitle: string;
    subItems: {icon:IconType,title:string}[];
}

const NavigationSubItemContainer = (props: SubItemContent) => {
    const [isToggle,setIsToggle] = useState(false);
    const ParentTag = props.parentIcon;
    const {parentTitle,subItems} = props;
    const onToggleItem = () => {
        setIsToggle(!isToggle);
    }

    return (
        <div className={isToggle?"navbar-expand-section m-tb-2rem min-h-5rem":"navbar-expand-section m-tb-2rem"} onClick={onToggleItem}>
            <div className="navbar-item justify-space-between">
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
                items={isToggle}
                from={{opacity:0,height:'0%',display:'none'}}
                enter={{opacity:1,display:'unset'}}
                leave={{opacity:0,display:'none'}}
            >
                {
                    ({opacity},item) => (
                        item?
                        <animated.div style={{position:'absolute',opacity:opacity.to({range:[0.0,1.0],output:[0,1]})}}>
                            <div className="navbar-subitem-container">
                                {
                                    subItems.map((item)=>{
                                        let {icon,title} = item;
                                        return(
                                            <NavigationSubItem icon={icon} title={title}/>
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
