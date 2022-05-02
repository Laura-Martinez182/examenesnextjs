import Head from 'next/head'
import Header from '../../components/Header'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function teacher() {

    return (

        <div className='w-50 m-auto mt-5'>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="Teacher menu"></Header>
            <div className={styles.row}>
                <div>
                    <a>Código del docente: {useRouter().query.id}</a>
                </div>
                <div className='form-group'>
                    <a href="/" className={styles.a}>
                        Cerrar sesión
                    </a>
                </div>
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