import React , {createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const agregarProductoCarrito = (producto,cant) => {  
        if (cart.find(item => item.id === producto.id)){
            let newCant = cant + 1;
            cant = newCant;
        }   
        else{
            setCart(cart.push(producto,cant));
        }
    }
    const quitarProductoCarrito = (producto) => {
        setCart(cart.slice(cart.findIndex(item => item.id === producto.id), 1));
    }
    const limpiar = () =>{
        setCart([]);
    }
    return (
        <>
           <CartContext.Provider value={{cart, agregarProductoCarrito, quitarProductoCarrito, limpiar}}>
                {props.children}
           </CartContext.Provider> 
        </>
    );
}

export {CartContext, CartProvider};
