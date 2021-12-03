import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Privacy() {
  return (
    <>
      <h1>Privacy Policy</h1>
      <p>
        This privacy policy ("policy") will help you understand how [name] ("us", "we", "our") uses and
        protects the data you provide to us when you visit and use [website] ("website", "service").
      </p>
      <p>
        We reserve the right to change this policy at any given time, of which you will be promptly
        updated. If you want to make sure that you are up to date with the latest changes, we advise
        you to frequently visit this page.
      </p>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  )
}
