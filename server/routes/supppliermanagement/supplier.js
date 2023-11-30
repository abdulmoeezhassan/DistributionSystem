const express = require('express');
const pool = require('../../models/model');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const getCustomer = await pool.query('SELECT * FROM SupplierInfo WHERE "is_deleted"=false');
        if (getCustomer.rows.length === 0) {
            console.log("customer Info is empty");
            res.json([]);
        }
        else {
            res.json(getCustomer.rows);
        }
    }
    catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    const { Number, type, Name, Phone, City, Entry_Date } = req.body;
    try {
        const insertCustomer = await pool.query('INSERT INTO SupplierInfo(Number,type,Name,Phone,City,Entry_Date) VALUES ($1,$2,$3,$4,$5,$6) RETURNING *', [Number, type, Name, Phone, City, Entry_Date]);
        if (insertCustomer) {
            console.log("Data inserted Successfully");
            res.json(insertCustomer.rows[0]);
        }
        else {
            console.log("Error in Creating new row");
            console.log(error);
        }
    }
    catch (error) {
        console.log(error);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { Number,  type, Name, Phone, City, Entry_Date } = req.body;
    try {
        const putCustomer = await pool.query('UPDATE SupplierInfo SET Number=$1,type=$2,Name=$3,Phone=$4,City=$5,Entry_Date=$6 WHERE id=$7', [Number,  type, Name, Phone, City, Entry_Date, id]);
        if (putCustomer) {
            console.log("Customer Data updated Successfully");
        }
        else {
            console.log("Error in updating Customer Data");
            console.log(error);
        }
    }
    catch (error) {
        console.log(error);
    }
});

router.delete('/:id',async(req,res)=>{
    const {id}=req.params;
    try{
   const deleteCustomer=await pool.query('UPDATE SupplierInfo  SET is_deleted=true WHERE id=$1 AND \"is_deleted\"=false',[id]);
    if(deleteCustomer){
        res.json("Customer data deleted Successfully");
    }
    else{
        console.log("Error in deleting Customer Data");
        res.json(error);
    }
   
    }
    catch(error){
        console.log(error);
    }
});

module.exports=router;