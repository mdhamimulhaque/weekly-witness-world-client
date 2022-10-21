import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const LogIn = () => {
    const { loginUser } = useContext(AuthContext);

    const [errorMsg, setErrorMsg] = useState('');

    const navigate = useNavigate()

    const handleLogInUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginUser(email, password)
            .then(res => {
                const user = res.user;
                console.log("Login success", user);
                form.reset();
                navigate("/");

            })
            .catch(err => {
                setErrorMsg(err.message)
            })
    }

    return (
        <Form onSubmit={handleLogInUser}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control name="email" type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control name="password" type="password" placeholder="****" />
            </Form.Group>
            <p className='my-2 text-danger'><small>{errorMsg}</small></p>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default LogIn;