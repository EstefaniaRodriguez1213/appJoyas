import React , {createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const agregarProductoCarrito = (producto,cant) => {     
        setCart(cart.push(producto,cant));
    }
    const quitarProductoCarrito = (producto) => {
        setCart(cart.slice(cart.findIndex(item => item.id === producto.id), 1));
    }
    return (
        <>
           <CartContext.Provider value={{cart, agregarProductoCarrito, quitarProductoCarrito}}>
                {props.children}
           </CartContext.Provider> 
        </>
    );
}

export {CartContext, CartProvider};
