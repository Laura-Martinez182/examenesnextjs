import db1 from '../../../util/database'

export default async function handler(req, res) {
    let response = await db1.query('SELECT * FROM EXAM')
    console.log(response.rows)



    let db = response.rows;

    //const { method, body } = req;
    
        
        //console.log(req)
        req.query.id;
        console.log(req.query.id)
        console.log("eeeeeeee")
        var exam;
            try {

                var exit=false
                for (var i = 0; i < db.length && !exit; i++) {
                    if (db[i].codeid ===  req.query.id) {
                        exam=db[i]
                        exit=true
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
           console.log(exam)
           console.log(req.query.id)
           res.status(200).json(exam)

       

    
}