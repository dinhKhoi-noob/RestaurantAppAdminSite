import React from 'react'

export const enum StatusEnum{
    Progress = "Progress",
    Delivered = "Delivered",
    Refunded = "Refunded"
}

interface OrderCardProps{
    reference: String;
    customer: String;
    date: String;
    status: StatusEnum;
}

const OrderCard = (props: OrderCardProps) => {
    const {customer,reference,date,status} = props;
    return (
        <div className="latest-section__order-card__container">
            <div className="latest-section__order-card__ref-side">
                {reference.toUpperCase()}
            </div>
            <div className="latest-section__order-card__name-side">
                {customer}
            </div>
            <div className="latest-section__order-card__date-side">
                {date}
            </div>
            <div className={"latest-section__order-card__status-side bg-"+status.toLowerCase()}>
                {status}
            </div>
        </div>
    )
}

export default OrderCard
