import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Bienvenido
        </h1>

        <div className={styles.grid}>
          <a href="/register" className={styles.card}>
            <h2>Registrarse</h2>
          </a>

          <a href="/login" className={styles.card}>
            <h2>Iniciar sesión</h2>
          </a>

        </div>
      </main>
    </div>
  )
}