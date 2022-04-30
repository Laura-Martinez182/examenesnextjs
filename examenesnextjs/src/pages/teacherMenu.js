import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function TeacherMenu() {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    ¿Qué deseas hacer?
                </h1>

                <div className={styles.grid}>
                    <a href="/createExam" className={styles.card}>
                        <h2>Crear examen</h2>
                    </a>
                </div>
            </main>
        </div>
    )
}

