import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import EmptyCartWidget from '../EmptyCartWidget/EmptyCartWidget';
import FullCartWidget from '../FullCartWidget/FullCartWidget';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <div className="container col-8 col-md-3">
          <div className="pt-3">
            <EmptyCartWidget />
            <div className="pt-1">
              <h4>Carrito vacío</h4>
            </div>
          </div>
          <div className="container">
            <Link to="/ " className="Option text-decoration-none text-white">
              <div className="pt-1 d-grid gap-2">
                <Button variant="warning">Productos</Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="pt-3">
        <FullCartWidget />
        <h3>Carrito</h3>
      </div>
      <div className="container">
        <Table striped bordered hover size="sm">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Cantidad</th>
              <th scope="col">Artículo</th>
              <th scope="col">Precio</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </tbody>
        </Table>
        <div className="container col-8 col-md-3">
          <div className="pt-2">
            <h3>Total: ${total}</h3>
          </div>
          <div>
            <div className="pt-3 d-grid gap-2">
              <Button variant="danger" onClick={() => clearCart()} className="Button">
                Limpiar carrito
              </Button>
            </div>
            <Link to="/" className="Option text-decoration-none text-white">
              <div className="pt-3 d-grid gap-2">
                <Button variant="warning">Mas productos</Button>
              </div>
            </Link>
            <Link to="/checkout" className="Option text-decoration-none text-white">
              <div className="pt-3 d-grid gap-2 pb-3">
                <Button variant="dark">Comprar</Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
