import { useRouter } from 'next/router'
import Header from '../../components/Header'
import styles from '../../styles/Home.module.css'
import Head from 'next/head'

var examID = null;

let code = {
    accCode: ""
}

let handleChange = e => {
    switch (e.target.name) {
        case "codeacc": code.accCode = e.target.value;
    }
}

export default function hand() {
    examID = useRouter().query.id
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="Question List"></Header>

            <main className={styles.main}>

                <form className='form  ' onSubmit={handleSubmit}>

                    <label className={styles.description}>Ingrese el código de acceso: </label>
                    <label>  &nbsp; </label>
                    <input type="text" id="codeacc" name="codeacc" onChange={handleChange} />

                    <div className='col text-center'>
                        <button className="btn btn-primary btn-lg" type='submit'> Validar </button>
                    </div>

                </form>

            </main>


        </div>

    )
}

let handleSubmit = async e => {
    e.preventDefault();
    let config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(code)
    }
    console.log("pasaa")

    let r = await fetch("http://localhost:3000/api/exam/" + examID, config)
    const result = await r.json()
    if (`${result.data}` == "correct") {
        window.location.assign("http://localhost:3000/questions/" + examID + "-0")
    } else {
        alert(`Codigo de acceso incorrecto`)
    }
}    
