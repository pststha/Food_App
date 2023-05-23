import React from 'react'
import styles from './AvailableMeals.module.css'
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Veg Samayabaji',
      description: 'Authentic traditional dish of Newar community without meat variety',
      price: 220.00,
    },
    {
      id: 'm2',
      name: 'Buff Samayabaji',
      description: 'Authentic traditional dish of Newar community with buff variety',
      price: 250.00,
    },
    {
      id: 'm3',
      name: 'Chicken Samayabaji',
      description: 'Authentic traditional dish of Newar community with chicken variety',
      price: 280.00,
    },
    {
      id: 'm4',
      name: 'Newari Dinner',
      description: 'The wholesome of Newari Festival Dinner',
      price: 550.00,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map(meal=><MealItem 
        key = {meal.id}
        id = {meal.id}
        name = {meal.name}
        description = {meal.description}
        price = {meal.price}
        />);
  return (
    <section className={styles.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
    </section>
  )
}

export default AvailableMeals
