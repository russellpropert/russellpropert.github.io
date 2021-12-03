import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h1>Hello World!</h1>
      <Link href="/restaurants">
        <a>Restauraunts</a>
      </Link>
    </>
  )
}
