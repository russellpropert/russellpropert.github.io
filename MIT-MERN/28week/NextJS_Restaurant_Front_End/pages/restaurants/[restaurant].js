import { useRouter } from "next/router";
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Restaurant() {
  const router = useRouter();

  return (
    <>
      <h1>Restaurant {router.query.restaurant}</h1>
      <Link href="/restaurants">
        <a>Restaurants</a>
      </Link>
    </>
  )
}
