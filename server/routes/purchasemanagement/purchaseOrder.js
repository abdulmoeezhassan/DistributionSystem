const express=require('express');
const pool=require("../../models/model");

const router =express.Router();

router.use(express.json());

router.get('/',async(req,res)=>{
    try{
      const get_PurchaseOrder=await pool.query('SELECT * FROM Purchase_Order WHERE is_deleted=false');
      if(!get_PurchaseOrder){
        res.json([]);
        console.log("No Purchase Order to show");
      }
      else{
      res.json(get_PurchaseOrder.rows);
      }
    }
    catch(error){
        console.log(error);
    }
});

router.post('/',async(req,res)=>{
    try{
        const { Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status } = req.body;
        const Post_Purchase_Invoice=await pool.query('INSERT INTO Purchase_Order  (Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status]);
        if(Post_Purchase_Invoice){
            console.log("Purchase Order created Successfully");
            res.json(Post_Purchase_Invoice.rows[0]);
        }
        else{
        console.log("Error in Creating Purchase Invoice");
        }
    
    }
    catch(error){
        console.log(error);
    }
});

router.put('/',async(req,res)=>{
    const{id}=req.params;
    const { Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status } = req.body;
     try{
     const Put_Purchase_Order=await pool.query('UPDATE Purchase_Order SET Document_No=$1, DATE=$2, BASE=$3, BASE_REF_NO=$4, Customer=$5, Net_Amount=$6, Entry_User=$7, Entry_Date=$8, Status=$9 WHERE id=$10 AND is_deleted=false',
     [Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status, id]);
     if(Put_Purchase_Order){
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
    const {id}=req.params;
    try{
        const delete_Inovice=await pool.query('Update Purchase_Order  SET is_deleted=true Where id=$1 AND \"is_deleted\"=false',[id]);
        if(delete_Inovice){
            console.log("Invoice deleted successfully");
        }
        else{
            res.json("Error in deleting Invoice");
            res.json(error);
        }
    }
    catch(error){
        console.log(error);
     
    }
});


module.exports=router;