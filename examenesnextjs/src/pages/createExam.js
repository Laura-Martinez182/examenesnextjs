import Header from '../components/Header'
import styles from '../styles/Home.module.css'

var questions = [];

let exam = {
    codeid: "",
    codeacc: "",
    title: "",
    desc: "",
    questions
}

let question = {
    questiontext: "",
    percentage: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctOption:""
}

let handleChangeQuestion = e => {
    switch (e.target.name) {
        case "questiontext": question.questiontext = e.target.value; break;
        case "percentage": question.percentage= e.target.value; break;
        case "optionA": question.optionA = e.target.value; break;
        case "optionB": question.optionB = e.target.value; break;
        case "optionC": question.optionC = e.target.value; break;
        case "optionD": question.optionD = e.target.value; break;
        case "correctOption": question.correctOption = e.target.value
    }
}


let handleChangeExam = e => {
    switch (e.target.name) {
        case "codeid": exam.codeid = e.target.value; break;
        case "codeacc": exam.codeacc= e.target.value; break;
        case "title": exam.title = e.target.value; break;
        case "desc": exam.desc = e.target.value
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
        body: JSON.stringify(exam)
    }
    let r = await fetch("http://localhost:3000/api/insertExam", config)
    console.log(r);
}

export default function createExam(req, res) {

    return (
        <div className={styles.container}>
            <Header title="Create exam"></Header>
            <main className={styles.main}>
                <div className="card w-50 m-auto border-primary">
                    <div className="card text-center">
                        <h5 className="card-header">
                            Crear examen
                        </h5>
                    </div>
                    <form className='form  ' onSubmit={handleSubmit}>
                    <div className="card w-50 m-auto border-primary">
                        <div className='form-group p-2'>
                            <label htmlFor="codeid">Código único de identificación:</label>
                            <input className='form-control' type="text" id="codeid" name="codeid" onChange={handleChangeExam}/>
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="codeacc">Codigo de acceso:</label>
                            <input className='form-control' type="text" id="codeacc" name="codeacc" onChange={handleChangeExam}/>
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="title">Título:</label>
                            <input className='form-control' type="text" id="title" name="title" onChange={handleChangeExam}/>
                        </div>
                        <div className='form-group p-2'>
                            <label htmlFor="desc">Descripción:</label>
                            <input className='form-control' type="text" id="desc" name="desc" onChange={handleChangeExam}/>
                        </div>
                    </div>    
                        <div className="card w-50 m-auto border-primary" id="questionsubform">
                            <div className='form-group p-2'>
                                <label htmlFor="questiontext">Ingrese la pregunta:</label>
                                <input className='form-control' type="text" id="questiontext" name="questiontext" onChange={handleChangeQuestion}/>
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="percentage">Porcentaje de esta pregunta sobre la nota final del examen:</label>
                                <input className='form-control' type="text" id="percentage" name="percentage" onChange={handleChangeQuestion}/>
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionA">Opción A:</label>
                                <input className='form-control' type="text" id="optionA" name="optionA" onChange={handleChangeQuestion}/>
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionB">Opción B:</label>
                                <input className='form-control' type="text" id="optionB" name="optionB" onChange={handleChangeQuestion}/>
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionC">Opción C:</label>
                                <input className='form-control' type="text" id="optionC" name="optionC" onChange={handleChangeQuestion}/>
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionD">Opción D:</label>
                                <input className='form-control' type="text" id="optionD" name="optionD" onChange={handleChangeQuestion}/>
                            </div>
                            <div>
                                <div className='form-group p-2'>
                                    <label>Elija la opción correcta:</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="optionA" name="correctOption" value="optionA" onChange={handleChangeQuestion}/>
                                    <label className="form-check-label" htmlFor="optionA">Opción A</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionB" name="correctOption" value="optionB" onChange={handleChangeQuestion}/>
                                    <label className="form-check-label" htmlFor="optionB">Opción B</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionC" name="correctOption" value="optionC" onChange={handleChangeQuestion}/>
                                    <label className="form-check-label" htmlFor="optionC">Opción C</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionD" name="correctOption" value="optionD" onChange={handleChangeQuestion}/>
                                    <label className="form-check-label" htmlFor="optionD">Opción D</label>
                                </div>
                                <div className='form-group p-2'>
                                    <a href="#" onClick= {addQuestions()} className="btn btn-outline-success"> + Añadir pregunta</a>
                                </div>
                            </div>
                        </div>    
                        <div className='form-group p-2' >
                            <button className="btn btn-primary" type='submit'>Terminar examen</button>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    )
}

function addQuestions () {
    questions.push(question);
    console.log(questions);
    console.log(exam);
}    


