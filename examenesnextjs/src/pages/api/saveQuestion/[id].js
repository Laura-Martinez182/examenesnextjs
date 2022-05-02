import db1 from '../../../util/database'

export default async function handler(req,res){

    let response = await db1.query('SELECT * FROM SELECTEDANSWERS')

    let temp= response.rows

    const {method , body} = req;
        if (method === "POST"){
           
            var exit=false
            var index;
            for (var i = 0; i < temp.length && !exit; i++) {
                    if(temp[i].question===req.query.id){
                        exit=true
                        index=i
                    }
            }
            if(exit){
                
                db1.query('UPDATE SELECTEDANSWERS SET ansselected=$1 WHERE question=$2',[body.ansSel,req.query.id])
            

            }else{
                db1.query('INSERT INTO SELECTEDANSWERS VALUES($1,$2)',[body.ansSel,req.query.id])
            
                
            }
            

            console.log(temp)
            res.status(200).json({ data: `saved` })
        }else{
            res.status(404)
        }
        

}