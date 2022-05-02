import db1 from '../../util/database'

export default async function handler(req, res) {


    db1.query('DELETE FROM SELECTEDANSWERS')

    res.status(200).json({ data: `deleted` })


}