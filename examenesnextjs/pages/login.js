


export default function login(req,res){

    let handleSubmit = async e =>{
    }

    return (
        <div>
            <h1>Iniciar sesión</h1>
            <form onSubmit={handleSubmit}>
               
                <div>
                    <label htmlFor="code">Código:</label>
                    <input type="text" id="code" name="code" />
                </div>
                
                <div>  
                    <label htmlFor="pw">Contraseña:</label>
                    <input type="password" id="pw" name="pw" />
                </div>

                <button type="submit">Ingresar</button>
            </form>
        </div>
    )
}