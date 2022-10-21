import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Registration = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext);

    const [errorMsg, setErrorMsg] = useState('');
    const [termsChecked, setTermsChecked] = useState(false)

    const handleCreateUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;

        // ---> create user
        createUser(email, password)
            .then(res => {
                const user = res.user;
                console.log("create user successfully", user);
                form.reset();
                handleUpdateUserProfile(name, url);
            })
            .catch(err => {
                setErrorMsg(err.message)
            })

    }

    // ---> handle update user profile
    const handleUpdateUserProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }
        updateUserProfile(profile)
            .then(() => {
                console.log('profile updated')
            }).catch((error) => {
                setErrorMsg(error.message)
            });

    }

    // ---> handle terms and condition check
    const handleTermsChecked = (e) => {
        const checkValue = e.target.checked;
        setTermsChecked(checkValue)
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check
                    onClick={handleTermsChecked}
                    type="checkbox"
                    label={<>Accept <Link to="/terms"> terms and conditions</Link></>}

                />
            </Form.Group>
            <p className='my-2 text-danger'><small>{errorMsg}</small></p>
            <Button variant="primary" type="submit" disabled={!termsChecked}>
                Submit
            </Button>
        </Form>
    );
};

export default Registration;