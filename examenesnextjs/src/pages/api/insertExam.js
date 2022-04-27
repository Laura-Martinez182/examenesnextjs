import db2 from '../../util/exams'

export default async function handler(req,res){
    const {method , body} = req;
        if (method === "POST"){
            console.log(req)
            db2.push({
                codeid: body.codeid,
                codeacc: body.codeacc,
                title: body.title,
                desc: body.desc,
                questions:body.questions
            })

            res.send({
                response: "hello world"
            });
        }else{
            res.status(404)
        }
        

}