import React from 'react';
import Meal from './Meal';

const MealList = ({ meals }) => {
    return (
        <div className="category-wrapper mt-3">
            {meals.map(item => {
                return <Meal key={item.idMeal} {...item} />
            })}
        </div>
    );
};

export default MealList;