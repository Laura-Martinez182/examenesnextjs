import temp from '../../../util/temp'

export default async function handler(req,res){
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
                temp[index]={
                    ansSelected: body.ansSel,
                    question: req.query.id
                }
            }else{
                temp.push({
                    ansSelected: body.ansSel,
                    question: req.query.id
                })
            }
            

            console.log(temp)
            res.status(200).json({ data: `saved` })
        }else{
            res.status(404)
        }
        

}