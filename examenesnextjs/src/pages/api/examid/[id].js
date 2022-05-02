import db1 from '../../../util/database'

export default async function handler(req, res) {
    let response = await db1.query('SELECT * FROM EXAM')
    console.log(response.rows)



    let db = response.rows;
        req.query.id;
        console.log(req.query.id)
        console.log("eeeeeeee")
        var exam;
            try {

                var exit=false
                for (var i = 0; i < db.length && !exit; i++) {
                    if (db[i].codeid ===  req.query.id) {
                        exam=db[i]
                        exit=true
                    }
                }

            } catch (error) {
                console.log(error)
            }
            console.log("pasa")
           console.log(exam)
           console.log(req.query.id)
           res.status(200).json(exam)
}