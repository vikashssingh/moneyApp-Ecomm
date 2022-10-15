import React from 'react'
import "./subTotal.css";
import {useSelector} from "react-redux";
import CurrencyFormat from 'react-currency-format';
import { useNavigate } from 'react-router-dom';
import {getBasketTotal} from "../../utils/BasketTotal"

const SubTotal = () => {
    const {basket,user} = useSelector(state => state.data )
    let  navigate = useNavigate();

    const handleCheckout =()=>{
        if( user){
            navigate("/payment")
        }
        else{
            navigate("/login");
        }
    }

  return (
    <div className='subtotal'>
        <CurrencyFormat 
            renderText={(value)=>(
                <>
                    <p>
                          SubTotal ({basket.length} items) : <strong>{value}</strong>
                    </p> 
                    <small className='subtotal-gift' >
                        <input type="checkbox"/>
                        This order contains a gift
                    </small>
                </>
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
        />       
        <button onClick={handleCheckout}>Proceed to Checkout</button> 
    </div>
  )
}

export default SubTotal