import React from 'react'
import styles from './Header.module.css'
import mealImage from '../../assets/meals.jpg'
import HeaderCartButton from './HeaderCartButton'

const Header = props => {
  return (
    <>
      <header className={styles.header}>
        <h1>नेवाः लहना</h1>
        <HeaderCartButton onClick = {props.onShowCart}/>
      </header>  
      <div className={styles['main-image']}>
        <img src={mealImage} alt="Lahana meal" />
      </div>
    </>
  )
}

export default Header
