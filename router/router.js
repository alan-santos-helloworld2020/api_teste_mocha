const express = require('express')
const router = express.Router()
const validation = require('../validation/validation')
const ctl = require('../controller/controller')


router.get('/',ctl.index)

router.get('/:index',ctl.pesquisa)

router.post('/', validation,ctl.salvar)

router.put('/:index', validation,ctl.editar)

router.delete('/:index',ctl.deletar)

module.exports = router;