import Header from '../components/Header'
import styles from '../styles/Home.module.css'

var questions = [];

let exam = {
    codeid: "",
    codeacc: "",
    title: "",
    desc: ""
}

let question1 = {
    codeid:"",
    questiontext: "",
    percentage: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctOption: ""
}

let question2 = {
    codeid:"",
    questiontext: "",
    percentage: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctOption: ""
}

let question3 = {
    codeid:"",
    questiontext: "",
    percentage: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctOption: ""
}

let question4 = {
    codeid:"",
    questiontext: "",
    percentage: "",
    optionA: "",
    optionB: "",
    optionC: "",
    optionD: "",
    correctOption: ""
}

let question5 = {
    codeid:"",
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
        case "optionA1": question1.optionA = e.target.value; break;
        case "optionB1": question1.optionB = e.target.value; break;
        case "optionC1": question1.optionC = e.target.value; break;
        case "optionD1": question1.optionD = e.target.value; break;
        case "correctOption1": question1.correctOption = e.target.value
    }
}

let handleChangeQuestion2 = e => {
    switch (e.target.name) {
        case "questiontext": question2.questiontext = e.target.value; break;
        case "percentage": question2.percentage = e.target.value; break;
        case "optionA2": question2.optionA = e.target.value; break;
        case "optionB2": question2.optionB = e.target.value; break;
        case "optionC2": question2.optionC = e.target.value; break;
        case "optionD2": question2.optionD = e.target.value; break;
        case "correctOption2": question2.correctOption = e.target.value
    }
}

let handleChangeQuestion3 = e => {
    switch (e.target.name) {
        case "questiontext": question3.questiontext = e.target.value; break;
        case "percentage": question3.percentage = e.target.value; break;
        case "optionA3": question3.optionA = e.target.value; break;
        case "optionB3": question3.optionB = e.target.value; break;
        case "optionC3": question3.optionC = e.target.value; break;
        case "optionD3": question3.optionD = e.target.value; break;
        case "correctOption3": question3.correctOption = e.target.value
    }
}

let handleChangeQuestion4 = e => {
    switch (e.target.name) {
        case "questiontext": question4.questiontext = e.target.value; break;
        case "percentage": question4.percentage = e.target.value; break;
        case "optionA4": question4.optionA = e.target.value; break;
        case "optionB4": question4.optionB = e.target.value; break;
        case "optionC4": question4.optionC = e.target.value; break;
        case "optionD4": question4.optionD = e.target.value; break;
        case "correctOption4": question4.correctOption = e.target.value
    }
}

let handleChangeQuestion5 = e => {
    switch (e.target.name) {
        case "questiontext": question5.questiontext = e.target.value; break;
        case "percentage": question5.percentage = e.target.value; break;
        case "optionA5": question5.optionA = e.target.value; break;
        case "optionB5": question5.optionB = e.target.value; break;
        case "optionC5": question5.optionC = e.target.value; break;
        case "optionD5": question5.optionD = e.target.value; break;
        case "correctOption5": question5.correctOption = e.target.value
    }
}


let handleChangeExam = e => {
    switch (e.target.name) {
        case "codeid": exam.codeid = e.target.value; question1.codeid = e.target.value; question2.codeid = e.target.value; question3.codeid = e.target.value; question4.codeid = e.target.value; question5.codeid = e.target.value; break;
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

    let config1 = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(exam)
    }

    let config2 = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(questions)
    }

    let r1 = await fetch("http://localhost:3000/api/insertExam", config1)
    let r2 = await fetch("http://localhost:3000/api/insertQuestion", config2)
    console.log(r1);
    console.log(r2);
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
                        <div className="card w-50 m-auto border-primary" id="questionsubform1">
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
                                <label htmlFor="optionA1">Opción A:</label>
                                <input className='form-control' type="text" id="optionA1" name="optionA1" onChange={handleChangeQuestion1} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionB1">Opción B:</label>
                                <input className='form-control' type="text" id="optionB1" name="optionB1" onChange={handleChangeQuestion1} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionC1">Opción C:</label>
                                <input className='form-control' type="text" id="optionC1" name="optionC1" onChange={handleChangeQuestion1} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionD1">Opción D:</label>
                                <input className='form-control' type="text" id="optionD1" name="optionD1" onChange={handleChangeQuestion1} />
                            </div>
                            <div>
                                <div className='form-group p-2'>
                                    <label>Elija la opción correcta:</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="optionAR1" name="correctOption1" value="A" onChange={handleChangeQuestion1} />
                                    <label className="form-check-label" htmlFor="optionAR1">Opción A</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionBR1" name="correctOption1" value="B" onChange={handleChangeQuestion1} />
                                    <label className="form-check-label" htmlFor="optionBR1">Opción B</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionCR1" name="correctOption1" value="C" onChange={handleChangeQuestion1} />
                                    <label className="form-check-label" htmlFor="optionCR1">Opción C</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionDR1" name="correctOption1" value="D" onChange={handleChangeQuestion1} />
                                    <label className="form-check-label" htmlFor="optionDR1">Opción D</label>
                                </div>
                            </div>
                        </div>  <br></br>
                        <div className="card w-50 m-auto border-primary" id="questionsubform2">
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
                                <label htmlFor="optionA2">Opción A:</label>
                                <input className='form-control' type="text" id="optionA2" name="optionA2" onChange={handleChangeQuestion2} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionB2">Opción B:</label>
                                <input className='form-control' type="text" id="optionB2" name="optionB2" onChange={handleChangeQuestion2} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionC2">Opción C:</label>
                                <input className='form-control' type="text" id="optionC2" name="optionC2" onChange={handleChangeQuestion2} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionD2">Opción D:</label>
                                <input className='form-control' type="text" id="optionD2" name="optionD2" onChange={handleChangeQuestion2} />
                            </div>
                            <div>
                                <div className='form-group p-2'>
                                    <label>Elija la opción correcta:</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="optionAR2" name="correctOption2" value="A" onChange={handleChangeQuestion2} />
                                    <label className="form-check-label" htmlFor="optionAR2">Opción A</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionBR2" name="correctOption2" value="B" onChange={handleChangeQuestion2} />
                                    <label className="form-check-label" htmlFor="optionBR2">Opción B</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionCR2" name="correctOption2" value="C" onChange={handleChangeQuestion2} />
                                    <label className="form-check-label" htmlFor="optionCR2">Opción C</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionDR2" name="correctOption2" value="D" onChange={handleChangeQuestion2} />
                                    <label className="form-check-label" htmlFor="optionDR2">Opción D</label>
                                </div>
                            </div>
                        </div> <br></br>
                        <div className="card w-50 m-auto border-primary" id="questionsubform3">
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
                                <label htmlFor="optionA3">Opción A:</label>
                                <input className='form-control' type="text" id="optionA3" name="optionA3" onChange={handleChangeQuestion3} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionB3">Opción B:</label>
                                <input className='form-control' type="text" id="optionB3" name="optionB3" onChange={handleChangeQuestion3} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionC3">Opción C:</label>
                                <input className='form-control' type="text" id="optionC3" name="optionC3" onChange={handleChangeQuestion3} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionD3">Opción D:</label>
                                <input className='form-control' type="text" id="optionD3" name="optionD3" onChange={handleChangeQuestion3} />
                            </div>
                            <div>
                                <div className='form-group p-2'>
                                    <label>Elija la opción correcta:</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="optionAR3" name="correctOption3" value="A" onChange={handleChangeQuestion3} />
                                    <label className="form-check-label" htmlFor="optionAR3">Opción A</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionBR3" name="correctOption3" value="B" onChange={handleChangeQuestion3} />
                                    <label className="form-check-label" htmlFor="optionBR3">Opción B</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionCR3" name="correctOption3" value="C" onChange={handleChangeQuestion3} />
                                    <label className="form-check-label" htmlFor="optionCR3">Opción C</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionDR3" name="correctOption3" value="D" onChange={handleChangeQuestion3} />
                                    <label className="form-check-label" htmlFor="optionDR3">Opción D</label>
                                </div>
                            </div>
                        </div>  <br></br>
                        <div className="card w-50 m-auto border-primary" id="questionsubform4">
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
                                <label htmlFor="optionA4">Opción A:</label>
                                <input className='form-control' type="text" id="optionA4" name="optionA4" onChange={handleChangeQuestion4} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionB4">Opción B:</label>
                                <input className='form-control' type="text" id="optionB4" name="optionB4" onChange={handleChangeQuestion4} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionC4">Opción C:</label>
                                <input className='form-control' type="text" id="optionC4" name="optionC4" onChange={handleChangeQuestion4} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionD4">Opción D:</label>
                                <input className='form-control' type="text" id="optionD4" name="optionD4" onChange={handleChangeQuestion4} />
                            </div>
                            <div>
                                <div className='form-group p-2'>
                                    <label>Elija la opción correcta:</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="optionAR4" name="correctOption4" value="A" onChange={handleChangeQuestion4} />
                                    <label className="form-check-label" htmlFor="optionAR4">Opción A</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionBR4" name="correctOption4" value="B" onChange={handleChangeQuestion4} />
                                    <label className="form-check-label" htmlFor="optionBR4">Opción B</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionCR4" name="correctOption4" value="C" onChange={handleChangeQuestion4} />
                                    <label className="form-check-label" htmlFor="optionCR4">Opción C</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionDR4" name="correctOption4" value="D" onChange={handleChangeQuestion4} />
                                    <label className="form-check-label" htmlFor="optionDR4">Opción D</label>
                                </div>
                            </div>
                        </div>  <br></br>
                        <div className="card w-50 m-auto border-primary" id="questionsubform5">
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
                                <label htmlFor="optionA5">Opción A:</label>
                                <input className='form-control' type="text" id="optionA5" name="optionA5" onChange={handleChangeQuestion5} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionB5">Opción B:</label>
                                <input className='form-control' type="text" id="optionB5" name="optionB5" onChange={handleChangeQuestion5} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionC5">Opción C:</label>
                                <input className='form-control' type="text" id="optionC5" name="optionC5" onChange={handleChangeQuestion5} />
                            </div>
                            <div className='form-group p-2'>
                                <label htmlFor="optionD5">Opción D:</label>
                                <input className='form-control' type="text" id="optionD5" name="optionD5" onChange={handleChangeQuestion5} />
                            </div>
                            <div>
                                <div className='form-group p-2'>
                                    <label>Elija la opción correcta:</label>
                                </div>

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" id="optionAR5" name="correctOption5" value="A" onChange={handleChangeQuestion5} />
                                    <label className="form-check-label" htmlFor="optionAR5">Opción A</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionBR5" name="correctOption5" value="B" onChange={handleChangeQuestion5} />
                                    <label className="form-check-label" htmlFor="optionBR5">Opción B</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionCR5" name="correctOption5" value="C" onChange={handleChangeQuestion5} />
                                    <label className="form-check-label" htmlFor="optionCR5">Opción C</label>
                                </div>

                                <div className="form-check form-check-inline text-center">
                                    <input className="form-check-input" type="radio" id="optionDR5" name="correctOption5" value="D" onChange={handleChangeQuestion5} />
                                    <label className="form-check-label" htmlFor="optionDR5">Opción D</label>
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
