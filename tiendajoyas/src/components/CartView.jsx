import React, {useContext} from 'react';
import { CartContext } from './CartContext';
import Table from 'react-bootstrap/Table';
import { CloseButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const CartView = () => {
    const { cart, quitarProductoCarrito, precioTotal, limpiar} = useContext(CartContext)
  
    return (
      <>
      {cart.length > 0 
        ? 
        (
      <div>
            <Table striped bordered hover>
      <thead>
        <tr>
          <th>Nombre Producto</th>
          <th>Cantidad</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
      {cart.map((item) => 
            <tr key={item.id}>                                                    
                <td>{item.nombreArticulo}</td>
                <td>{item.cant}</td>
                <td>{item.precio}</td>
                <td><CloseButton onClick={() => quitarProductoCarrito(item.id)} /></td>
            </tr>
                )} 
             <tr>
                {<td colSpan="6"> <p className= "d-flex justify-content-center">  TOTAL: $ { precioTotal()}</p></td>}
             </tr> 
           
              <Link to="/fincompra" className="btn btn-primary" type="button" onClick={()=>limpiar()}>Finalizar Compra</Link>
           
      </tbody>
    </Table> 
        </div>
        )
        :
        <h1> No hay productos agregados al carrito{' '}
          <Link to="/productos">Ver todos los articulos</Link>
          </h1>
      }
      </>
    );
}

export default CartView;
