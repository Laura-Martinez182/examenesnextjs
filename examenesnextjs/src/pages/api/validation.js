import db1 from '../../util/database'

export default async function handler(req,res){
    let response =await db1.query('SELECT * FROM PERSON')
    console.log(response.rows)
    
    let db= response.rows;

    const {method , body} = req;

        var exit=false
        for (var i = 0; i < db.length && !exit; i++) {
                if(db[i].code===body.code && db[i].pssword===body.pssword){
                    exit=true
                }
         }
        if (method === "POST"){
            //console.log(req)

            
            //const user=db.filter(x=> x.code==body.code && x.pssword==body.pssword);
            /*
            if(user){
                return res.status(200).json({ userr: `${body.code}` })
            } else{
                 res.status(400).json({ userr: 'First or last name not found' })
            }
            */
           if(exit){
           /* res.send({
                response: "found"
            });
            */
            res.status(200).json({ data: `found` })
            console.log("worked")
           }else{
           /* res.send({
                response: "not found"
            });
            */
            res.status(200).json({ data: `not found` })
            console.log("not worked")
           }
        }
            
       
        

}