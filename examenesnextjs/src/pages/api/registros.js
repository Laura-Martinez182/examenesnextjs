import db from '../../util/database'

export default function (req,res){
    res.json(db)
}