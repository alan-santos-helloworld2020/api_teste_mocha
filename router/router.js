const express = require('express')
const router = express.Router()
const validation = require('../validation/validation')
const token = require('../token/token')
const ctl = require('../controller/controller')


router.post('/login',validation,token.gerarToken)

router.get('/',token.verificarToken,ctl.index)

router.get('/:index',token.verificarToken,ctl.pesquisa)

router.post('/', validation,token.verificarToken,ctl.salvar)

router.put('/:index', validation,token.verificarToken,ctl.editar)

router.delete('/:index',token.verificarToken,ctl.deletar)

module.exports = router;