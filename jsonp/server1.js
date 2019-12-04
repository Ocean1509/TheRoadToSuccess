const express = require('express')
const app = express()
const cookie = require('cookie-parser');

const path = require('path')
app.use(cookie())
app.all('*', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  // res.header('Access-Control-Allow-Credentials', true);
  res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
});
app.get('/', (req, res) => {
  res.cookie('d', 'd')
  res.sendFile(path.join(__dirname, './client/index.html'))
})

app.get('/test', (req, res) => {
  console.log(req.cookies)
  res.send({
    a: 123
  })
})

app.listen(3002, () => {
  console.log('启动服务')
})