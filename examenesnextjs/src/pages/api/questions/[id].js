import db1 from '../../../util/database'

export default async function handler(req, res) {
    let response = await db1.query('SELECT * FROM EXAM')
    console.log(response.rows)

    let response2 = await db1.query('SELECT * FROM QUESTION')
    console.log(response2.rows)


    let db = response.rows;
    let dt = response2.rows;

    //const { method, body } = req;
    
        
        //console.log(req)
        req.query.id;
        console.log(req.query.id)
        console.log("eeeeeeee")
        var questions = [];
            try {

                
                for (var i = 0; i < dt.length; i++) {
                    if (dt[i].examid ===  req.query.id) {
                        questions.push(dt[i])
                    }
                }
                /*
                res.send({
                    response: "hello world"
                });
                */

            } catch (error) {
                console.log(error)
            }
            console.log("pasa")
           // let r = await fetch("http://localhost:3000/questionsList", questions)
           // res.json(r)
           console.log(questions)
           console.log(req.query.id)
           res.status(200).json(questions)

       

    
}