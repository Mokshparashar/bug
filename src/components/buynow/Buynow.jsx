import React from 'react';
import "./bynow.css";
import { Divider } from '@mui/material';
import Option from './Option';
import Subtotal from './Subtotal';
import Right from './Right';

const Buynow = () => {
  return (
    <div className='buynow_section'>
        <div className="buynow_container">
            <div className="left_buy">
                <h1>Shopping Cart</h1>
                <p>Select all items</p>
                <span className='leftbuyprice'>Price</span>
                <Divider/>

                <div className="item_containert">
                    <img src="https://burst.shopifycdn.com/photos/wrist-watches.jpg?width=1000&format=pjpg&exif=0&iptc=0" alt="" />
                    <div className="item_details">
                        <h3>item discription</h3>
                        <h3>item name</h3>
                        <h3 className='diffrentprice'>$230459</h3>
                        <p className='unusuall'>Usually dispatched in 8 days.</p>
                        <p>Eligible for Free Shipping</p>
                        <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px-2x._CB485942108_.png" alt="" />
                        <Option/>
                    </div>
                    <h3 className='item_price'>$49000</h3>
                </div>
                <Divider/>
                <Subtotal/>
            </div>
            <Right/>
        </div>
    </div>
  )
}

export default Buynow
