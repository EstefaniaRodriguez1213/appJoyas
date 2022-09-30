import React, {useContext, useState} from 'react';
import {db} from '../firebase/firebase.js';
import { collection, addDoc , doc, updateDoc} from "firebase/firestore";
import { CartContext } from "./CartContext";
import Alert from 'react-bootstrap/Alert';
import '../App.css';

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
        updateStock();
        limpiar();
    }
    
     const updateStock = () => {  
        cart.map((item) => {
            const docs = doc(db, 'productos', item.producto.id)  
            const updStock = item.producto.stock - item.cant;
            updateDoc(docs, {
                stock: updStock
                }
        )})
    }

    return (
        <>
       { 
        !orderId ?
            (
                <div className="text-center container">
                <h2>Porfavor, complete los siguientes datos</h2>
        <form>
        <div className="text-center container">
            <input
            type="text"
            placeholder='Nombre Completo'
            name="nombre"
            value={nombreArticulo}
            onChange={onChange}
            >

            </input>
            </div>
            <div className="text-center container">
            <input
            type="email"
            placeholder='Email'
            name="email"
            value={email}
            onChange={onChange}
            >
            </input>
            </div>
            <div className="text-center container">
            <input
            type="text"
            placeholder='Telefono'
            name="telefono"
            value={telefono}
            onChange={onChange}
            >

            </input>
            </div>
            <div className="text-center container">
            <input
            type="submit"
            value="Finalizar compra"
            className='btn btn-success'
            onClick={onSubmit}
            >

            </input>
            </div>
        </form>
            </div>)
                :
                <div className="text-center">
        <Alert variant="primary"> Su order fue generada. Guarde el numero de a continuacion, ya que se lo pedira el repartidor.</Alert>   
        <Alert variant="primary">Nro de orden: {orderId}</Alert> 
        </div>
       }
       </>
    );
    }
export default FinCompra;
