import Link from 'next/link';
import styles from '../../styles/Home.module.css';
import { useState } from 'react';

export default function RestaurantTop() {
  const [restaurant, setRestaurant] = useState();

  const restaurants = [
    {name: "Scarborough Fair"},
    {name: "Americana Kitchen & Bar"},
    {name: "Sushi by Kazu"}
  ]
  return (
    <>
      <h1>Restaurant Top Page</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
      <br/><br/>
      <input type="text" onChange={e => setRestaurant(e.target.value)} />
      <br/>
      <Link href={`/restaurants/${restaurant}`}>
        <a>Restauant</a>
      </Link>
      <br/>
      <div>
        {restaurants.map(item => {
          return (
            <div>
              <Link 
                as={`/restaurants/${item.name}`} 
                href={`/restaurants/[restaurant]`}
              >
                <a>{item.name}</a>
              </Link>
            </div>
          )
        })}
      </div>
    </>
  )
}
