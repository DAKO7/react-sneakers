import React from 'react';
import { Link } from 'react-router-dom';

import { useCart } from '../hooks/useCart';

function Header(props) {
  const { cartItems } = useCart();
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">REACT SNEAKERS</h3>
            <p className="opacity-5">Best sneakers store</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="img/cart.svg" alt="Cart" />
          <snap>${totalPrice} USD</snap>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={18} height={18} src="img/heart.svg" alt="Heart" />
          </Link>
        </li>
        <li>
          <Link to="/orders">
            <img width={18} height={18} src="img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
