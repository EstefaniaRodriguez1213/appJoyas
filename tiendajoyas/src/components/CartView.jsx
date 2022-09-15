import React, {useContext} from 'react';
import { CartContext } from './CartContext';
import Table from 'react-bootstrap/Table';
import { CloseButton } from 'react-bootstrap';

const CartView = () => {
    const { cart, quitarProductoCarrito} = useContext(CartContext)
    console.log(cart)
    return (
        <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Nombre Producto</th>
          <th>Cantidad</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
      {cart.map((item) => 
            <tr key={item.item.id}>                                                    
                <td>{item.nombreArticulo}</td>
                <td>{item.cant}</td>
                <td>{item.precio}</td>
                <td><CloseButton onClick={() => quitarProductoCarrito(item.id)} /></td>
            </tr>
                )} 
             <tr>
                {/* <td colSpan="6"> <p className= "d-flex justify-content-center">  TOTAL: $ {precioTotal()}</p></td> */}
             </tr> 
      </tbody>
    </Table>
  
        </div>
    );
}

export default CartView;
