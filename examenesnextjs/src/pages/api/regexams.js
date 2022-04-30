import db2 from '../../util/database'

export default async function (req,res){
    let response =await db2.query('SELECT * FROM EXAM')
    console.log(response.rows)
    res.json(response.rows)
}