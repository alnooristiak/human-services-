import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Cart = ({ carts }) => {

    const { id, name, img, description, price } = carts;
    const navigate = useNavigate();
    const onGetUserData = id => {
        // console.log({id});
        navigate(`survices/${id}`);
    }

    return (
        <>
            <div className='col-lg-3 col-md-6 col-12 col mx-1 my-4 border border-info border-2 p-3 rounded'>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Text>
                        <div>
                            <strong>Prince: </strong> {price}
                        </div>
                        <strong>Title: </strong> {description}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago <h5><mark>{id}</mark></h5></small>
                </Card.Footer>
                <Button variant="info" onClick={() => onGetUserData(id)}>Click Me</Button>
            </div>
        </>
    );
};

export default Cart;