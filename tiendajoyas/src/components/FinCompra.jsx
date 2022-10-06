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
    const {nombre, email, telefono} = buyer;

    const onChange = (e) =>{
        setBuyer(({
            ...buyer,
            [e.target.name] : e.target.value

        }))
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        const items = cart.map(e => {return {nombreArticulo: e.producto.nombreArticulo , precio : e.producto.precio, cant: e.cant}}) ;
        const dia = new Date();
        const total= precioTotal();
        const data = {buyer, dia, items, total};
        console.log(data);
        generateOrder(data);
    }

    const generateOrder = async(data) => {
        try {
            const col = collection(db, "Orders")
            const order = await addDoc(col, data)
            setorderId(order.id)
            limpiar()
            updateStock()
        } catch (error) {
            console.log(error)
        }
    }
    
     const updateStock = () => {  
        cart.forEach(item => {
            const docRef = doc(db, 'productos', item.producto.id)
            const updateStock = (item.producto.stock + item.cant) - item.cant;
            updateDoc(docRef, {
                stock: updateStock
            })
        })
    }

    return (
        <>
       { 
        !orderId ?
            (
                <div className="text-center container">
                <h2>Porfavor, complete los siguientes datos</h2>
        <form onSubmit={onSubmit} >
        <div className="text-center container">
            <input
            type="text"
            placeholder='Nombre Completo'
            name="nombre"
            value={nombre}
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
