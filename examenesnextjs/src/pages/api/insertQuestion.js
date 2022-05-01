import db1 from '../../util/database'

export default async function handler(req, res) {

    let response = await db1.query('SELECT * FROM QUESTION')
    console.log(response.rows)

    const { method, body } = req;
    if (method === "POST") {
        console.log(req)

        var test = false
        var sum = 0
        var num =""
        for (var i = 0; i < body[i].length; i++) {
            num = body[i].percentage.toString()
            sum += parseInt(num)
            console.log(sum)
            console.log("aaaaaaaaaaaa")
        }
        
        if (sum<100 || sum>100) {
            test = true
        }

       if (test===false) {
            try {
                console.log(body.questions)
                for (let i = 0; i < body.length; i++) {
                    console.log(body[i].questiontext)
                    db1.query('INSERT INTO QUESTION VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9)', [(i+"-"+body[i].codeid), body[i].codeid, body[i].questiontext, body[i].percentage, body[i].optionA, body[i].optionB, body[i].optionC, body[i].optionD, body[i].correctOption])
                }
                res.status(200).json({ data: `inserted` })
            } catch (error) {
                console.log(error)
            }
            
        } else {
            res.status(200).json({ data: `not inserted` })
        }


    } else {
        res.status(404)
    }


}