import React, { useEffect, useState } from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { useParams } from "react-router-dom";

const Cart = () => {
  const { id } = useParams("");
  // console.log(id);

  const [inddata, setinddata] = useState("");
  console.log(inddata);
  const getinddata = async () => {
    const res = await fetch(`getproductsone/${id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    if (res.status !== 201) {
      alert("no data available");
    } else {
      // console.log("ind mila hain");
      setinddata(data);
    }
  };

  useEffect(() => {
    getinddata();
  }, [id]);

  return (
    <div className="cart_section">
      <div className="cart_container">
        <div className="left_cart">
          <img src={inddata.detailUrl} alt="cart" />
          <div className="cart_btn">
            <button className="cart_btn1">Add to Cart</button>
            <button className="cart_btn2">Buy Now</button>
          </div>
        </div>
        <div className="right_cart">
          <h3>{inddata?.title?.shortTitle}</h3>
          <h4>{inddata.longTitle}</h4>
          <Divider />
          {/* <p className="mrp">M.R.P. : ₹{in/ddata.price.mrp}</p> */}
          <p>
            deal of the day:<span style={{ color: "#B12704" }}> $625</span>
          </p>
          <p>
            you save:<span style={{ color: "#B12704" }}> $540 (54%)</span>
          </p>
          <div className="discount_box">
            <h5>
              Discount : <span style={{ color: "#111" }}>extra 10% off</span>
            </h5>
            <h4>
              Free Delivery :{" "}
              <span style={{ color: "#111", fontWeight: 600 }}>Oct 8 - 24</span>{" "}
              details
            </h4>
            <p>
              Fast delivary :{" "}
              <span style={{ color: "#111", fontWeight: 600 }}>Tomorrow</span>
            </p>
          </div>
          <div className="description">
            About the iteam :{" "}
            <span
              style={{
                color: "#565959",
                fontSize: 14,
                fontWeight: 500,
                letterSpacing: "0.4px",
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              tempore aspernatur aperiam culpa aut amet nisi sunt aliquam!
              Tempore ullam reprehenderit magni illo earum repellat.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
