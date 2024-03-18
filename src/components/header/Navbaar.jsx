import React from "react";
import "./navbaar.css";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Avatar from "@mui/material/Avatar";
import { NavLink } from "react-router-dom";

const Navbaar = () => {
  return (
    <header>
      <nav>
        <div className="left">
          <div className="navlogo">
           <NavLink to="/"><img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5qXE92qLgJPq0CPm4j0xhiFrZxOYhAHp4w&usqp=CAU"
              alt="thise "
            /></NavLink> 
          </div>
          <div className="nav_searchbaar">
            <input type="text" name="" />
            <div className="search_icon">
              <SearchIcon />
            </div>
          </div>
        </div>

        <div className="right">
          <div className="nav_btn">
            <NavLink to="/login">SignIn</NavLink>
          </div>
          <div className="cart_btn">
            <Badge badgeContent={1} color="primary">
              <ShoppingCartIcon id="icon" />
            </Badge>

            <p>Cart</p>
          </div>
          <Avatar className="avtar" />
        </div>
      </nav>
    </header>
  );
};

export default Navbaar;
