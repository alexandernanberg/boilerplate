const path = require('path')
const express = require('express')
const compression = require('compression')

const app = express()
const port = process.env.PORT || 3000

app.use(express.static(path.resolve(__dirname, 'public')))
app.use(compression())
app.use((req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')))

app.listen(port)

console.log(`> Ready on http://localhost:${port}`)
