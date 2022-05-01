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
            if (db[i].codeid===req.query.id && db[i].codeacc === body.accCode) {
                exit = true
            }
        }

        if (exit) {
            try {

                var questions = [];
                for (var i = 0; i < dt.length; i++) {
                    if (dt[i].examid ===  req.query.id) {
                        questions[i] = dt[i]
                    }
                }
                /*
                res.send({
                    response: "hello world"
                });
                */

            } catch (error) {
                console.log(error)
            }
            console.log("pasa")
           // let r = await fetch("http://localhost:3000/questionsList", questions)
           // res.json(r)
           res.status(200).json({ data: `correct` })

        } else {
            res.status(200).json({ data: `incorrect access code` })
            console.log("no pasa")
        }

    } else {
        res.status(404)
    }
}