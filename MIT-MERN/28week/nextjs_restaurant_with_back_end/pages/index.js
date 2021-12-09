import { useState } from 'react';
import { ApolloProvider } from '@apollo/client';
import RestaurantList from '../components/restaurantList';
import Cart from '../components/cart'
import Head from 'next/head'
import {
  InputGroup,
  InputGroupText,
  Button,
  Input
} from 'reactstrap';
import styles from '../styles/pages.module.css'
import client from '../apollo/client'

export default function Home() {
  const [query, setQuery] = useState('');
  console.log('index search query: ', query);

  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant App</title>
        <meta name="description" content="Restaurant App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ApolloProvider client={client}>
        <div className="search">
          <h2>Local Restaurants</h2>
          <InputGroup style={{marginBottom: "20px"}}>
            <InputGroupText>Search</InputGroupText>
            <Input
              onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
              value={query}
            />
          </InputGroup>
        </div>
        <RestaurantList searchValue={query} />
        <Cart></Cart>
      </ApolloProvider>
    </div>
  )
}
