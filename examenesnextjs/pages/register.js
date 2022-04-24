
export default function registerForm(req,res){
    return (
        <div>
            <h1>Registro</h1>
            <form action="/send-data-here" method="post">
                <div>
                    <label for="first">Nombre:</label>
                    <input type="text" id="name" name="name" />
                </div>
                
                <div>
                    <label for="lastname">Apellido:</label>
                    <input type="text" id="lastname" name="lastname" />
                </div>

                <div>
                    <label for="code">Codigo:</label>
                    <input type="text" id="code" name="code" />
                </div>
                
                <div>  
                    <label for="pw">Contraseña:</label>
                    <input type="password" id="pw" name="pw" />
                </div>

                <div>
                    <label for="confirmpw">Confirmar contraseña:</label>
                    <input type="password" id="confirmpw" name="confirmpw" />
                </div>

                <div>
                    <label>Rol:</label>
                    <br/>
                    <input type="radio" id="student" name="role" value="student"/>
                    <label for="student">Estudiante</label>
                    <input type="radio" id="teacher" name="role" value="teacher"/>
                    <label for="teacher">Profesor(a)</label>
                </div>
                

                <button type="submit">Registrarse</button>
            </form>
        </div>
    )
}