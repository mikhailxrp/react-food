import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

const CategotyItem = ({ idCategory, strCategory, strCategoryDescription, strCategoryThumb }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={strCategoryThumb} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{strCategory}</h5>
                <p className="card-text card-item-text">{strCategoryDescription.slice(0, 60)}...</p>
                <Link to={`/category/${strCategory}`} className="btn btn-primary">Смотреть категорию</Link>
            </div>
        </div >
    );
};

export default CategotyItem;