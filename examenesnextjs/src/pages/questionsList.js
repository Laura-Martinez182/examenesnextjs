import Head from 'next/head'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'

export default async function questionsList({questions}) {
   
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
                <div className="card w-50 m-auto border-primary">
                    {questions.map(e => (
                        <div className="card bg-light mb-3 w-auto">
                            <div className="card text-center">
                                <div className="card-header">{e.codeid}</div>
                                <div className="card-body">
                                    <h5 className="card-title">{e.title}</h5>
                                    <p className="card-text">{e.description}</p>
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">{e.question}</h5>
                                    <small className="card-text">{e.percentage}</small>
                                    <input className="form-check-input" type="radio" id="optionA" >{e.optionA}</input>
                                    <input className="form-check-input" type="radio" id="optionA" >{e.optionB}</input>
                                    <input className="form-check-input" type="radio" id="optionA" >{e.optionC}</input>
                                    <input className="form-check-input" type="radio" id="optionA" >{e.optionD}</input>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

questionsList.getInitialProps = async () => {
    var pageURL = (window.location.href).split('#')[1];
    
    const res = await fetch('http://localhost:3000/api/questions/'+pageURL)
            const exam = await res.json()
            return {questions: exam }
}






