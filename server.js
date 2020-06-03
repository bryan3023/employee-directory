const
  path = require('path'),
  express = require('express')

const
  app = express(),
  publicPath = path.join(__dirname, 'public'),
  buildPath = path.join(__dirname, 'build'),
  port = process.env.PORT || 3000

// app.use(express.static(publicPath))
app.use(express.static(buildPath))

app.get('*', (req, res) => {
   res.sendFile(path.join(buildPath, 'index.html'))
})

app.listen(port, () => {
   console.log('Server is up!')
})
