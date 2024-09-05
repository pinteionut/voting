import { Users } from './../services/Users.js'

const users = new Users()

export const register = async(req, res) => {
  const body = req.body;
  const result = await users.getUserByUsername({username: body.username}) 
  console.log(result)
  if(result) {
    res.status(500)
    res.statusMessage = 'Username already exist'
    res.status(500).send()
  } else {
    users.addUser(body)
    res.status(200).send(JSON.stringify(body))
  }
}