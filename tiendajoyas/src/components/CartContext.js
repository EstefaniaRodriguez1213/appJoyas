import React , {createContext, useState} from 'react';

const CartContext = createContext();

const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const agregarProductoCarrito = (producto,cant) => {  
        if(isInCart(producto.id)){
            // setCart(cart.map(product=>{
            //     return producto.id === product.id ? {...product, cant: product.cant + 1, stock: product.stock - cant} : product
            // })); 
                const findCart = cart.find(product => product.id === producto.id)
                findCart.cant = findCart.cant + cant
                setCart([...cart])
        }else{
            setCart([...cart, {...producto, cant}]) 
        }
    }
    const isInCart = (id) => cart.find(product => product.id === id) ? true : false;
    
    const quitarProductoCarrito = (id) => {
        setCart(cart.filter(item => item.id !== id));
    }
    const limpiar = () =>{
        setCart([]);
    }
    const precioTotal = () => {
        return cart.reduce((previus, current) => (previus + (current.cant * current.precio)), 0)
    }
    const cantidadTotal = () => {
        return cart.reduce((previus, current) => (previus + (current.cant)), 0)
    }
    const cantidadArticulosCarrito = () => {
            return (cart.length)
    }
    return (
        <>
           <CartContext.Provider value={{cart, agregarProductoCarrito, quitarProductoCarrito, limpiar, precioTotal, cantidadArticulosCarrito,cantidadTotal}}>
                {props.children}
           </CartContext.Provider> 
        </>
    );
}

export {CartContext, CartProvider};
