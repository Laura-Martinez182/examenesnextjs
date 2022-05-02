import db1 from '../../../util/database'

export default async function handler(req, res) {
    let response = await db1.query('SELECT * FROM EXAM')
    console.log(response.rows)

    let response2 = await db1.query('SELECT * FROM QUESTION')
    console.log(response2.rows)


    let db = response.rows;
    let dt = response2.rows;

    const { method, body } = req;
    if (method === "POST") {
        console.log(req)

        var exit = false
        for (var i = 0; i < db.length && !exit; i++) {
            if (db[i].codeid === req.query.id.split("-")[1] && db[i].codeacc === body.accCode) {
                exit = true
            }
        }

        if (exit) {
            try {

                var questions = [];
                for (var i = 0; i < dt.length; i++) {
                    if (dt[i].examid === req.query.id.split("-")[1]) {
                        questions[i] = dt[i]
                    }
                }

            } catch (error) {
                console.log(error)
            }
            console.log("pasa")
            res.status(200).json({ data: `correct` })

        } else {
            res.status(200).json({ data: `incorrect access code` })
            console.log("no pasa")
        }

    } else {
        res.status(404)
    }
}