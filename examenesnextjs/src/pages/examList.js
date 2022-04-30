import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function examList({ names }) {

    return (

        <div className='w-50 m-auto mt-5'>
            <h1 className='text-center'>Lista de deseos</h1>
            <div className='list-group'>
                {names.map(e => (
                    <a href="#" className="list-group-item list-group-item-action" aria-current="true">
                        <div className="d-flex w-100 justify-content-between">
                            <p className="mb-1">{e.title}</p>
                            <p className="mb-1">{e.desc}</p>
                        </div>
                    </a>
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

