import React, { useState, useEffect } from 'react';
import Preloader from '../components/preloader/Preloader'
import { getAllCategories } from '../api'
import { useLocation, useNavigate } from 'react-router-dom'
import CategoryList from '../components/categoryList/CategoryList';
import Search from '../components/Search'

const Home = () => {
    const [catalog, setCatalog] = useState([])
    const [filteredCatalog, setFilteredCatalog] = useState([])

    const { pathname, search } = useLocation()
    const navigate = useNavigate()


    const handleSearch = (str) => {
        setFilteredCatalog(
            catalog.filter(item => item.strCategory.toLowerCase().includes(str.toLowerCase()))
        )
        navigate({
            pathname,
            search: `?search=${str}`
        })
    }

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories)
            setFilteredCatalog(search ?
                data.categories.filter(item => item.strCategory
                    .toLowerCase()
                    .includes(search.split('=')[1].toLowerCase())) : data.categories
            )
        })
    }, [search])
    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? <Preloader /> : <CategoryList catalog={filteredCatalog} />}
        </>
    );
};

export default Home;