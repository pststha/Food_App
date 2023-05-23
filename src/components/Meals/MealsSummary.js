import React from 'react'
import styles from './MealsSummary.module.css'

const MealsSummary = () => {
  return (
    <section className={styles.summary}>
        <h2>Delicious Food, Delivered to You</h2>
        <p>
            Choose your favourite meal from our broad selection of Newari cuisine and enjoy the food at home.
        </p>
        <p>
            All our meals are cooked with high quality local ingredients, just-in-time and of course by the the experienced local chefs.
        </p>
    </section>
  )
}

export default MealsSummary
