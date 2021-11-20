const express = require('express');
const router = express.Router(); 

router.get('/', (req, res) => {
  res.send('User List')
})

router.get('/new', (req, res) => {
  res.send('User New Form')
})

router.post('/', (req, res) => {
  res.send('Create User');
})

// router.get('/:id', (req, res) => {  // 不要自己手写1、2、3...而应该用id变量来代替
//   // req.params.id   
//   res.send(`Get User With ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {  // 不要自己手写1、2、3...而应该用id变量来代替
//   // req.params.id   
//   res.send(`Get User With ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {  // 不要自己手写1、2、3...而应该用id变量来代替
//   // req.params.id   
//   res.send(`Get User With ID ${req.params.id}`)
// })

router
  .route('/:id')
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User With ID ${req.params.id}`)
  })
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`)
  })
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`)
  })

const users = [{name: '帅得乱七八糟'}, {name: '帅得歪瓜裂枣'}]
router.param('id', (req, res, next, id) => {
  // console.log(id);
  req.user = users[id]
  next();
})

module.exports = router;