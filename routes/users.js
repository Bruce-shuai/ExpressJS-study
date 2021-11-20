// const express = require("express")
// const router = express.Router()


// router.get("/", (req, res) => {
//   res.send("这是User路径")
// })
// router.get("/new", (req, res) => {
//   res.send("这是User 下 的new路径")
// })

// router.route("/:id")
// .get((req, res) => {
//   console.log(req.user)
//   res.send(`Get User With ID ${req.params.id}`)
// })
// .post((req, res) => {
//   res.send(`Post User With ID ${req.params.id}`)
// })
// .put((req, res) => {
//   res.send(`Put User With ID ${req.params.id}`)
// })
// .delete((req, res) => {
//   res.send(`Delete User With ID ${req.params.id}`)
// })

// const users = [{name: '帅得乱七八糟'}, {name: '帅得歪瓜裂枣'}]
// router.param('id', (req, res, next, id) => {
//   req.user = users[id];
//   console.log(req.user);
//   next();
// })

// module.exports = router;   // 注意：这里是exports


const express = require("express")
const router = express.Router()


router.get("/", (req, res) => {
  res.send(req.query.food)
  // res.send("...")
})
const users = [{username: '帅得歪瓜裂枣'}, {username: '帅得一塌糊涂'}]


router.post('/', (req, res) => {
  const isValid = true;
  if(isValid) {
    users.push({firstName: req.body.username})
    res.redirect(`/users/${users.length - 1}`)
  } else {
    console.log('Error')
    res.render('users/user', {username: req.body.username})
  }
})

router.route("/:id")
.get((req, res) => {
  console.log(req.user)
  res.send(`Get User With ID ${req.params.id}`)
})
.post((req, res) => {
  res.send(`Post User With ID ${req.params.id}`)
})
.put((req, res) => {
  res.send(`Put User With ID ${req.params.id}`)
})
.delete((req, res) => {
  res.send(`Delete User With ID ${req.params.id}`)
})


// router.post("/new", (req, res) => {
//   res.render("users/new", {username: '帅得乱七八糟'})
// })
router.get("/new", (req, res) => {
  res.render("users/new", {username: '帅得乱七八糟'})
})
module.exports = router;   