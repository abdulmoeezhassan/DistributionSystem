const express = require('express');
const pool = require('../../models/model');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const get_product = await pool.query('SELECT * FROM ProductInfo WHERE is_deleted=false');
        if (get_product.rows.length === 0) {
            console.log("Nothing to show");
            res.json([]);
        }
        else {
           res.json(get_product.rows);
        }
    }
    catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    const { Number, Name, Type, Category, is_service, SalePrice_tp, Purchase_Price, Entry_Date } = req.body;
    try {
        const postProduct = await pool.query('INSERT INTO ProductInfo (Number,Name,Type,Category,is_service,SalePrice_tp,Purchase_Price,Entry_Date) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *', [Number, Name, Type, Category, is_service, SalePrice_tp, Purchase_Price, Entry_Date]);
        if (postProduct) {
            res.json(postProduct.rows[0]);
        }
        else {
            console.log("Error in Inserting Data");
        }
    }
    catch (error) {
        console.log(error);
    }
});

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { Number, Name, Type, Category, is_service, SalePrice_tp, Purchase_Price, Entry_Date } = req.body;
    try {
        const putProduct = await pool.query('UPDATE ProductInfo SET Number=$1,Name=$2,Type=$3,Category=$4,is_service=$5,SalePrice_tp=$6,Purchase_Price=$7,Entry_Date=$8 WHERE id=$9', [Number, Name, Type, Category, is_service, SalePrice_tp, Purchase_Price, Entry_Date,id])
        if(putProduct){
         res.json("Data Updated Successfully");
        }
        else{
            res.json("Error in Updating Data");
        }
    }
    catch (error) {
        console.log(error);
    }
});

router.delete('/:id',async(req,res)=>{
    const{id}=req.params;
    try{
    const deleteProduct=await pool.query("UPDATE ProductInfo SET  is_deleted=true WHERE id=$1 AND \"is_deleted\"=false",[id]);
    if(deleteProduct){
       res.json("Data deleted Successfully");
    }
    else{
       res.json("Error in Deleting data");
    }
    }
    catch(error){
        console.log();
    }
});
module.exports=router;