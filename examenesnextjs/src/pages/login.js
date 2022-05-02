import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

let user = {
    code: "",
    pssword: ""
}

let handleChange = e => {
    switch (e.target.name) {

        case "code": user.code = e.target.value; break;
        case "pw": user.pssword = e.target.value;
    }
}
let handleSubmit = async e => {
    e.preventDefault();
    let config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    }

    let r = await fetch("http://localhost:3000/api/validation", config)
    console.log(r);
    const result = await r.json()


    if (`${result.data}` == "found") {
        window.location.assign("http://localhost:3000/user/" + user.code)
    } else {
        alert(`Codigo o contraseña incorrecta`)
    }

}

export default function login({ registrations }) {


    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header title="Login"></Header>
            <main className={styles.main}>
                <div className="card w-50 m-auto border-primary">
                    <div className="card text-center">
                        <h5 className="card-header">
                            Iniciar sesión
                        </h5>
                    </div>
                    <form className='form  ' onSubmit={handleSubmit}>
                        <div className='form-group p-2'>
                            <label htmlFor="code">Código:</label>
                            <input className='form-control' type="text" id="code" name="code" onChange={handleChange} required />
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="pw">Contraseña:</label>
                            <input className='form-control' type="password" id="pw" name="pw" onChange={handleChange} required />
                        </div>
                        <div className='col text-center'>
                            <button className="btn btn-primary" type='submit'>Ingresar</button>
                        </div>
                    </form>
                    <div className='col text-center p-3'>
                        <a href="/" className={styles.a}>
                            Cancelar
                        </a>
                    </div>
                </div>
            </main>
        </div>
    )
}

login.getInitialProps = async () => {
    const res = await fetch('http://localhost:3000/api/regusers')
    const regs = await res.json()
    return { registrations: regs }
}

