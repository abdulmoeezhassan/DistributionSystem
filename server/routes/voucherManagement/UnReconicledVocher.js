const express=require('express');
const pool = require('../../models/model');
const router=express.Router();

router.use(express.json());

router.get('/',async(req,res)=>{
    try{
      const getvocher=await pool.query('SELECT * FROM un_reconciled_voucher WHERE is_deleted=false');
      if(getvocher.rows.length===0){
        console.log("No Vouchers to show");
        res.json([]);
      }
      else{
        res.json(getvocher.rows);
      }
    }
    catch(error){
        console.log(error);
    }
});

router.post('/',async(req,res)=>{
    const {  Document_No ,Date , type , title,Amount }=req.body;
    try{
      const postvoucher=await pool.query('INSERT INTO un_reconciled_voucher ( Document_No ,Date , type , title,Amount) VALUES ($1,$2,$3,$4,$5) RETURNING *',[ Document_No ,Date , type , title,Amount]);
      if(postvoucher){
        console.log("New Vocher Inserted successfully");
        res.json(postvoucher.rows[0]);
      }
      else{
        console.log("Error in Creating a new Invoice");
      }
    }
    catch(error){
        console.log(error);
    }
});

router.put('/',async(req,res)=>{
    const{id}=req.params;
    const {  Document_No ,Date , type , title,Amount }=req.body;
    try{
   const updatevoucher=await pool.query('UPDATE un_reconciled_voucher SET Document_No =$1,Date=42 , type=$3 , title=$4,Amount=$5 WHERE id=$6 AND is_deleted=false',[ Document_No ,Date , type , title,Amount]);
   if(updatevoucher){
    console.log("Invoice Updated Successfully");
   }
   else{
    console.log("Error in updating Invoice");
   }

    }
    catch(error){
        console.log(error);
    }
    
});

router.delete('/',async(req,res)=>{
    const{id}=req.params;
    try{
      const deletevoucher=await pool.query('UPDATE un_reconciled_voucher SET is_deleted=true Where id=$1 AND \"is_deleted\"=false',[id]);
      if(deletevoucher){
        console.log("Voucher deleted Successfully");
      }
      else{
        console.log("Error in deleting voucher")
      }
    }
    catch(error){
        console.log(error);
    }
});

module.exports=router;