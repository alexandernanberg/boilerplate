const { resolve } = require('path')
const express = require('express')
const compression = require('compression')

const server = express()
const port = process.env.PORT || 3000

server.use(compression())

server.use(express.static(
  resolve('public'),
  {
    maxAge: '7d',
    setHeaders: (res, filePath) => {
      if (filePath.match(/(sw.js|index.html)$/)) {
        res.setHeader('Cache-Control', 'public, max-age=0')
      }
    },
  },
))

server.use((req, res) => res.sendFile(resolve('public', 'index.html')))

server.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`)
})
