import React from 'react'
import "./checkoutProduct.css";
import {useDispatch} from "react-redux";
import  ShoppingCartOutlined  from '@material-ui/icons/ShoppingCartOutlined';
import { removeFromBasket } from '../../redux/actions';


const CheckoutProduct = ({id,title,image,rating,price}) => {

    let dispatch = useDispatch();

    const removeItemFromBasket =()=>{
      dispatch(removeFromBasket(id));
    };

  return (
    <div className='checkout-product'>

             <img src={image} alt='' className='checkout-product-image'/>
             <div className="checkout-product-info">
                 <p className="checkout-product-title">{title}</p>
                <p className='checkout-product-price'>
                    <strong>$</strong>
                    <strong>{price}</strong>
                </p>
                <div className="checkout-product-rating">
                         {Array(rating).fill().map((_,index)=><p key={index}>⭐</p>)}
                </div>
                <button onClick={removeItemFromBasket}>
                    <li><ShoppingCartOutlined/> </li>
                    Remove From Basket
                </button>
             </div>

    </div>
  )
}

export default CheckoutProduct