const express = require('express');
const pool = require('../../models/model');
const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();
router.use(express.json());

router.get('/', async (req, res) => {
    try {
        const get_product = await pool.query('SELECT id,Product_Number,Name,Product_Type,Category,Product_Avail,Sale_Price,Purchase_Price,Entry_Date,Image FROM ProductInfo WHERE is_deleted=false');
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

router.get('/:id', async (req, res) => {
    try {
        const get_product =await pool.query('SELECT id,Product_Number, BarCode, Manufacturer, Code, Description, Brand, Packing, Product_Type, Category, Re_Order_Level, Name, Danger_Level, MR_Price, Sale_Price, Least_Price, Sale_Dis, Purchase_Price, Purchase_Dis, Supplier, Rate, Quantity, Unit_of_Meas, Expiry_Date, Batch, Product_Avail, Entry_Date,Image FROM ProductInfo WHERE is_deleted=false');
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

router.post('/', upload.single('Image'), async (req, res) => {
    const {
        Product_Number,
        BarCode,
        Manufacturer,
        Code,
        Description,
        Brand,
        Packing,
        Product_Type,
        Category,
        Re_Order_Level,
        Name,
        Danger_Level,
        MR_Price,
        Sale_Price,
        Least_Price,
        Sale_Dis,
        Purchase_Price,
        Purchase_Dis,
        Supplier,
        Rate,
        Quantity,
        Unit_of_Meas,
        Expiry_Date,
        Batch,
        Product_Avail,
        Entry_Date
    } = req.body;

    const image = req.file; 
    console.log(req.file); 

    try {
        const postProduct = await pool.query(`
            INSERT INTO ProductInfo (
                Product_Number,
                BarCode,
                Manufacturer,
                Code,
                Description,
                Brand,
                Packing,
                Product_Type,
                Category,
                Re_Order_Level,
                Name,
                Danger_Level,
                MR_Price,
                Sale_Price,
                Least_Price,
                Sale_Dis,
                Purchase_Price,
                Purchase_Dis,
                Supplier,
                Rate,
                Quantity,
                Unit_of_Meas,
                Expiry_Date,
                Batch,
                Product_Avail,
                Entry_Date,
                Image
            ) 
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27) 
            RETURNING *`,
            [
                Product_Number,
                BarCode,
                Manufacturer,
                Code,
                Description,
                Brand,
                Packing,
                Product_Type,
                Category,
                Re_Order_Level,
                Name,
                Danger_Level,
                MR_Price,
                Sale_Price,
                Least_Price,
                Sale_Dis,
                Purchase_Price,
                Purchase_Dis,
                Supplier,
                Rate,
                Quantity,
                Unit_of_Meas,
                Expiry_Date,
                Batch,
                Product_Avail,
                Entry_Date,
                image ? image.buffer : null
            ]
        );

        if (postProduct) {
            res.json(postProduct.rows[0]);
        } else {
            console.log("Error in Inserting Data");
            res.status(500).json({ error: "Error in Inserting Data" });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const {
        Product_Number,
        BarCode,
        Manufacturer,
        Code,
        Description,
        Brand,
        Packing,
        Product_Type,
        Category,
        Re_Order_Level,
        Name,
        Danger_Level,
        MR_Price,
        Sale_Price,
        Least_Price,
        Sale_Dis,
        Purchase_Price,
        Purchase_Dis,
        Supplier,
        Rate,
        Quantity,
        Unit_of_Meas,
        Expiry_Date,
        Batch,
        Product_Avail,
        Entry_Date,
        Image
    } = req.body;
    try {
        const putProduct = await pool.query(
            `UPDATE ProductInfo SET 
                Product_Number=$1,
                BarCode=$2,
                Manufacturer=$3,
                Code=$4,
                Description=$5,
                Brand=$6,
                Packing=$7,
                Product_Type=$8,
                Category=$9,
                Re_Order_Level=$10,
                Name=$11,
                Danger_Level=$12,
                MR_Price=$13,
                Sale_Price=$14,
                Least_Price=$15,
                Sale_Dis=$16,
                Purchase_Price=$17,
                Purchase_Dis=$18,
                Supplier=$19,
                Rate=$20,
                Quantity=$21,
                Unit_of_Meas=$22,
                Expiry_Date=$23,
                Batch=$24,
                Product_Avail=$25,
                Entry_Date=$26,
                Image=$27
            WHERE id=$27`,
            [
                Product_Number,
                BarCode,
                Manufacturer,
                Code,
                Description,
                Brand,
                Packing,
                Product_Type,
                Category,
                Re_Order_Level,
                Name,
                Danger_Level,
                MR_Price,
                Sale_Price,
                Least_Price,
                Sale_Dis,
                Purchase_Price,
                Purchase_Dis,
                Supplier,
                Rate,
                Quantity,
                Unit_of_Meas,
                Expiry_Date,
                Batch,
                Product_Avail,
                Entry_Date,
                id,
                Image
            ]
        );
        if (putProduct) {
            res.json("Data Updated Successfully");
        } else {
            res.json("Error in Updating Data");
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Server Error" });
    }
});


router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteProduct = await pool.query("UPDATE ProductInfo SET  is_deleted=true WHERE id=$1 AND \"is_deleted\"=false", [id]);
        if (deleteProduct) {
            res.json("Data deleted Successfully");
        }
        else {
            res.json("Error in Deleting data");
        }
    }
    catch (error) {
        console.log();
    }
});
module.exports = router;