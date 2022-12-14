import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    // const navigateto = useNavigate();

    // const navigateRegister = event => {
    //     navigateto('/register');
    // }

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(email, password);
    };

    return (
        <div className='container d-flex justify-content-center'>
            <div className="row w-50">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} required type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} required type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    {/* <p>If you are new ? <span as={Link} className='text-info cursor-pointer' onClick={navigateRegister}>Please Reagister</span> </p> */}
                    <p>If you are new ? <Link to='/register' className='text-info cursor-pointer'>Please Reagister</Link> </p>
                </Form>
            </div>
        </div>
    );
};

export default Login;