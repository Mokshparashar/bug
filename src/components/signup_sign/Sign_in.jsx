import React, { useState } from "react";
import "./signup.css";
import { NavLink } from "react-router-dom";

const Sign_in = () => {
  const [logdata, setData] = useState({
    email: "",
    password: "",
  });

//   console.log(logdata)

  const adddata = (e)=>{
    const {name,value}=e.target;

    setData(()=>{
        return{
            ...logdata,
            [name]:value
        }
    })
  }

  return (
    <>
      <section>
        <div className="sign_container">
          <div className="sign_header">
            <img
              //   src="https://banner2.cleanpng.com/20180501/abw/kisspng-amazon-com-logo-retail-brand-publishing-chat-room-logo-5ae868f510e770.1581033615251806610693.jpg"
              src="https://w7.pngwing.com/pngs/1012/770/png-transparent-amazon-logo-amazon-com-amazon-video-logo-company-brand-amazon-logo-miscellaneous-wish-text-thumbnail.png"
              alt="logo"
            />
          </div>
          <div className="sign_form">
            <form>
              <h1>SignIn</h1>
              <div className="form_data">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  onChange={adddata}
                  value={logdata.email}
                  name="email"
                  id="email"
                  placeholder="abc@gmail.com"
                />
              </div>
              <div className="form_daata">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  onChange={adddata}
                  value={logdata.password}
                  name="password"
                  id="password"
                  placeholder="At least 6 character"
                />
              </div>
              <button className="signin_btn">Continue</button>
            </form>
          </div>
          <div className="create_accountinfo">
            <p>New To Amazon</p>
            <NavLink to="/register">
              <button>Create Your amazon account</button>
            </NavLink>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sign_in;
