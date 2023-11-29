const express = require('express');
const pool = require('../../models/model');


const router=express.Router();
router.use(express.json());


router.get('/', async (req, res) => {
    try {
        const Purchase_Invoice = await pool.query('SELECT * FROM Purchase_Return WHERE "is_deleted"=false');
        if (Purchase_Invoice.rows.length === 0) {
            console.log("Purchase_Return fethced Successfully");
            res.json([]);
        }
        else {
            console.log("error in fetching Purchase_Return");
            res.json(Purchase_Invoice.rows);
        }
    }
    catch (error) {
        console.log(error);
    }
});

router.post('/', async (req, res) => {
    try {
        const { Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status } = req.body;
        const Post_Purchase_Invoice = await pool.query('INSERT INTO Purchase_Return (Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *', [Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status]);
        if (Post_Purchase_Invoice) {
            console.log("Purchase Return created Successfully");
            res.json(create.rows[0]);
        }
    }
    catch (error) {
        console.log(error);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status } = req.body;
        const update_Invoice = await pool.query(
            "UPDATE Purchase_Return SET Document_No=$1, DATE=$2, BASE=$3, BASE_REF_NO=$4, Customer=$5, Net_Amount=$6, Entry_User=$7, Entry_Date=$8, Status=$9 WHERE id=$10 AND is_deleted=false",
            [Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status, id]
        );
        if (update_Invoice.rowCount === 0) {
            res.status(404).json({ error: 'Invoice not found or already deleted' });
        } else {
            res.json({ message: 'Invoice updated successfully' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


router.delete('/:id',async(req,res)=>{
    const {id}=req.params
    try{
   const delete_Inovice=await pool.query('Update Purchase_Return  SET is_deleted=true Where id=$1 AND \"is_deleted\"=false',[id]);
   if(delete_Inovice){
    res.json("Inovice delted Successfully");
   }
   else{
    res.json("Error in deleting Invoice");
    res.json(error);
   }
    }
    catch(error){
        console.log(error);
    }
})

module.exports=router;