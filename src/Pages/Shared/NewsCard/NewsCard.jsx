import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./NewsCard.css";
import { FiEye, FiStar, FiShare2, FiBookmark } from "react-icons/fi";

const NewsCard = ({ news }) => {
    const { image_url, details, title, author, total_view, rating, _id } = news;
    const { img, name, published_date } = author;
    const { number } = rating;

    return (
        <Card className='mb-4'>
            <Card.Header className='d-flex justify-content-between'>
                <div className="author_box d-flex gap-2 align-items-center">
                    <img className='author_img' src={img} alt="img" />
                    <div className="auth_info">
                        <h6 className='m-0 p-0'>{name ? name : "No Name"}</h6>
                        <p className='m-0'>{published_date}</p>
                    </div>
                </div>

                <div className="share_pin_icon">
                    <FiBookmark className='me-2' />
                    <FiShare2 />
                </div>

            </Card.Header>
            <Card.Img className='p-3' variant="top" src={image_url} />
            <Card.Body>
                <Card.Text>
                    <h2>{title}</h2>
                    {
                        details.length > 200 ?
                            <p>{details.slice(0, 250)} <Link to={`/news/${_id}`}> Read more...</Link></p>
                            : <p>{details}</p>
                    }
                </Card.Text>
            </Card.Body>
            <Card.Footer className='d-flex justify-content-between align-items-center'>
                <small className="text-muted d-flex align-items-center justify-content-between gap-2"><FiEye /> {total_view}</small>
                <div className="rating d-flex align-items-center justify-content-between">
                    <small className="text-muted d-flex align-items-center justify-content-between gap-2"><FiStar className='text-warning' /> {number}</small> <br />
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCard;