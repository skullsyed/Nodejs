const express = require('express');
const { users } = require('../data');

const router = express.Router(); 

router.get('/', (req, res)=>{
res.send({users:users});
});
router.post('/name', (req, res)=>{
res.send({message:`hello wold ${req.body.name}`});
});

//using params to get the data 

router.get('/user/:userId', (req, res)=>{
console.log("Req params :",req.params);

const usersId = parseInt(req.params.userId);
console.log(usersId);
const userFound = users.filter  (user => user.id === usersId);
res.send({
    user:userFound

});
});

router.post('/user', (req, res)=>{
    
    const newUser = req.body;

    const result = [...users ,newUser];
console.log(result);

res.send({users:result});
});

router.put('/user/:userId', (req, res)=>{
// const updateUser = req.body;
const parseId =  parseInt(req.params.userId);
const findUser = users.find(user => user.id == parseId);
console.log(findUser);
 const result = {...findUser,...req.body};

 res.send({user:result});


});

module.exports = router;