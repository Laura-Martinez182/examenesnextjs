import Head from 'next/head'
import Header from '../../components/Header'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'
import {useRouter} from 'next/router'

export default function examList({ names }) {

    return (

        <div className='w-50 m-auto mt-5'>
            <Header title="Exams List"></Header>
            <div>
                <a>Código del estudiante: {useRouter().query.id}</a>
            </div>
            <h1 className={styles.description}>Lista de exámenes</h1>
            <div class="row">
                {names.map(e => (
                    <div class="col-sm-6">
                        <a href="#">
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
    return { names: exam }
}