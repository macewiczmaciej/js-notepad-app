const express = require('express')
const app = express()
// const config = require('./config') the same result as code below, not 'config.port' needed, just port is fine now.
const { port } = require('./config')

// routes
const apiRouter = require('./routes/api')

app.use('/', apiRouter)

//server
app.listen(port, function () {
	console.log('serwer słucha... http://localhost:' + port)
})
