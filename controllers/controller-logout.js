import usermodel from '../schema/user-Db.js'
import { compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import jwtmodel from '../schema/jwt.-Db.js'

const controllerlogout=async(req,res)=>{

    const {_id}=req

    const user = await jwtmodel.findOne({userId:_id}).exec() 
    
    if (!user) return res.status(404).end()

    user.status=false

    user.save()

    res.json({message:'User Logout'})
    res.end()
}



export default controllerlogout