const express = require('express');
const pool = require("../../models/model");

const router = express.Router();

router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const get_Journal_voucher = await pool.query('SELECT * FROM Journal_Voucher WHERE is_deleted=false');
        if (get_Journal_voucher.rows.length === 0) {
            res.json([]);
            console.log("No Journal Voucher to show");
        }
        else {
            console.log("Journal Vouchers fetched Successfully");
            res.json(get_Journal_voucher.rows);

        }
    }
    catch (error) {
        console.log(error);
    }
});

router.post('/',async(req,res)=>{
    const { Document_No, DATE,title,type,currency,total_amount, Entry_User, Entry_Date} = req.body;
    try{
        const post_Journal_voucher=await pool.query('INSERT INTO Journal_Voucher ( Document_No, DATE,title,type,currency,total_amount, Entry_User, Entry_Date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',[Document_No, DATE,title,type,currency,total_amount, Entry_User, Entry_Date]);
        if(post_Journal_voucher){
            console.log("Journal Voucher created Successfully");
            res.json(post_Journal_voucher.rows[0]);
        }
        else{
            console.log("Error in Creating Journal Voucher");
            res.json(error);
        }
    }
    catch(error){
        console.log(error);
    }
});

router.put('/:id',async(req,res)=>{
    const{id}=req.params;
    const { Document_No, DATE,title,type,currency,total_amount, Entry_User, Entry_Date} = req.body;
    try{
    const update_Journal_Voucher=await pool.query('Update Journal_Voucher SET Document_No=$1, DATE=$2,title=$3,type=$4,currency=$5,total_amount=$6, Entry_User=$7, Entry_Date=$8 WHERE id=$9 AND is_deleted=false',[Document_No, DATE,title,type,currency,total_amount, Entry_User, Entry_Date,id]);
    if(update_Journal_Voucher){
        console.log("Journal voucher updated Successfully");
    }
    else{
        console.log("Error in Updating Journal Voucher");
    }
}
    catch(error){
        console.log(error);
    }
});

router.delete('/:id',async(req,res)=>{
    const{id}=req.params;
    try{
        const delete_journal_voucher = await pool.query('UPDATE Journal_Voucher SET is_deleted=true WHERE id=$1 AND is_deleted=false', [id]);
        if(delete_journal_voucher){
        console.log("Journal Voucher deleted Successfully");
    }
    else{
        console.log("Error in deleting Journal Voucher");
        res.json(error);
    }
    }
    catch(error){
        console.log(error);
    }
});

module.exports=router;