import db2 from '../../util/database'

export default async function handler(req, res) {
    let response = await db2.query('SELECT * FROM EXAM')
    console.log(response.rows)

    let response2 = await db2.query('SELECT * FROM QUESTION')
    console.log(response2.rows)


    let db = response.rows;
    let dt = response2.rows;

    const { method, body } = req;
    if (method === "POST") {
        console.log(req)

        var exit = false
        for (var i = 0; i < db.length && !exit; i++) {
            if (db[i].codeacc === body.code.accCode) {
                exit = true
            }
        }

        if (!exit) {
            try {
             
                var questions = [];
                for (var i = 0; i < dt.length && !stop; i++) {
                    if (dt[i].examid === body.code.examid) {
                        questions[i]=dt[i]
                    }
                }
                res.send({
                    response: "hello world"
                });

            } catch (error) {
                console.log(error)
            }

            let r = await fetch("http://localhost:3000/questionsList", questions)
            res.json(r)

        } else {
            res.status(200).json({ data: `incorrect access code` })
        }


    } else {
        res.status(404)
    }


}