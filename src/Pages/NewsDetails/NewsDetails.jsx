import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const NewsDetails = () => {
    const newsDetails = useLoaderData();

    const { image_url, details, title, category_id } = newsDetails;
    return (
        <Card>
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {details}
                </Card.Text>
                <Link to={`/category/${category_id}`}>
                    <Button variant="primary">All News In This Category</Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default NewsDetails;