import temp from '../../../util/temp'

export default async function handler(req,res){
   

    const {method , body} = req;

        var exit=false
        var answ;
        for (var i = 0; i < temp.length && !exit; i++) {
                if(temp[i].question===req.query.id ){
                    exit=true
                    answ=temp[i];
                }
         }
       
           
           if(exit){
           
            res.status(200).json( answ)
            console.log("worked")
            console.log(answ)
           }else{
           
            res.status(200).json({ ansSelected: `e` })
            console.log("not worked")
           }
        
            
       
        

}