import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const LogIn = () => {
    const { loginUser } = useContext(AuthContext);

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
                navigate("/")

            })
            .catch(err => {
                console.error(err)
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
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    );
};

export default LogIn;