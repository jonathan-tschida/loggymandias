require('dotenv').config()
const path = require('path')
const server = require('fastify')()
const port = process.env.PORT || 3000

server.register(require('fastify-static'), {
  root: require('path').join(__dirname, '../client/dist')
})

server.get('/', (_, res) => {
  res.status(200).sendFile('index.html')
})

server.get('/api', (_, res) => {
  const message = 'Loggymandias'
  res.status(200).send({ message })
})

server.setNotFoundHandler((req, res) => {
  const prefix = req.params['*'].slice(0, 3)
  prefix === 'api' ? 
    res.status(404).send('Invalid API route') :
    res.sendFile('index.html')
})

server.listen(port)
  .then((address) => console.log(`server listening on ${address}`))
  .catch(err => {
    console.log('Error starting server:', err)
    process.exit(1)
  })