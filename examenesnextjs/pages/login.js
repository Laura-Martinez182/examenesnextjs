export default function registerForm(req,res){
    return (
        <div>
            <h1>Iniciar sesión</h1>
            <form action="/send-data-here" method="post">
               
                <div>
                    <label for="code">Código:</label>
                    <input type="text" id="code" name="code" />
                </div>
                
                <div>  
                    <label for="pw">Contraseña:</label>
                    <input type="password" id="pw" name="pw" />
                </div>

                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}