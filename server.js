// console.log('Hi');
const express = require('express')
const app = express();

app.set('view engine', 'ejs')
app.use(logger)

app.get('/', (req, res) => {
  console.log('Here');
  // res.send('Hi')
  // res.sendStatus(500)
  // res.status(500).send('Hi')
  // res.status(500).json({message: 'Error'})
  // res.download('server.js')   // 直接会在客户端下载这个文件
  res.render('index', {text: "World"})
})

// app.get('/users', (req, res) => {
//   res.send('User List')
// })

// app.get('/users/new', (req, res) => {
//   res.send('User New Form')
// })

const userRouter = require('./routes/users');
app.use('/users', userRouter);
 
function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}


app.listen(3000);