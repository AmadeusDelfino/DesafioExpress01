const express = require('express')
const router = express.Router()
const produtoController = require('../controllers/produtosController')

router.get('/', (request, response) => {
    response.end('Você está na tela de produtos!')
})

router.get('/:nome_produto', produtoController.show)

router.delete('/:nome_produto', produtoController.deletar)

module.exports = router