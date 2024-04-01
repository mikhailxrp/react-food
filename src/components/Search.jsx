import React, { useState } from 'react';

const Search = ({ cb = Function.prototype }) => {
    const [value, setValue] = useState('')

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit()
        }
    }

    const handleSubmit = () => {
        cb(value)
    }

    return (
        <div className="d-flex mt-3">
            <input
                className="form-control me-2"
                type="search" placeholder="Search"
                aria-label="Search"
                onKeyDown={handleKey}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
            <button
                className="btn btn-outline-primary" t
                ype="submit"
                onClick={handleSubmit} >Поиск</button>
        </div>
    );
};

export default Search;