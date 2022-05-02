import db1 from '../../util/database'

export default async function handler(req, res) {
    let response = await db1.query('SELECT * FROM PERSON')
    console.log(response.rows)

    let db = response.rows;

    const { method, body } = req;

    var exit = false
    for (var i = 0; i < db.length && !exit; i++) {
        if (db[i].code === body.code && db[i].pssword === body.pssword) {
            exit = true
        }
    }
    if (method === "POST") {
        if (exit) {
            res.status(200).json({ data: `found` })
            console.log("worked")
        } else {
            res.status(200).json({ data: `not found` })
            console.log("not worked")
        }
    }

}