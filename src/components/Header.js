import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={30} height={30} src="/img/logo.png" alt="" />
          <div>
            <h3 className="text-uppercase">SC.</h3>
          </div>
        </div>
      </Link>

      <ul className="nav d-flex"></ul>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={20} height={20} src="/img/cart.svg" alt="Cart" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-20 cu-p">
          <Link to="/favorites">
            <img width={20} height={20} src="/img/heart.svg" alt="Favorites" />
          </Link>
        </li>

        <li>
          <Link to="/orders">
            <img width={20} height={20} src="/img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
