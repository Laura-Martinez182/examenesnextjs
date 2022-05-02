import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function teacher() {

    return (

        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <a>Código del docente: {useRouter().query.id}</a>
            </div>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    ¿Qué deseas hacer?
                </h1>

                <div className={styles.grid}>
                    <a href={"/createExam/" + useRouter().query.id} className={styles.card}>
                        <h2>Crear examen</h2>
                    </a>
                </div>
            </main>
        </div>
    )
}