const express = require('express')
const router = express.Router()
const validation = require('../validation/validation')

var banco = [];

router.get('/', (req, res) => res.json(banco))

router.get('/:index', (req, res) => {
    var index = parseInt(req.params.index)
    res.json(banco[index])
})

router.post('/',validation,(req, res) => {
    
    console.log(req.body)
    banco.push(req.body)
    res.json({ msg: true })
})

router.put('/:index',validation,(req, res) => {
    var index = parseInt(req.params.index)
    banco[index] = req.body
    res.json({ msg: true })
})

router.delete('/:index', (req, res) => {
    var index = parseInt(req.params.index);
    banco.splice(index, 1)
    res.json({ msg: true })
})

module.exports = router;