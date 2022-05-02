
import db1 from '../../../util/database'

export default async function handler(req, res) {
   
   

    let response = await db1.query('SELECT * FROM QUESTION')
    console.log(response.rows)
    let response2 = await db1.query('SELECT * FROM SELECTEDANSWERS')

    let db = response.rows;
    let temp= response2.rows

    const {method , body} = req;
        
            var grade=0;
            for (var i = 0; i < temp.length; i++) {
                for (var j = 0; j < db.length; j++) {
                    
                    
                    if(temp[i].question.split("-")[0]===req.query.id.split("-")[0]){
                        if(temp[i].question.split("-")[1]===req.query.id.split("-")[1]){
                            if(temp[i].question.split("-")[1]===db[j].questionid.split("-")[1]){
                                
                                if(temp[i].question.split("-")[2]===db[j].questionid.split("-")[0]){
                                    
                                    if(temp[i].ansselected===db[j].correctoption){
                                        
                                        grade++;
                                    }
                                }
                            }
                        }
                    }
                }
                    
            }
            
            

            console.log(grade)
            res.status(200).json({ data: grade })
            
        

}