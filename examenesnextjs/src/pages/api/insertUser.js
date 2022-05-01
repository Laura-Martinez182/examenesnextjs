import db1 from '../../util/database'

export default async function handler(req,res){
    let response =await db1.query('SELECT * FROM PERSON')
    console.log(response.rows)
    
    let db= response.rows;

    const {method , body} = req;
        if (method === "POST"){
            //console.log(req)
            
            var exit=false
            for (var i = 0; i < db.length && !exit; i++) {
                    if(db[i].code===body.code){
                        exit=true
                    }
            }

            if(!exit){

                if(body.pssword==body.confpw){
                    try {
                        db1.query('INSERT INTO PERSON VALUES($1,$2,$3,$4,$5)',[body.name,body.lastname, body.code,body.pssword,body.role])
            
                        
                    } catch (error) {
                        console.log(error)
                    }
                    res.status(200).json({ data: `inserted` })
                   
                }else{
                    res.status(200).json({ data: `repeat` })
                }

            }else{
                res.status(200).json({ data: `not inserted` })

            }

            
        }else{
            res.status(404)
        }
        

}