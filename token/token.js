const jwt = require('jsonwebtoken')
const dotenv = require('dotenv').config()

class Token{


    gerarToken= async (req,res)=>{
        var {username,password} = req.body
        if(username === "admin" && password === "123"){

            await jwt.sign({username,password},process.env.ACESS_KEY,{expiresIn:'1h'},(err,token)=>{

                if(err) return res.json({msg:err})
                return res.status(200).json({msg:true,token:token})
            })
        }else{
            return res.status(500).json({msg:false})
        }
    }

    verificarToken= async (req,res,next)=>{
        var token = req.headers.authorization.split(' ')[1]
        try {
            
            await jwt.verify(token,process.env.ACESS_KEY,(err,decode)=>{
                if(err) return res.json({msg:err})
                
                req.username = decode
                next()
                
            })
        } catch (error) {
            
            return res.json({msg:false,erro:error})
        }
    }
}

module.exports = new Token()