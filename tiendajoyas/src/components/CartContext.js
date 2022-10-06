import React , {createContext, useState} from 'react';

    const CartContext = createContext();

    const CartProvider = (props) => {

    const [cart, setCart] = useState([]);

    const agregarProductoCarrito = (producto,cant) => {
        const item = isInCart(producto.id);
        if(item){
            const newCant = item.cant + cant;
            const newCart = cart.filter(
                    (elem) => elem.producto.id !== item.producto.id);
            setCart([...newCart, {producto : item.producto, cant : newCant}]);
        }else{
            setCart([...cart, {producto, cant,}])         
        }
    }
    const isInCart = (id) => cart.find((item) => item.producto.id === id);
    
    const quitarProductoCarrito = (id) => { setCart(cart.filter((item) => item.producto.id !== id)); }   

    const limpiar = () =>{ setCart([]);}

    const precioTotal = () => { return cart.reduce((previus, current) => (previus + (current.cant * current.producto.precio)), 0)}
    
    const cantidadTotal = () => { return cart.reduce((previus, current) => (previus + (current.cant)), 0)}
    
    const cantidadArticulosCarrito = () => { return (cart.length) }
    
    return (
        <>
           <CartContext.Provider value={{cart, agregarProductoCarrito, quitarProductoCarrito, limpiar, precioTotal, cantidadArticulosCarrito,cantidadTotal}}>
                {props.children}
           </CartContext.Provider> 
        </>
    );
}

export {CartContext, CartProvider};
