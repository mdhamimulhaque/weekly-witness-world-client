import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h4>Categories:{categories.length}</h4>
            <nav className="categories d-none d-lg-block">
                {categories.map(category =>
                    <Link
                        to={`/category/${category.id}`}
                        key={category.id}>
                        <p>{category.name}</p>
                    </Link>
                )}
            </nav>
        </div>
    );
};

export default LeftSide;