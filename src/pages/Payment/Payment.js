import React from 'react'
import "./payment.css";
import {useSelector,useDispatch} from "react-redux";
import CurrencyFormat from 'react-currency-format';
import CheckoutProduct from "../../components/CheckoutProduct/CheckoutProduct";
import {getBasketTotal} from "../../utils/BasketTotal";
import { useNavigate,Link } from 'react-router-dom';
import {db} from "../../utils/firebase";

const Payment = () => {
    const {basket,user} = useSelector(state => state.data)

    const handleSubmit =(e)=>{
        e.preventDefault();
    }
  return (
    <div className='payment'>
        <div className="payment-container">
            <h1>Checkout {<Link to="/checkout">{basket.length} items</Link>}</h1>
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment-address">
                    <p>{user && user.email}</p>
                    <p>Fl no 2 ,Patel Classic,Kondhwa Khurd</p>
                    <p>Pune, India</p>

                </div>
            </div>
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Review items and delivery</h3>
                </div>
                <div className="payment-items">
                    {basket && basket.map((item)=>(
                        <CheckoutProduct                       
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating ={item.rating}                        
                         />
                    ))}
                </div>
            </div>
            <div className="payment-section">
                <div className="payment-title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment-details">
                    <form onSubmit={handleSubmit}>
                        <div className='payment-price-container'>
                        <CurrencyFormat 
                                renderText={(value)=>(
                                    <>
                                       <h4>Order Total :{value}</h4>
                                    </>
                                 )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                            /> 
                            <button>
                                <span>Buy Now</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment