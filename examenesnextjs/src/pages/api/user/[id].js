import db1 from '../../../util/database'

export default async function query(req, res){
    req.query.id;
    let response =await db1.query('SELECT * FROM PERSON')
    console.log(response.rows)
    
    let db= response.rows;

    const {method , body} = req;
    if (method === "POST"){
        var exit=false
        var role=""
        for (var i = 0; i < db.length && !exit; i++) {
                if(db[i].code===req.query.id){
                    exit=true
                    role=db[i].role
                }
         }

         if(exit){
        
            if(role=="student"){
                res.status(200).json({ data: `student` })
            }else if(role=="teacher"){
                res.status(200).json({ data: `teacher` })
            }
            
            console.log("worked")
        }else{
            res.status(200).json({ data: `not found` })
            console.log("not worked")
        }
    }

}