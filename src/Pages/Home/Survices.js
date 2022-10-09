import React, { useEffect, useState } from 'react';
import { CardGroup } from 'react-bootstrap';
import Cart from './Cart/Cart';

const Survices = () => {
    const [cardData, setCardData] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then(res => res.json())
            .then(data => setCardData(data))
    },[])

    return (
        <div className='container'>
            <CardGroup className=' d-flex justify-content-center'>
                {
                    cardData.map(carts => <Cart
                        key={carts.id}
                        carts={carts}
                    ></Cart>)
                }
            </CardGroup>
        </div>
    );
};

export default Survices;