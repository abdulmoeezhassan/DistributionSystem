const express=require("express");
const bcrypt = require("bcryptjs"); 
const pool=require("../../models/model");


const router=express.Router();
router.use(express.json());

router.post('/', async (req, res) => {
  const { UserName, Password } = req.body;
  const HashedPassword = await bcrypt.hash(Password, 10);
  await pool.query('INSERT INTO Login (UserName, HashedPassword) VALUES ($1, $2)', [UserName, HashedPassword]);

  res.status(201).send('User registered successfully');
});

  module.exports=router;