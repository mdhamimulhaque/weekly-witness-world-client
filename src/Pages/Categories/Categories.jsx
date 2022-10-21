import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Categories = () => {
    const categoryNews = useLoaderData();

    return (
        <div>
            <h3>This Categories items : {categoryNews.length}</h3>
            {
                categoryNews.map(news => <NewsCard key={news._id} news={news} />)
            }
        </div>
    );
};

export default Categories;