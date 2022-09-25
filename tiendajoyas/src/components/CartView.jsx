import React, {useContext} from 'react';
import { CartContext } from './CartContext';
import Table from 'react-bootstrap/Table';
import { Button, CloseButton } from 'react-bootstrap';
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
            <tr key={item.producto.id}>                                                    
                <td>{item.producto.nombreArticulo}</td>
                <td>{item.cant}</td>
                <td>{item.producto.precio}</td>
                <td><CloseButton onClick={() => quitarProductoCarrito(item.producto.id)} /></td>
            </tr>
                )} 
             <tr>
                {<td colSpan="6"> <p className= "d-flex justify-content-center"> PRECIO TOTAL: $ { precioTotal()}</p></td>}
             </tr> 
              <Link to="/productos" className="btn btn-success" type="button">Seguir comprando</Link>
              <Link to="/fincompra" className="btn btn-primary" type="button">Finalizar Compra</Link>
              <Button className="btn btn-warning" onClick={()=>limpiar()}>
                Vaciar carrito
              </Button>
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
