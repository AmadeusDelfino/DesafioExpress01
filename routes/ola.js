const express = require('express')
const router = express.Router()

router.get('/', (request, response) => {
    response.end('Você está em saudação!')
})

router.get('/ola/:nome', (request, response) => {
    let nome = request.params.nome
    response.end('Olá, ' + nome)
})

router.get('/boa-noite/:nome?', (request, response) => {
    let nome = request.params.nome || 'alunos'
    response.end('Boa noite, ' + nome)
})

module.exports = router
