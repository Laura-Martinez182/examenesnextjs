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
        //var questions = [];
        var exid=req.query.id.split("-")[0]
        var qid=req.query.id.split("-")[1]
        var question;
            try {

                var exit= false
                for (var i = 0; i < dt.length && !exit; i++) {
                    if (dt[i].examid ===  exid ) {
                        if(dt[i].questionid.charAt(0)==qid){
                            question=dt[i]
                            exit=true
                        }
                        
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

            if(exit){
                console.log("pasa")
                
                console.log(question)
                console.log(req.query.id)
                res.status(200).json(question)
            }else{
                console.log("no encuentra")
            }
            

       

    
}