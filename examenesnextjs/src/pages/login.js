import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default function login(req, res) {

    let handleSubmit = async e => {
    }
    return (
        <div className={styles.container}>
            <Header title="Login"></Header>
            <main className={styles.main}>

                <div class="card w-50 m-auto border-primary">
                    <div class="card text-center">
                        <h5 class="card-header">
                            Iniciar sesión
                        </h5>
                    </div>

                    <form className='form  ' onSubmit={handleSubmit}>
                        <div className='form-group p-2'>
                            <label htmlFor="code">Código:</label>
                            <input className='form-control' type="text" id="code" name="code" />

                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="pw">Contraseña:</label>
                            <input className='form-control' type="password" id="pw" name="pw" />
                        </div>
                        <div className='form-group p-2'>
                            <button class="btn btn-primary" type='submit'>Ingresar</button>
                        </div>
                    </form>
                </div>
            </main>

        </div>
    )
}

