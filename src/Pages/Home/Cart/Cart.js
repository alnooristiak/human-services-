import React from 'react';
import { Button, Card, CardGroup, Col, Row } from 'react-bootstrap';

const Cart = ({carts}) => {
    const {id, name, img, description, price} = carts;
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
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
                <button>click me</button>
            </div>
        </>
    );
};

export default Cart;