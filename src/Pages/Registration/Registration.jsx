import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../context/AuthProvider';

const Registration = () => {
    const { createUser } = useContext(AuthContext);

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log("create user successfully", user);
                form.reset();
            })
            .catch(err => {
                console.log(err)
            })

    }

    return (
        <Form onSubmit={handleCreateUser}>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control name='url' type="text" placeholder="Photo url" />
            </Form.Group>
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

export default Registration;