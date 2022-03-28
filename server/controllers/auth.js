const express = require('express');
const router = express.Router();

// require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const User = require('../models/User');

router.post('/login', async (req, res)=>{
    const email = req.body.email
    try {
        const user  =  await User.findByEmail(email)
        console.log("This is printed by controllers/auth.js")
        console.log(user)
        if(!user){ throw new Error('No user with this email') }

      //   const cmp = await bcrypt.compare(password, user.password)
      //   if (cmp) {
      //       //   ..... further code to maintain authentication like jwt or sessions
            
      //       const token= jwt.sign({ user }, 'my_secret_key2')
      //       console.log(token)
      //       res.json({
      //         user: user,
      //         token: token,
      //         text: "Auth Successful"
      //       });
      //   }
         res.status(200).json(user)
      // }  else {
      //       throw new Error("Wrong password")
      // }
        
        
    } catch(err){
      console.log(err);
      res.status(401).json({ err });
    }
    
})


/*router.post('/register', async (req, res) => {
   try {
      const salt = await bcrypt.genSalt();
      const hashed = await bcrypt.hash(req.body.password, salt)
      await User.create({username: req.body.username, email: req.body.email, password: hashed})
      res.status(201).json({msg: 'User created'})
  } catch (err) {
      res.status(500).json({err});
  }
})*/

router.post('/register', async (req, res) => {
  try {
      const  email = req.body.email
      const  username = req.body.user
      const  password = req.body.password

      // check if the user already exists
      const checkuser = await User.findByEmail(email)
      if (checkuser) { res.status(400).send("Email already exists")}

      await User.create({email,username,password}, (err,user)=>{
        if(err) {
          res.json(err) 
        } else {
         res.status(201).json({msg: 'User created'})
        }
      })
    }
    catch(err){
      res.json(err)
    }
  
})





module.exports= router;
