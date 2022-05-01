import { useRouter } from 'next/router'

var examID=null;

let code={
    accCode:""
}

let handleChange = e => {
    switch (e.target.name) {
        case "codeacc": code.accCode = e.target.value; 
    }
}

export default function hand(){
    examID= useRouter().query.id
    return (
        <form className='form  ' onSubmit={handleSubmit}>
            <div className="card w-50 m-auto border-primary">
                <label htmlFor="codeacc">Ingrese el código de acceso:</label>
                <input type="text" id="codeacc" name="codeacc" onChange={handleChange} />
                <button className="btn btn-primary" type='submit'> Validar </button>
            </div>
        </form>
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
    
    let r = await fetch("http://localhost:3000/api/exam/"+examID, config)
    const result = await r.json()
    if(`${result.data}`=="correct"){
        window.location.assign("http://localhost:3000/questions/"+examID)
    }else{  
        alert(`Codigo de acceso incorrecto`)
    }


}    
