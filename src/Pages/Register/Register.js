import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Register = () => {

    const useNameRef = useRef('');
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const onRegisterHandle = event => {
        event.preventDefault();

        const name = useNameRef.current.value;
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        console.log(name, email, password);
    };

    return (
        <div className='container d-flex justify-content-center'>
            <div className="row">
                <Form onSubmit={onRegisterHandle}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <input type="text" required ref={useNameRef} class="form-control" id="exampleFormControlInput1" placeholder="your name" />
                        <Form.Label>Email address</Form.Label>
                        <Form.Control required ref={emailRef} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required ref={passwordRef} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                    <p><strong>If you are alredy registered then<Link to="/login" className='text-info cursor-pointer'>Login</Link></strong></p>
                </Form>
            </div>
        </div>
    );
};

export default Register;