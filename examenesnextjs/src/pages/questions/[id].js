import Head from 'next/head'
import Header from '../../components/Header'
import styles from '../../styles/Home.module.css'
import {useRouter} from 'next/router'

//let questions=[];
//let pageURL ="";
export default  function questionsList({questions, examvalues}) {
    
     //pageURL = useRouter().query.id;
    

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

                    <div className="card-header">{useRouter().query.id}</div>
                    <div className="card-body">
                        <h5 className="card-title">{examvalues.title}</h5>
                        <p className="card-text">{examvalues.description}</p>
                    </div>
                 
                    {questions.map(e => (
                        <div className="card bg-light mb-3 w-auto">
                            <div className="card text-center">
                                
                                <div className="card-body">
                                    <h5 className="card-title">{e.questiontext}</h5>
                                    <small className="card-text">Porcentaje: {e.percentage} %</small>
                                    <div>
                                        <input className="form-check-input" type="radio" id="optionA" name={"options"+e.questionid}/>
                                        <label className="form-check-label" htmlFor="optionA">{e.optiona}</label>

                                    </div>
                                    
                                    <div>
                                        <input className="form-check-input" type="radio" id="optionB" name={"options"+e.questionid}/>
                                        <label className="form-check-label" htmlFor="optionB">{e.optionb}</label>

                                    </div>
                                    
                                    <div>
                                        <input className="form-check-input" type="radio" id="optionC" name={"options"+e.questionid}/>
                                        <label className="form-check-label" htmlFor="optionC">{e.optionc}</label>

                                    </div>
                                   
                                    <div>
                                        <input className="form-check-input" type="radio" id="optionD" name={"options"+e.questionid}/>
                                        <label className="form-check-label" htmlFor="optionD">{e.optiond}</label>

                                    </div>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    )
}

/*
questionsList.getInitialProps = async () => {
    var pageURL = useRouter().query.id;
    
    const res = await fetch('http://localhost:3000/api/questions/'+pageURL)
            const exam = await res.json()
            return {questions: exam }
}
*/

/*
async function loadQuestions(qid) {
   if(qid){
    const res = await fetch('http://localhost:3000/api/questions/'+qid)
     questions = await res.json()
   }
}
*/

questionsList.getInitialProps = async (context) => {
    var pageURL = context.asPath.split("/")[2];
    console.log(pageURL+"aaa")
    const res = await fetch("http://localhost:3000/api/questions/"+pageURL)
    const exam = await res.json()

    const res2 = await fetch("http://localhost:3000/api/examid/"+pageURL)
    const exam2 = await res2.json()
            return {questions: exam, examvalues:exam2 }
}
