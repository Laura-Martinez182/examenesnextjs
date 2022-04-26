 // Get data from the form.
    let data = {
        name: "",
        lastname: "",
        code: "",
        pssword:"",
        role: "",

    }

    let handleChange = e =>{
        switch (e.target.name){
            case "name": data.name = e.target.value; break;
            case "lastname": data.lastname = e.target.value; break;
            case "code": data.code = e.target.value; break;
            case "pw": data.pssword = e.target.value; break;
            case "role": data.role = e.target.value
        } 
    }

    let handleSubmit = async e =>{
        e.preventDefault();
        let config = {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          }
        let r = await fetch ("http://localhost:3000/api/insert",config)
        console.log(r);
    }

    export default function registerForm(req,res){

        return (
            <div>
                <h1>Registro</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="first">Nombre:</label>
                        <input type="text" id="name" name="name" onChange={handleChange}/>
                    </div>
                    
                    <div>
                        <label htmlFor="lastname">Apellido:</label>
                        <input type="text" id="lastname" name="lastname" onChange={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="code">Código:</label>
                        <input type="text" id="code" name="code" onChange={handleChange} />
                    </div>
                    
                    <div>  
                        <label htmlFor="pw">Contraseña:</label>
                        <input type="password" id="pw" name="pw" onChange={handleChange}/>
                    </div>

                    <div>
                        <label htmlFor="confirmpw">Confirmar contraseña:</label>
                        <input type="password" id="confirmpw" name="confirmpw" />
                    </div>

                    <div>
                        <label>Rol:</label>
                        <br/>
                        <input type="radio" id="student" name="role" value="student" onChange={handleChange}/>
                        <label htmlFor="student">Estudiante</label>
                        <input type="radio" id="teacher" name="role" value="teacher" onChange={handleChange}/>
                        <label htmlFor="teacher">Profesor(a)</label>
                    </div>
                    

                    <button type="submit">Registrarse</button>
                </form>
            </div>
        )
    }