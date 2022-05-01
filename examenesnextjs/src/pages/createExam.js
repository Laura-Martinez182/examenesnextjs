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

let question1 = {
    questiontext: "",
    percentage: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctOption: ""
}

let question2 = {
    questiontext: "",
    percentage: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctOption: ""
}

let question3 = {
    questiontext: "",
    percentage: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctOption: ""
}

let question4 = {
    questiontext: "",
    percentage: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctOption: ""
}

let question5 = {
    questiontext: "",
    percentage: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctOption: ""
}


let handleChangeQuestion1 = e => {
    switch (e.target.name) {
        case "questiontext": question1.questiontext = e.target.value; break;
        case "percentage": question1.percentage = e.target.value; break;
        case "optionA": question1.optionA = e.target.value; break;
        case "optionB": question1.optionB = e.target.value; break;
        case "optionC": question1.optionC = e.target.value; break;
        case "optionD": question1.optionD = e.target.value; break;
        case "correctOption": question1.correctOption = e.target.value
    }
}

let handleChangeQuestion2 = e => {
    switch (e.target.name) {
        case "questiontext": question2.questiontext = e.target.value; break;
        case "percentage": question2.percentage = e.target.value; break;
        case "optionA": question2.optionA = e.target.value; break;
        case "optionB": question2.optionB = e.target.value; break;
        case "optionC": question2.optionC = e.target.value; break;
        case "optionD": question2.optionD = e.target.value; break;
        case "correctOption": question2.correctOption = e.target.value
    }
}

let handleChangeQuestion3 = e => {
    switch (e.target.name) {
        case "questiontext": question3.questiontext = e.target.value; break;
        case "percentage": question3.percentage = e.target.value; break;
        case "optionA": question3.optionA = e.target.value; break;
        case "optionB": question3.optionB = e.target.value; break;
        case "optionC": question3.optionC = e.target.value; break;
        case "optionD": question3.optionD = e.target.value; break;
        case "correctOption": question3.correctOption = e.target.value
    }
}

let handleChangeQuestion4 = e => {
    switch (e.target.name) {
        case "questiontext": question4.questiontext = e.target.value; break;
        case "percentage": question4.percentage = e.target.value; break;
        case "optionA": question4.optionA = e.target.value; break;
        case "optionB": question4.optionB = e.target.value; break;
        case "optionC": question4.optionC = e.target.value; break;
        case "optionD": question4.optionD = e.target.value; break;
        case "correctOption": question4.correctOption = e.target.value
    }
}

let handleChangeQuestion5 = e => {
    switch (e.target.name) {
        case "questiontext": question5.questiontext = e.target.value; break;
        case "percentage": question5.percentage = e.target.value; break;
        case "optionA": question5.optionA = e.target.value; break;
        case "optionB": question5.optionB = e.target.value; break;
        case "optionC": question5.optionC = e.target.value; break;
        case "optionD": question5.optionD = e.target.value; break;
        case "correctOption": question5.correctOption = e.target.value
    }
}


let handleChangeExam = e => {
    switch (e.target.name) {
        case "codeid": exam.codeid = e.target.value; break;
        case "codeacc": exam.codeacc = e.target.value; break;
        case "title": exam.title = e.target.value; break;
        case "desc": exam.desc = e.target.value
    }
}

let handleSubmit = async e => {
    e.preventDefault();

    questions.push(question1);
    questions.push(question2);
    questions.push(question3);
    questions.push(question4);
    questions.push(question5);

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
                    </div><br></br>
                    <form className='form  ' id="examsForm" onSubmit={handleSubmit}>
                        <div className="card w-50 m-auto border-primary">
                            <div className='form-group p-2'>
                                <label htmlFor="codeid">Código único de identificación:</label>
                                <input className='form-control' type="text" id="codeid" name="codeid" onChange={handleChangeExam} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="codeacc">Codigo de acceso:</label>
                                <input className='form-control' type="text" id="codeacc" name="codeacc" onChange={handleChangeExam} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="title">Título:</label>
                                <input className='form-control' type="text" id="title" name="title" onChange={handleChangeExam} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="desc">Descripción:</label>
                                <input className='form-control' type="text" id="desc" name="desc" onChange={handleChangeExam} />
                            </div>
                        </div> <br></br>
                        <div className="card w-50 m-auto border-primary" id="questionsubform">
                            <div className='form-group p-2'>
                                <h5>Pregunta #1</h5> <br></br>
                                <label htmlFor="questiontext">Ingrese la pregunta:</label>
                                <input className='form-control' type="text" id="questiontext" name="questiontext" onChange={handleChangeQuestion1} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="percentage">Porcentaje de esta pregunta sobre la nota final del examen:</label>
                                <input className='form-control' type="text" id="percentage" name="percentage" onChange={handleChangeQuestion1} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionA">Opción A:</label>
                                <input className='form-control' type="text" id="optionA" name="optionA" onChange={handleChangeQuestion1} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionB">Opción B:</label>
                                <input className='form-control' type="text" id="optionB" name="optionB" onChange={handleChangeQuestion1} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionC">Opción C:</label>
                                <input className='form-control' type="text" id="optionC" name="optionC" onChange={handleChangeQuestion1} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionD">Opción D:</label>
                                <input className='form-control' type="text" id="optionD" name="optionD" onChange={handleChangeQuestion1} />
                            </div>
                            <div>
                                <div className='form-group p-2'>
                                    <label>Elija la opción correcta:</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="optionA" name="correctOption" value="A" onChange={handleChangeQuestion1} />
                                    <label className="form-check-label" htmlFor="optionA">Opción A</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionB" name="correctOption" value="B" onChange={handleChangeQuestion1} />
                                    <label className="form-check-label" htmlFor="optionB">Opción B</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionC" name="correctOption" value="C" onChange={handleChangeQuestion1} />
                                    <label className="form-check-label" htmlFor="optionC">Opción C</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionD" name="correctOption" value="D" onChange={handleChangeQuestion1} />
                                    <label className="form-check-label" htmlFor="optionD">Opción D</label>
                                </div>
                            </div>
                        </div>  <br></br>
                        <div className="card w-50 m-auto border-primary" id="questionsubform">
                            <div className='form-group p-2'>
                                <h5>Pregunta #2</h5> <br></br>
                                <label htmlFor="questiontext">Ingrese la pregunta:</label>
                                <input className='form-control' type="text" id="questiontext" name="questiontext" onChange={handleChangeQuestion2} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="percentage">Porcentaje de esta pregunta sobre la nota final del examen:</label>
                                <input className='form-control' type="text" id="percentage" name="percentage" onChange={handleChangeQuestion2} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionA">Opción A:</label>
                                <input className='form-control' type="text" id="optionA" name="optionA" onChange={handleChangeQuestion2} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionB">Opción B:</label>
                                <input className='form-control' type="text" id="optionB" name="optionB" onChange={handleChangeQuestion2} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionC">Opción C:</label>
                                <input className='form-control' type="text" id="optionC" name="optionC" onChange={handleChangeQuestion2} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionD">Opción D:</label>
                                <input className='form-control' type="text" id="optionD" name="optionD" onChange={handleChangeQuestion2} />
                            </div>
                            <div>
                                <div className='form-group p-2'>
                                    <label>Elija la opción correcta:</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="optionA" name="correctOption" value="A" onChange={handleChangeQuestion2} />
                                    <label className="form-check-label" htmlFor="optionA">Opción A</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionB" name="correctOption" value="B" onChange={handleChangeQuestion2} />
                                    <label className="form-check-label" htmlFor="optionB">Opción B</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionC" name="correctOption" value="C" onChange={handleChangeQuestion2} />
                                    <label className="form-check-label" htmlFor="optionC">Opción C</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionD" name="correctOption" value="D" onChange={handleChangeQuestion2} />
                                    <label className="form-check-label" htmlFor="optionD">Opción D</label>
                                </div>
                            </div>
                        </div> <br></br>
                        <div className="card w-50 m-auto border-primary" id="questionsubform">
                            <div className='form-group p-2'>
                                <h5>Pregunta #3</h5> <br></br>
                                <label htmlFor="questiontext">Ingrese la pregunta:</label>
                                <input className='form-control' type="text" id="questiontext" name="questiontext" onChange={handleChangeQuestion3} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="percentage">Porcentaje de esta pregunta sobre la nota final del examen:</label>
                                <input className='form-control' type="text" id="percentage" name="percentage" onChange={handleChangeQuestion3} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionA">Opción A:</label>
                                <input className='form-control' type="text" id="optionA" name="optionA" onChange={handleChangeQuestion3} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionB">Opción B:</label>
                                <input className='form-control' type="text" id="optionB" name="optionB" onChange={handleChangeQuestion3} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionC">Opción C:</label>
                                <input className='form-control' type="text" id="optionC" name="optionC" onChange={handleChangeQuestion3} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionD">Opción D:</label>
                                <input className='form-control' type="text" id="optionD" name="optionD" onChange={handleChangeQuestion3} />
                            </div>
                            <div>
                                <div className='form-group p-2'>
                                    <label>Elija la opción correcta:</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="optionA" name="correctOption" value="A" onChange={handleChangeQuestion3} />
                                    <label className="form-check-label" htmlFor="optionA">Opción A</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionB" name="correctOption" value="B" onChange={handleChangeQuestion3} />
                                    <label className="form-check-label" htmlFor="optionB">Opción B</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionC" name="correctOption" value="C" onChange={handleChangeQuestion3} />
                                    <label className="form-check-label" htmlFor="optionC">Opción C</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionD" name="correctOption" value="D" onChange={handleChangeQuestion3} />
                                    <label className="form-check-label" htmlFor="optionD">Opción D</label>
                                </div>
                            </div>
                        </div>  <br></br>
                        <div className="card w-50 m-auto border-primary" id="questionsubform">
                            <div className='form-group p-2'>
                                <h5>Pregunta #4</h5> <br></br>
                                <label htmlFor="questiontext">Ingrese la pregunta:</label>
                                <input className='form-control' type="text" id="questiontext" name="questiontext" onChange={handleChangeQuestion4} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="percentage">Porcentaje de esta pregunta sobre la nota final del examen:</label>
                                <input className='form-control' type="text" id="percentage" name="percentage" onChange={handleChangeQuestion4} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionA">Opción A:</label>
                                <input className='form-control' type="text" id="optionA" name="optionA" onChange={handleChangeQuestion4} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionB">Opción B:</label>
                                <input className='form-control' type="text" id="optionB" name="optionB" onChange={handleChangeQuestion4} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionC">Opción C:</label>
                                <input className='form-control' type="text" id="optionC" name="optionC" onChange={handleChangeQuestion4} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionD">Opción D:</label>
                                <input className='form-control' type="text" id="optionD" name="optionD" onChange={handleChangeQuestion4} />
                            </div>
                            <div>
                                <div className='form-group p-2'>
                                    <label>Elija la opción correcta:</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="optionA" name="correctOption" value="A" onChange={handleChangeQuestion4} />
                                    <label className="form-check-label" htmlFor="optionA">Opción A</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionB" name="correctOption" value="B" onChange={handleChangeQuestion4} />
                                    <label className="form-check-label" htmlFor="optionB">Opción B</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionC" name="correctOption" value="C" onChange={handleChangeQuestion4} />
                                    <label className="form-check-label" htmlFor="optionC">Opción C</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionD" name="correctOption" value="D" onChange={handleChangeQuestion4} />
                                    <label className="form-check-label" htmlFor="optionD">Opción D</label>
                                </div>
                            </div>
                        </div>  <br></br>
                        <div className="card w-50 m-auto border-primary" id="questionsubform">
                            <div className='form-group p-2'>
                                <h5>Pregunta #5</h5> <br></br>
                                <label htmlFor="questiontext">Ingrese la pregunta:</label>
                                <input className='form-control' type="text" id="questiontext" name="questiontext" onChange={handleChangeQuestion5} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="percentage">Porcentaje de esta pregunta sobre la nota final del examen:</label>
                                <input className='form-control' type="text" id="percentage" name="percentage" onChange={handleChangeQuestion5} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionA">Opción A:</label>
                                <input className='form-control' type="text" id="optionA" name="optionA" onChange={handleChangeQuestion5} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionB">Opción B:</label>
                                <input className='form-control' type="text" id="optionB" name="optionB" onChange={handleChangeQuestion5} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionC">Opción C:</label>
                                <input className='form-control' type="text" id="optionC" name="optionC" onChange={handleChangeQuestion5} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionD">Opción D:</label>
                                <input className='form-control' type="text" id="optionD" name="optionD" onChange={handleChangeQuestion5} />
                            </div>
                            <div>
                                <div className='form-group p-2'>
                                    <label>Elija la opción correcta:</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="optionA" name="correctOption" value="A" onChange={handleChangeQuestion5} />
                                    <label className="form-check-label" htmlFor="optionA">Opción A</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionB" name="correctOption" value="B" onChange={handleChangeQuestion5} />
                                    <label className="form-check-label" htmlFor="optionB">Opción B</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionC" name="correctOption" value="C" onChange={handleChangeQuestion5} />
                                    <label className="form-check-label" htmlFor="optionC">Opción C</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionD" name="correctOption" value="D" onChange={handleChangeQuestion5} />
                                    <label className="form-check-label" htmlFor="optionD">Opción D</label>
                                </div>
                            </div>
                        </div>  <br></br>
                        <div class="d-grid gap-2 col-6 mx-auto">
                            <button className="btn btn-primary" type='submit'>Terminar examen</button>
                        </div><br></br>
                    </form>
                </div>
            </main>
        </div>

    )
}
