import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Shared/NewsCard/NewsCard';

const Home = () => {
    const allNews = useLoaderData()

    return (
        <main>
            <h2>Total News : {allNews.length}</h2>
            <div className="news_area">
                {
                    allNews.map(news => <NewsCard news={news} key={news._id} />)
                }
            </div>
        </main>
    );
};

export default Home;