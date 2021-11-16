import React from 'react'
import { ImCart } from 'react-icons/im'
import { useHistory } from "react-router-dom";
import '../App.css'

function CartIcon() {
    
  var history = useHistory();

  function cart() {
      history.push("/cart");
      window.location.reload();
   }
    return (
        <div onClick={()=>cart()} className="cart"><ImCart size={25}/></div>

    )
}

export default CartIcon
