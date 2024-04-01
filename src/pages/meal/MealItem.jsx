import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../../api'
import Preloader from '../../components/preloader/Preloader';
import './style.css'

const MealItem = () => {
    const { id } = useParams()
    const [meal, setMeal] = useState({})
    const [loading, setLoading] = useState(true)

    const navigate = useNavigate()

    useEffect(() => {
        getMealById(id).then(data => {
            setMeal(data.meals[0])
            setLoading(false)
        })

    }, [id])

    return (
        <>
            {loading && <Preloader />}
            <div className="card mb-3 mt-4" style={{ maxWidth: '100%' }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={meal.strMealThumb} className="img-fluid rounded-start" alt={meal.strMeal} />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h3 className="card-title">{meal.strMeal}</h3>
                            <table className="table table-success table-striped">
                                <thead>
                                    <tr>
                                        <th>Ингредиенты</th>
                                        <th>Количество</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {Object.keys(meal).map((key) => {
                                        if (key.includes('strIngredient') && meal[key] !== '') {
                                            return (<tr key={key} >
                                                <td>{meal[key]}</td>
                                                <td>
                                                    {
                                                        meal[
                                                        `strMeasure${key.slice(13)}`
                                                        ]
                                                    }
                                                </td>
                                            </tr>)
                                        }
                                    })}
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-4">
                <div className="card-header">
                    Приготовление
                </div>
                <div className="card-body">
                    <p className="card-text">{meal.strInstructions} </p>

                    {meal.strYoutube ? (
                        <div className='meal-video'>
                            <h6 className='text-center mb-3' >Видео рецепт</h6>
                            <iframe title={id} src={`https://www.youtube.com/embed/${meal.strYoutube.slice(-11)}`} />
                        </div>
                    ) : null}

                    <button type="button" className="btn btn-primary btn-sm" onClick={() => navigate(-1)} >Назад</button>
                </div>
            </div>

        </>
    );
};

export default MealItem;