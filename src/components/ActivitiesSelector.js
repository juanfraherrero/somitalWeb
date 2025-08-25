'use client'

import CardForSelection from './CardForSelection';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ActivitiesSelector = ({ activities }) => {
    return (
        <div className={` w-fit flex flex-col flex-nowrap lg:flex-wrap items-start content-start justify-start justify-items-start h-fit md-h-[85vh] `}>
            {activities.map((item, index) => (
                <CardForSelection key={index} data={item} />
            ))}
        </div>

    );
}

export default ActivitiesSelector;
