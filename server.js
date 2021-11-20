/* server.js */
const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.get('/',logger, (req, res) => {  // 我想作用于 '/' 路由
  res.render('index',{text: 'World'})
})

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true}))

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl)
  next();
}

app.listen(3004);