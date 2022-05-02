import Head from 'next/head'
import Header from '../../components/Header'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

let answerSelected = {
    ansSel: ""
}

let urlPage = ""
let handleChange = e => {
    switch (e.target.name) {
        case "options": answerSelected.ansSel = e.target.value; break;

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
        body: JSON.stringify(answerSelected)
    }
    let r = await fetch("http://localhost:3000/api/saveQuestion/" + urlPage, config)


    console.log(e)

    if (urlPage.split("-")[2] != "4") {
        window.location.assign("http://localhost:3000/questions/" + urlPage.split("-")[0] + "-" + urlPage.split("-")[1] + "-" + (parseInt(urlPage.split("-")[2]) + 1))
    } else {

        let r = await fetch("http://localhost:3000/api/calculateGrade/" + urlPage)
        const result = await r.json()

        alert(`Nota: ${result.data}`)
        window.location.assign("http://localhost:3000/student/" + urlPage.split("-")[0])

    }

}

let handleSubmit1 = async e => {
    e.preventDefault();

    let config = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(answerSelected)
    }
    let r = await fetch("http://localhost:3000/api/saveQuestion/" + urlPage, config)

    console.log(e)

    if (urlPage.split("-")[2] != "0") {
        window.location.assign("http://localhost:3000/questions/" + urlPage.split("-")[0] + "-" + urlPage.split("-")[1] + "-" + (parseInt(urlPage.split("-")[2]) - 1))
    } else {
        alert(`No se puede devolver`)
    }
}


export default function questionsList({ questions, examvalues, aS }) {

    urlPage = useRouter().query.id
    console.log(aS.ansSelected)

    return (
        <div className={styles.container}>

            <Header title="Question List"></Header>
            <main className={styles.main}>

                <div className="card w-50 m-auto border-primary">
                    <div className="card text-center">
                        <h5 className="card-header">
                            Resolver examen
                        </h5>
                    </div>
                </div><br></br>
                <div className="card w-50 m-auto border-primary" >

                    <div className="card-header">{examvalues.codeid}</div>
                    <div className="card-body">
                        <h5 className="card-title">{examvalues.title}</h5>
                        <p className="card-text">{examvalues.description}</p>
                    </div>


                    <div className="card bg-light mb-3 w-auto">
                        <div className="card text-center">

                            <div className="card-body">
                                <h5 className="card-title">{questions.questiontext}</h5>
                                <small className="card-text">Porcentaje: {questions.percentage} %</small>

                                <form className='form  ' onSubmit={handleSubmit}>
                                    <div>
                                        <input className="form-check-input" type="radio" id="optionA" name="options" onChange={handleChange} value="a" defaultChecked={aS.ansSelected === "a"} required />
                                        <label className="form-check-label" htmlFor="optionA">{questions.optiona}</label>

                                    </div>

                                    <div>
                                        <input className="form-check-input" type="radio" id="optionB" name="options" onChange={handleChange} value="b" defaultChecked={aS.ansSelected === "b"} required />
                                        <label className="form-check-label" htmlFor="optionB">{questions.optionb}</label>

                                    </div>

                                    <div>
                                        <input className="form-check-input" type="radio" id="optionC" name="options" onChange={handleChange} value="c" defaultChecked={aS.ansSelected === "c"} required />
                                        <label className="form-check-label" htmlFor="optionC">{questions.optionc}</label>

                                    </div>

                                    <div>
                                        <input className="form-check-input" type="radio" id="optionD" name="options" onChange={handleChange} value="d" defaultChecked={aS.ansSelected === "d"} required />
                                        <label className="form-check-label" htmlFor="optionD">{questions.optiond}</label>

                                    </div>

                                    <div className='form-group p-2'>
                                        <button id="bt1" className="btn btn-primary" type='submit' name="action" value="back" onClick={handleSubmit1}>Anterior</button>
                                        <label>  &nbsp; </label>
                                        <button id="bt2" className="btn btn-primary" type='submit' name="action" value="next">Siguiente</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    )
}


questionsList.getInitialProps = async (context) => {
    var pageURL = context.asPath.split("/")[2];
    console.log(pageURL + "aaa")
    const res = await fetch("http://localhost:3000/api/questions/" + pageURL)
    const exam = await res.json()

    const res2 = await fetch("http://localhost:3000/api/examid/" + pageURL.split("-")[1])
    const exam2 = await res2.json()

    const res3 = await fetch("http://localhost:3000/api/selectedAnswer/" + pageURL)
    const exam3 = await res3.json()
    return { questions: exam, examvalues: exam2, aS: exam3 }
}
