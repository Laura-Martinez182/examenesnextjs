



export default function registerForm(req,res){

    const handleSubmit = async (event) => {
  
        event.preventDefault()
    
        // Get data from the form.
        const data = {
          name: event.target.name.value,
          lastname: event.target.lastname.value,
          code: event.target.code.value,
          pssword:event.target.pw.value,
          role: event.target.role.value,

        }
    
        const JSONdata = JSON.stringify(data)
    
        const endpoint = '/api/form'
    
        const options = {
          method: 'POST',

          headers: {
            'Content-Type': 'application/json',
          },

          body: JSONdata,
        }
    
        const response = await fetch(endpoint, options)
    
        const result = await response.json()
        alert(`Data submmited: ${result.data}`)
      }

    return (
        <div>
            <h1>Registro</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="first">Nombre:</label>
                    <input type="text" id="name" name="name" />
                </div>
                
                <div>
                    <label htmlFor="lastname">Apellido:</label>
                    <input type="text" id="lastname" name="lastname" />
                </div>

                <div>
                    <label htmlFor="code">Código:</label>
                    <input type="text" id="code" name="code" />
                </div>
                
                <div>  
                    <label htmlFor="pw">Contraseña:</label>
                    <input type="password" id="pw" name="pw" />
                </div>

                <div>
                    <label htmlFor="confirmpw">Confirmar contraseña:</label>
                    <input type="password" id="confirmpw" name="confirmpw" />
                </div>

                <div>
                    <label>Rol:</label>
                    <br/>
                    <input type="radio" id="student" name="role" value="student"/>
                    <label htmlFor="student">Estudiante</label>
                    <input type="radio" id="teacher" name="role" value="teacher"/>
                    <label htmlFor="teacher">Profesor(a)</label>
                </div>
                

                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}