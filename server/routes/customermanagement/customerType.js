const express=require('express');
const pool=require('../..//models/model');

const router=express.Router();
router.use(express.json());

router.get('/',async(req,res)=>{
    try{
      const getCustomerType=await pool.query('SELECT * FROM CustomerType WHERE is_deleted=false');
      if(getCustomerType.rows.length===0){
        console.log("Nothing to show");
        res.json([]);
      }
      else{
        res.json(getCustomerType.rows);
      }
    }
    catch(error){
        console.log(error);
    }
});

router.get('/:id',async(req,res)=>{
  try{
    const getCustomerType=await pool.query('SELECT * FROM CustomerType WHERE is_deleted=false');
    if(getCustomerType.rows.length===0){
      console.log("Nothing to show");
      res.json([]);
    }
    else{
      res.json(getCustomerType.rows);
    }
  }
  catch(error){
      console.log(error);
  }
});


router.post('/',async(req,res)=>{
    const {Description,Entry_Date}=req.body;
    try{
      const postCustomerType=await pool.query('INSERT INTO CustomerType (Description,Entry_Date) VALUES ($1,$2) RETURNING *',[Description,Entry_Date]);
      if(postCustomerType){
        console.log("Data Inserted Successfully");
        res.json(postCustomerType.rows[0]);
      }
      else{
       console.log("Error in Inserting Data");
      }
    }
    catch(error){
        console.log(error);
    }
});

router.put('/:id',async(req,res)=>{
   const {id}=req.params;
   const {Description,Entry_Date}=req.body;
   try{
   const putCustomerType=await pool.query("UPDATE CustomerType SET Description=$1,Entry_Date=$2 WHERE id=$3",[Description,Entry_Date,id]);
   if(putCustomerType){
   res.json("Data Updated successfully");
   }
   else{
    console.log("Error in Updating Data");
    res.json(error);
   }
   }
   catch(error){
    console.log(error);
   }
});

router.delete('/:id',async(req,res)=>{
    const{id}=req.params;
    try{
    const deleteCustomerType=await pool.query("UPDATE CustomerType SET is_deleted=true WHERE id=$1 AND \"is_deleted\"=false",[id]);
    if(deleteCustomerType){
    res.send("Data Deleted Successfully");
    }
    else{
        res.send("Error in deleting Data");
    }
    }
    catch(error){
        console.log(error);
    }
});

module.exports=router;