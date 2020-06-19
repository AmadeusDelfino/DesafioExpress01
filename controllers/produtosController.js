const controller = {
    show: (request, response) => {
        response.send('Você está na tela do produto ' + request.params.nome_produto)
    },
    deletar: (request, response) => {
        response.send('Você está deletando o produto ' + request.params.nome_produto)
    }
}

module.exports = controller