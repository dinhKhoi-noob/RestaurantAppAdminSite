import React from 'react'
import { icons, IconType } from 'react-icons';
import { BsArrowUpShort,BsArrowDownShort } from 'react-icons/bs';

interface DashboardCardInterface{
    icon: IconType;
    title: String;
    statistic: String;
    mainColor: String;
    additionalInfomation?: {
        content: String;
        isDeacreasing: Boolean;
    };
}

const DashboardCard = (props:DashboardCardInterface) => {
    const {title,statistic,mainColor,additionalInfomation} = props;
    const content = additionalInfomation?.content;
    const isDeacreasing = additionalInfomation?.isDeacreasing;
    const DisplayIcon = props.icon;
    return (
        <div className="dashboard-card-first-type-item">
            <div className="dashboard-card-first-type-header">
                <div className="dashboard-card-title">
                    {title}
                </div>
                <div className={"dashboard-card-icon-container dashboard-card-background-"+mainColor}>
                    <DisplayIcon className="dashboard-card-icon"></DisplayIcon>
                </div>
            </div>
            <div className="dashboard-card-statistic">
                {statistic}
            </div>
            {
                additionalInfomation ?
                <div className="dashboard-card-additional-container">
                    {!isDeacreasing?<BsArrowUpShort className="dashboard-card-icon-success"></BsArrowUpShort>:<BsArrowDownShort className="dashboard-card-icon-warning"></BsArrowDownShort>}
                    {content}
                </div>
                :
                <></>
            }
        </div>
    )
}

export default DashboardCard
