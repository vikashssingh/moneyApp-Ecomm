import React ,{useEffect} from 'react';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import {useDispatch} from "react-redux";
import {auth} from "./utils/firebase";
import { setuser } from './redux/actions';
import SingleProduct from './pages/SingleProduct/SingleProduct';
import Checkout from './pages/Checkout/Checkout';
import Payment from './pages/Payment/Payment';
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js"


const promise = loadStripe("pk_test_51L8EjPSJFVbt9ZPzeIDY73IzZtkcHcU3gFeVvLoIkos06puO66QbW1IjbrelL9o9lZ9xwaKMGIROiEs0Y2Tvu5AB00bmpjmt5S")

function App() {
  let dispatch = useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(setuser(authUser))
      }else{
        dispatch(setuser(null))
      }
    })
  },[dispatch])

  return (
    <BrowserRouter>
        <div className="App">
          <Routes>
          <Route path='/payment' element={<><Header /><Elements stripe={promise}> <Payment/></Elements></>}> </Route> 
          <Route path='/checkout' element={<><Header /> <Checkout/></>}> </Route> 
          <Route path='/product/:id' element={<><Header /> <SingleProduct /></>}> </Route> 
          <Route exact path='/register' element={<Register />}> </Route> 
          <Route exact path='/login' element={<Login />}> </Route>            
          <Route path='/' element={<><Header /> <Home /></>}> </Route> 
                                      
              
          </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
