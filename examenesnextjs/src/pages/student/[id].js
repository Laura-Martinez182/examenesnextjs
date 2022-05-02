import Head from 'next/head'
import Header from '../../components/Header'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

var code = null;

export default function examList({ names }) {

    return (
        <div className='w-50 m-auto mt-5'>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="Exams List"></Header>
            <div className={styles.row}>
                <div>
                    <a>Código del estudiante: {useRouter().query.id}</a>
                </div>
                <div className='form-group p-2'>
                    <a href="/" className={styles.bt}>
                        Cerrar sesión
                    </a>
                </div>
            </div>
            <h1 className={styles.subtitle}>Lista de exámenes</h1>
            <div class="row">
                {names.map(e => (
                    <div class="col-sm-6">
                        <a href={'http://localhost:3000/exam/' + useRouter().query.id + "-" + e.codeid}>
                            <div class="card bg-light mb-3 w-auto">
                                <div class="card text-center">
                                    <div class="card-header">{e.codeid}</div>
                                    <div class="card-body">
                                        <h5 class="card-title">{e.title}</h5>
                                        <p class="card-text">{e.description}</p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}


examList.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/regexams')
    const exam = await res.json()
    const res2 = await fetch('http://localhost:3000/api/clearAnswers')
    return { names: exam }
}