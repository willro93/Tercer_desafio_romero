let lista = require('./main');

const express = require('express');

const app = express();

app.listen(8080, () => console.log('Server Up'))

app.get('/product/:pid', (request, response) => {
    const { id, title } = request.params
    const product = lista.find(item => item.id === id)
    if (!product) response.send({ error: "User not found", params: title  })
    else response.send({ product: product.title, params: title })
})
