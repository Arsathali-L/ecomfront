import React, { useState } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">

        {/* LEFT - LOGO */}
        <div className="left">
          <Link className="logo" to="/">ARSH STORE</Link>
        </div>

        {/* RIGHT - Categories + Cart */}
        <div className="right">
          <Link className="link" to="/products?category=1">Men</Link>
          <Link className="link" to="/products?category=2">Women</Link>
          <Link className="link" to="/products?category=3">Kids</Link>
          <Link className="link" to="/products?category=4">Shoes</Link>
          <Link className="link" to="/products?category=5">Sale</Link>
          <Link className="link" to="/products?category=6">Accessories</Link>

          <div className="cartIcon" onClick={() => setOpen(!open)}>
            <ShoppingCartOutlinedIcon className="icon" />
            <span>{products.length}</span>
          </div>
        </div>

      </div>

      {open && <Cart />}
    </div>
  );
};

export default Navbar;
