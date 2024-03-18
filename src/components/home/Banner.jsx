import React from 'react'
import Carousel from 'react-material-ui-carousel'
import "./banner.css"



const data=[
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/OHL/New/Budgetstore/Corrected/PC_header.jpg",
    "https://m.media-amazon.com/images/G/31/CookwareDining/Aman/Feb/2pjioh._SX3000_QL85_.jpg",
    // "https://images-eu.ssl-images-amazon.com/images/G/31/img2020/img21/apparelGW/augatf23/marmfd/MA_2x._CB580026909_.jpg",
    // "https://-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/D103625178_DesktopTallHero_3000x1200._CB574597993_.jpg"
    // "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Consumables/SVD/March/WomensDay_1500.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Wireless/Isha/Honor/HonorDays/D121639797_1242x450.jpg"
]


const Banner = () => {
  return (
    <Carousel 
    className='carasousel'
    autoPlay={true}
    animation='slide'
    // indicators={false}
    // navButtonsAlwaysInvisible={true}
    // navButtonsAlwaysVisible={true}
    cycleNavigation={true}
    navButtonsWrapperProps={{
        style:{
            // backgroundColor:'transparent',
            color:'transparent',
            backgroundColor: 'non',
            // borderRadius:0,
            // marginTop:25,
            // height:"225px"

        }
    }}
    >
        {
            data.map((imag,i)=>{
                return(
                    <>
                        <img src={imag} alt="" className='banner_img'/>
                    </>
                )
            })
        }
    </Carousel>
  )
}

export default Banner
