const bcrypt = require('bcrypt')
var banco = [];

class Controller{

    index  = (req,res)=>{
        res.json(banco)
    }

    //***************************************************************** */
    
    pesquisa =  (req, res) => {
        var index = parseInt(req.params.index)
        res.json(banco[index])
    }

    //***************************************************************** */

    salvar =  async (req, res) => {

        var { username, password } = req.body
        await bcrypt.hash(password.toString(), 10, async (err, hash) => {
            if (err) console.log(err)
    
            var dados = {
                username: username,
                password: hash
            }
    
            await banco.push(dados)
            res.json({ msg: true })
        })
    }

    //***************************************************************** */

    editar = async(req, res) => {
        var index = parseInt(req.params.index)
        var { username, password } = req.body
        await bcrypt.hash(password.toString(), 10, (err, hash) => {
            if (err) console.log(err)
    
            var dados = {
                username: username,
                password: hash
            }
    
            banco[index] = dados
        })
        
        res.json({ msg: true })
    }

    //***************************************************************** */

    deletar =  (req, res) => {
        var index = parseInt(req.params.index);
        banco.splice(index, 1)
        res.json({ msg: true })
    }


}


module.exports = new Controller()