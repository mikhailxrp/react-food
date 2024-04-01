import React from 'react';
import { Link } from 'react-router-dom';

const Meal = ({ idMeal, strMeal, strMealThumb }) => {

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={strMealThumb} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{strMeal}</h5>
                <p className="card-text"></p>
            </div>
            <Link to={`/meal/${idMeal}`} className="btn btn-primary">Смотреть рецепт</Link>
        </div>
    );
};

export default Meal;