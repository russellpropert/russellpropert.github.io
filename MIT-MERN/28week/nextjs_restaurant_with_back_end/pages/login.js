import Head from 'next/head'
import styles from '../styles/pages.module.css'

export default function Login() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant App – Login</title>
        <meta name="description" content="Login page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Login
        </h1>
      </main>
    </div>
  )
}
