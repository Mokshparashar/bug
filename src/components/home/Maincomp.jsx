import React, { useEffect } from "react";
import Banner from "./Banner";
import "./home.css";
import Slide from "./Slide";
import { getProducts } from "../redux/action/action";
import{useDispatch,useSelector} from "react-redux";


const Maincomp = () => {

  const{products}= useSelector(state => state.getproductsdata);
  console.log(products);

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts());
  },[dispatch]);

  return (
    <div className="home_section">
      <div className="banner_part">
        <Banner />
      </div>
      <div className="slide_part">
        <div className="left_slide">
          <h4 className="text">
            Hustlers: Jugaad ka khel | Watch only on miniTV
          </h4>
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/AmazonTV/Hustlers/PC_CC/DeskCC-379x304_V1._SY304_CB582438464_.jpg"
            alt=""
          />
          <a href="#" className="link">
            Watch more FREE content | only on miniTV
          </a>
        </div>
        <div className="right_slide">
          <Slide title="Deal Of The Day" products={products}/>
        </div>
      </div>
      <div className="center_img">
        <img
          src="https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150322012.jpg?size=626&ext=jpg&ga=GA1.1.1951997657.1709723351&semt=ais"
          alt="ti"
        />
        <img
          src="https://img.freepik.com/free-psd/fashion-saless-ocial-media-banner-social-media-template_237398-227.jpg?w=1060&t=st=1709725280~exp=1709725880~hmac=77343db22e5d198c0fc37cfd21ec4b4220de86448e0726887e3da4dda6aeca14"
          alt="thi"
        />
        <img
          src="https://img.freepik.com/premium-psd/black-friday-sale-social-media-post-instagram-post-web-banner-facebook-cover-template_220443-1070.jpg?size=626&ext=jpg&ga=GA1.1.1951997657.1709723351&semt=ais"
          alt="thi"
        />
      </div>
      <Slide title="Upto 80% off" products={products}/>
    </div>
  );
};

export default Maincomp;
