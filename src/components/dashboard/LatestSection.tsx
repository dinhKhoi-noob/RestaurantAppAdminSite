import React from 'react';
import { IoMdArrowDropright } from 'react-icons/io';
import DishCard from './DishCard';
import OrderCard, { StatusEnum } from './OrderCard';

const LatestSection = () => {
    return (
        <div className="latest-section__container">
            <div className="latest-section__subcontainer w-40-percent">
                <div className="latest-section__title p-3rem">
                    Latest Dishes
                </div>
                <div className="latest-section__dishes--wrapper">
                    <DishCard title={"Dish 01"} time="3 hours" thumbnail=""/>
                    <DishCard title={"Dish 01"} time="3 hours" thumbnail=""/>
                    <DishCard title={"Dish 01"} time="3 hours" thumbnail=""/>
                    <DishCard title={"Dish 01"} time="3 hours" thumbnail=""/>
                    <DishCard title={"Dish 01"} time="3 hours" thumbnail=""/>
                </div>
                <div className="latest-section__dishes__btn">
                    <span>View all</span>
                    <IoMdArrowDropright className="p-t-3px"/>
                </div>
            </div>
            <div className="latest-section__subcontainer w-60-percent">
                <div className="latest-section__title p-3rem">
                    Latest Orders
                </div>
                <div className="latest-section__order-card__container latest-section__order-card--bg">
                    <div className="latest-section__order-card__ref-side">
                        Reference
                    </div>
                    <div className="latest-section__order-card__name-side">
                        Customer
                    </div>
                    <div className="latest-section__order-card__date-side">
                        Date
                    </div>
                    <div className="latest-section__order-card__status-side">
                        Status
                    </div>
                </div>
                <div className="latest-section__orders-wrapper">
                    <OrderCard reference="ascsrwopfs" customer="Jayce" date="06/01/2022" status={StatusEnum.Progress}/>
                    <OrderCard reference="dsasdvsdfe" customer="Quinn" date="06/01/2022" status={StatusEnum.Delivered}/>
                    <OrderCard reference="ouascvdsdf" customer="Kim" date="05/01/2022" status={StatusEnum.Refunded}/>
                    <OrderCard reference="vmxcsscsdf" customer="Hayate" date="04/12/2022" status={StatusEnum.Delivered}/>
                    <OrderCard reference="isjndswwef" customer="Matsuhiko" date="02/01/2022" status={StatusEnum.Progress}/>
                    <OrderCard reference="ouascvdsdf" customer="Kim" date="05/01/2022" status={StatusEnum.Refunded}/>
                </div>
                <div className="latest-section__dishes__btn m-r-1rem">
                    <span>View all</span>
                    <IoMdArrowDropright className="p-t-3px"/>
                </div>
            </div>
        </div>
    )
}

export default LatestSection;