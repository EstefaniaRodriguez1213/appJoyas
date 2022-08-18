import React from 'react';
import { BsCart2 } from "react-icons/bs";
import Button from 'react-bootstrap/Button';

const CartWidget = () => {
    return (
        <div>
            <Button variant="dark">
                <BsCart2 />
            </Button>
        </div>
    );
}

export default CartWidget;
