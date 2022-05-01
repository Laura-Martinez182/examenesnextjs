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
            if (db[i].codeid === body.codeid) {
                exit = true
            }
        }

        var test = false
        var sum = 0
        for (var i = 0; i < body.questions.length; i++) {
            sum += body.questions[i].percentage
        }

        if (sum > 100) {
            test = true
        }

        if (!exit && !test) {
            try {
                let response = await db2.query('INSERT INTO EXAM VALUES($1,$2,$3,$4)', [body.codeid, body.codeacc, body.title, body.desc])
                for (let i = 0; i < body.questions.length; i++) {
                    let response2 = await db2.query('INSERT INTO QUESTION VALUES($1,$2,$3,$4,$5,$6,$7,$8)', [body.questions[i].questiontext, body.questions[i].percentage, body.questions[i].optionA, body.questions[i].optionB, body.questions[i].optionC, body.questions[i].optionD, body.questions[i].correctOption])
                }
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