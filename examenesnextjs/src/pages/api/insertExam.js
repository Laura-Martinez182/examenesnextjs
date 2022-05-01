import db1 from '../../util/database'

export default async function handler(req, res) {
    let response = await db1.query('SELECT * FROM EXAM')
    console.log(response.rows)

    let db = response.rows;

    const { method, body } = req;
    if (method === "POST") {
        console.log(req)

        var exit = false
        for (var i = 0; i < db.length && !exit; i++) {
            if (db[i].codeid === body.codeid) {
                exit = true
            }
        }

        if (exit===false) {
            try {
                db1.query('INSERT INTO EXAM VALUES($1,$2,$3,$4)', [body.codeid, body.codeacc, body.title, body.desc])
                res.send({
                    response: "hello world"
                });
            } catch (error) {
                console.log(error)
            }
            res.status(200).json({ data: `inserted` })
        } else {
            res.status(200).json({ data: `not inserted` })
        }


    } else {
        res.status(404)
    }


}