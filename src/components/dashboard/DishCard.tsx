import React from 'react'

interface DishCardProps{
    thumbnail: String;
    title: String;
    time: String;
}

const DishCard = (props: DishCardProps) => {

    const {time,thumbnail,title} = props;

    return (
        <div className="latest-section__dish-card__container">
            <img src="https://media.self.com/photos/5f189b76c58e27c99fbef9e3/1:1/w_768,c_limit/blackberry-vanilla-french-toast.jpg" alt="dish-thumbnail" className="latest-section__dish-card__thumbnail" />
            <div className="latest-section__dish-card__content">
                <div className="latest-section__dish-card__content__title">
                    {title}
                </div>
                <div className="latest-section__dish-content__time">
                    Updated about {time} ago
                </div>
            </div>
        </div>
    )
}

export default DishCard
