import db1 from '../../util/users'

export default async function (req,res){
    let response =await db1.query('SELECT * FROM PERSON')
    console.log(response.rows)
    res.json(response.rows)
}