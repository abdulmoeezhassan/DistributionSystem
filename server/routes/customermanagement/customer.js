const express = require('express');
const pool = require('../../models/model');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const getCustomer = await pool.query('SELECT * FROM Customer WHERE "is_deleted"=false');
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
    const { Number, Area, type, Name, Phone, City, Entry_Date } = req.body;
    try {
        const insertCustomer = await pool.query('INSERT INTO Customer (Number,Area,type,Name,Phone,City,Entry_Date) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *', [Number, Area, type, Name, Phone, City, Entry_Date]);
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
    const { Number, Area, type, Name, Phone, City, Entry_Date } = req.body;
    try {
        const putCustomer = await pool.query('UPDATE Customer SET Number=$1,Area=$2,type=$3,Name=$4,Phone=$5,City=$6,Entry_Date=$7 WHERE id=$8', [Number, Area, type, Name, Phone, City, Entry_Date, id]);
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

router.delete('/',async(req,res)=>{
    try{
   const deleteCustomer=await pool.query('UPDATE Customer  SET is_deleted=true WHERE id=$1 AND \"is_deleted\"=false',[id]);{
    if(deleteCustomer){
        console.log("Customer data deleted Successfully");
    }
    else{
        console.log("Error in deleting Customer Data");
        console.log(error);
    }
   }
    }
    catch(error){
        console.log(error);
    }
});

module.exports=router;