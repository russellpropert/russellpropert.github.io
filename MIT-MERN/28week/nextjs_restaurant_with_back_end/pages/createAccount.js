import Head from 'next/head'
import styles from '../styles/pages.module.css'

export default function CreateAccount() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Restaurant App – Create Account</title>
        <meta name="description" content="Create account page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Create Account
        </h1>
      </main>
    </div>
  )
}
