import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api'
import Preloader from '../components/preloader/Preloader';
import MealList from '../components/MealList';

const Category = () => {
    const { name } = useParams()
    const [meals, setMeals] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        getFilteredCategory(name).then(data => {
            setMeals(data.meals)
        })
    }, [name])
    return (
        <>
            <button
                type="button"
                className="btn btn-primary btn-sm btn-back"
                onClick={() => navigate(-1)} >
                Назад
            </button>

            <h2 className="title-category mt-3 text-center">{name}</h2>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
};

export default Category;