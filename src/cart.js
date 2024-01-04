import React from 'react'
import './e-commerce.css';
import mac from './image/macbook.png'
const Cart = () => {
  return (
    <div className='cart1' >
      <img className='ci' src={mac} alt="" />
      <div className='dis'>
        <p>Apple MacBook Air Laptop M1 chip, 13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage, Backlit Keyboard, FaceTime HD Camera, Touch ID. Works with iPhone/iPad; Silver</p>
        <p><b>About this item</b><br/>
          Powerful Performance – Take on everything from professional-quality editing to action-packed gaming with ease. The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.<br/></p>
        <p className='price' > Price :<span className='pd' >-3% </span><b>235,000 ugx</b></p>
        <button className='addtocart'> Buy Now</button>
      </div>

    </div>
  )
}

export default Cart