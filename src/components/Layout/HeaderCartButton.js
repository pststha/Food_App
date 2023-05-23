import React,{useContext, useEffect, useState} from 'react'
import CartIcon from '../Cart/CartIcon'

import styles from './HeaderCartButton.module.css'
import CartContext from '../../store/cart-context'

const HeaderCartButton = props => {
  const [btnIsHighlight,setBtnIsHighlight] =useState(false)
  const ctx = useContext(CartContext)
  const noOfCartItem =  ctx.items.reduce((curNumber,item)=>{
    return curNumber + item.amount
  },0)
  const btnClasses = `${styles.button} ${btnIsHighlight?styles.bump:''}`
  useEffect(()=>{
    if (ctx.items.length===0){
      return
    }
    setBtnIsHighlight(true)
    const timer = setTimeout(() => {
      setBtnIsHighlight(false)
    }, 300);
    return ()=>{
      clearTimeout(timer)
    }
  },[ctx.items])
  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <span className={styles.yourCart}>Your Cart</span>
      <span className={styles.badge}>
        {noOfCartItem}
      </span>
    </button>
  )
}

export default HeaderCartButton
