const express = require('express')
const app = express()
const path = require('path')
app.get('/jsonp', (req, res) => {
  console.log(req.query)
  let _callback = req.query.callback;
  let data = {
    a: 12,
    b: 1421
  }
  res.send(`${_callback}(${JSON.stringify(data)})`)
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/server.html'))
})

app.listen(3001, () => {
  console.log('启动服务')
})
