import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <>
      <h1>Contact Us</h1>
      <h4>restaurantapp@restaurants.com</h4>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  )
}
