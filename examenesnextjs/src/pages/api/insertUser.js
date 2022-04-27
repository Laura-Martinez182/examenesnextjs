import db1 from '../../util/users'

export default async function handler(req,res){
    const {method , body} = req;
        if (method === "POST"){
            console.log(req)
            db1.push({
                name: body.name,
                lastname: body.lastname,
                code: body.code,
                pssword:body.pssword,
                role: body.role
            })

            res.send({
                response: "hello world"
            });
        }else{
            res.status(404)
        }
        

}