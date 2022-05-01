import Header from '../components/Header'
import styles from '../styles/Home.module.css'

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
    //let found= registrations.filter(x=> x.code==user.code && x.pssword==user.pssword);
  /*
    if(found){
        window.location.assign("http://localhost:3000/api/registros")
    }else{
        window.location.assign("http://localhost:3000")
    }
    */
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

    
    if(`${result.data}`=="found"){
        window.location.assign("http://localhost:3000/user/"+user.code)
        //alert(`Is this your full name jajaja`)
    }else{
       //window.location.assign("http://localhost:3000")
       alert(`Codigo o contraseña incorrecta`)
    }
    
   //console.log(`${result.data}`);
    //alert(`Is this your full name: ${result.data}`)

}

export default function login({registrations}) {

    
    return (
        <div className={styles.container}>
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
                            <input className='form-control' type="text" id="code" name="code" onChange={handleChange} required/>
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="pw">Contraseña:</label>
                            <input className='form-control' type="password" id="pw" name="pw" onChange={handleChange} required/>
                        </div>
                        <div className='form-group p-2'>
                            <button className="btn btn-primary" type='submit'>Ingresar</button>
                        </div>
                    </form>
                    <div className='form-group p-2'>
                        <a href="/" className={styles.bt}>
                            Volver
                        </a>
                    </div>

                </div>
            </main>
        </div>
    )
}

login.getInitialProps = async ()=>{
    const res = await fetch('http://localhost:3000/api/regusers')
    const regs = await res.json()
    return {registrations: regs}
}

