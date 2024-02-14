const express = require('express');
const pool = require('../../models/model');

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const getCustomer = await pool.query('SELECT Number,type,Name,Phone,City,Entry_Date FROM SupplierInfo WHERE "is_deleted"=false');
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
    const { Number, COAID, Code, Contact_Person, Opening_Balance, Balance_Type, Address, Fax, Web, Country, NTN, STRN, Credit_Limit, Credit_Days, Lincense_Number, Lincense_Expiry, Email, Type, Name, Phone, City, Entry_Date } = req.body;
    try {
        const insertSupplier = await pool.query(`
        INSERT INTO SupplierInfo
          (Number, COAID, Code, Contact_Person, Opening_Balance, Balance_Type, Address, Fax, Web, Country, NTN, STRN, Credit_Limit, Credit_Days, License_Number, License_Expiry, Email, Type, Name, Phone, City, Entry_Date)
        VALUES
          ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22)
        RETURNING *
      `, [Number, COAID, Code, Contact_Person, Opening_Balance, Balance_Type, Address, Fax, Web, Country, NTN, STRN, Credit_Limit, Credit_Days, Lincense_Number, Lincense_Expiry, Email, Type, Name, Phone, City, Entry_Date]);
              if (insertSupplier) {
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
    const {Supplier_Number, COAID, Code, Contact_Person, Opening_Balance, Balance_Type, Address, Fax, Web, Country, NTN, STRN, Credit_Limit, Credit_Days, License_Number, License_Expiry, Email, Supplier_type, Name, Phone, City, Entry_Date } = req.body;
    try {
        const putCustomer = await pool.query('UPDATE SupplierInfo SET Supplier_Number=$1, COAID=$2, Code=$3, Contact_Person=$4, Opening_Balance=$5, Balance_Type=$6, Address=$7, Fax=$8, Web=$9, Country=$9, NTN=$10, STRN=$11, Credit_Limit=$12, Credit_Days=$13, License_Number=$14, License_Expiry=$15, Email=$16, Supplier_type=$17, Name=$18, Phone=$19, City=$20, Entry_Date=$21 WHERE id=$22', [Supplier_Number, COAID, Code, Contact_Person, Opening_Balance, Balance_Type, Address, Fax, Web, Country, NTN, STRN, Credit_Limit, Credit_Days, License_Number, License_Expiry, Email, Supplier_type, Name, Phone, City, Entry_Date,id]);
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