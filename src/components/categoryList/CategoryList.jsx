import React from 'react';
import CategoryItem from '../categoryItem/CategoryItem';
import './style.css'

const CategoryList = ({ catalog = [] }) => {
    return (
        <div className="item-wrapper">
            {catalog.map(item => {
                return <CategoryItem key={item.idCategory} {...item} />
            })}
        </div>
    );
};

export default CategoryList;