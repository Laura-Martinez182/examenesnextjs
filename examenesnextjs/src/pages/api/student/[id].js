export default function query(req, res){
    req.query.id;
    res.send(req.query.id);
}