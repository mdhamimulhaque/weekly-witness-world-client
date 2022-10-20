import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const NewsCard = ({ news }) => {
    const { image_url, details, title } = news;
    console.log(news)
    return (
        <Card className='mb-4'>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Text>
                    <h2>{title}</h2>
                    <p>{details.slice(0, 300)}<Link> Read more...</Link></p>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default NewsCard;