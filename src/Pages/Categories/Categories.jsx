import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Categories = () => {
    const news = useLoaderData();

    return (
        <div>
            <h3>This Categories items : {news.length}</h3>
        </div>
    );
};

export default Categories;