export default function handler(req, res) {
  
    const body = req.body
    
    console.log('body: ', body)
  
    if (!body.name || !body.lastname || !body.code || !body.pssword || !body.role) {

      return res.status(400).json({ data: 'Any of the data not found name not found' })
    }
  
    res.status(200).json({ data: `${body.name} ${body.lastname} ${body.code} ${body.pssword} ${body.role}` })
  }