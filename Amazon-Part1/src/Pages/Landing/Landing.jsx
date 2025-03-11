import React from 'react'
import LayOut from '../../Components/LayOut/LayOut'
import Carousels from '../../Components/Carousel/Carousels'
import Category from '../../Components/Category/Category'
import Product from '../../Components/Product/Product'
// import Payment from "../Payment/Payment"
function Landing() {
  return (
    <LayOut>
        <Carousels/>
        <Category/>
        <Product/>
        {/* <Payment/> */}
    </LayOut>
  )
}

export default Landing
