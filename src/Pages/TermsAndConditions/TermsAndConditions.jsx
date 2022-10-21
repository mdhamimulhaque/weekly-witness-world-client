import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>Terms and conditions</h2>
            <Link to="/registration"> <Button variant="primary">Back To Registration Page</Button></Link>
        </div>
    );
};

export default TermsAndConditions;