import React, {useContext, useState} from 'react';
import {db} from '../firebase/firebase.js';
import { collection, addDoc } from "firebase/firestore";
import { CartContext } from "./CartContext";

const FinCompra = () => {
    const [orderId, setorderId] = useState("");
    const {cart, precioTotal, limpiar} = useContext(CartContext);
    const [buyer, setBuyer] = useState({
        nombre: '',
        email: '',
        telefono: ''
    });
    const {nombreArticulo, email, telefono} = buyer;

    const onChange = (e) =>{
        setBuyer(({
            ...buyer,
            [e.target.name] : e.target.value

        }))
    }
    const onSubmit = (e) =>{
        console.log(cart);
        e.preventDefault();
        const items = cart.map(e => {return {nombreArticulo: e.producto.nombreArticulo , precio : e.producto.precio, cant: e.cant}}) ;
        const dia = new Date();
        const total= precioTotal();
        const data = {buyer, dia, items, total};
        console.log(data);
        generateOrder(data);
    }

    const generateOrder = async(data) => {
        const col = collection (db, "orders");
        const order = await addDoc(col, data);
        const StringOrder = order._key.path.segments[1];
        setorderId(StringOrder);
        console.log(orderId);
        limpiar();
    }
    return (
        <>
       { 
        !orderId ?
            (<div>
        <form>
            <input
            type="text"
            placeholder='Nombre'
            name="nombre"
            value={nombreArticulo}
            onChange={onChange}
            >

            </input>

            <input
            type="text"
            placeholder='email'
            name="email"
            value={email}
            onChange={onChange}
            >

            </input>

            <input
            type="text"
            placeholder='telefono'
            name="telefono"
            value={telefono}
            onChange={onChange}
            >

            </input>

            <input
            type="submit"
            value="Finalizar compra"
            className='btn btn-success'
            onClick={onSubmit}
            >

            </input>
        </form>
            </div>)
                :
        <h4>
        Su order fue generada. Guarde el numero de order brindado a continuacion, ya que se lo pedira el repartidor.
        <br></br>
        Nro de orden: {orderId}
        </h4>
       }
       </>
    );
    }
export default FinCompra;
