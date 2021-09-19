const express = require('express')
const router = express.Router()
const validation = require('../validation/validation')
const bcrypt = require('bcrypt')

var banco = [];

router.get('/', (req, res) => res.json(banco))

router.get('/:index', (req, res) => {
    var index = parseInt(req.params.index)
    res.json(banco[index])
})

router.post('/', validation, async (req, res) => {

    var { username, password } = req.body
    await bcrypt.hash(password.toString(), 10, (err, hash) => {
        if (err) console.log(err)

        var dados = {
            username: username,
            password: hash
        }

        banco.push(dados)
    })
    res.json({ msg: true })
})

router.put('/:index', validation,async(req, res) => {
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
})

router.delete('/:index', (req, res) => {
    var index = parseInt(req.params.index);
    banco.splice(index, 1)
    res.json({ msg: true })
})

module.exports = router;