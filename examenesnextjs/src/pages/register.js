import Header from '../components/Header'
import styles from '../styles/Home.module.css'


// Get data from the form.
let data = {
    name: "",
    lastname: "",
    code: "",
    pssword: "",
    role: ""
}

let handleChange = e => {
    switch (e.target.name) {
        case "name": data.name = e.target.value; break;
        case "lastname": data.lastname = e.target.value; break;
        case "code": data.code = e.target.value; break;
        case "pw": data.pssword = e.target.value; break;
        case "role": data.role = e.target.value
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
        body: JSON.stringify(data)
    }
    let r = await fetch("http://localhost:3000/api/insertUser", config)
    console.log(r);
}

export default function registerForm(req, res) {
    return (
        <div className={styles.container}>
            <Header title="Registro"></Header>
            <main className={styles.main}>
                <div className="card w-50 m-auto border-primary">
                    <div className="card text-center">
                        <h5 className="card-header">
                            Registro
                        </h5>
                    </div>
                    <form className='form  ' onSubmit={handleSubmit}>
                        <div className='form-group p-2'>
                            <label htmlFor="first">Nombre:</label>
                            <input className='form-control' type="text" id="name" name="name" onChange={handleChange} />
                        </div>

                        <div className='form-group p-2'>
                            <label htmlFor="lastname">Apellido:</label>
                            <input className='form-control' type="text" id="lastname" name="lastname" onChange={handleChange} />
                        </div>

                        <div className='form-group p-2'>
                            <label htmlFor="code">Código:</label>
                            <input className='form-control' type="text" id="code" name="code" onChange={handleChange} />
                        </div>

                        <div className='form-group p-2'>
                            <label htmlFor="pw">Contraseña:</label>
                            <input className='form-control' type="password" id="pw" name="pw" onChange={handleChange} />
                        </div>

                        <div className='form-group p-2'>
                            <label htmlFor="confirmpw">Confirmar contraseña:</label>
                            <input className='form-control' type="password" id="confirmpw" name="confirmpw" />
                        </div>

                        <div>
                            <div className='form-group p-2'>
                                <label>Rol:</label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" id="student" name="role" value="student" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="student">Estudiante</label>
                            </div>

                            <div className="form-check form-check-inline text-center">
                                <input className="form-check-input" type="radio" id="teacher" name="role" value="teacher" onChange={handleChange} />
                                <label className="form-check-label" htmlFor="teacher">Profesor(a)</label>
                            </div>
                        </div>

                        <div className='form-group p-2'>
                            <button className="btn btn-primary" type='submit'>Registrarse</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

