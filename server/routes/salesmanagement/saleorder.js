const express = require('express');
const pool = require('../../models/model.js');

const router = express.Router();

router.use(express.json());

// GET API 
router.get("/", async (req, res) => {
    try {
        const sales = await pool.query('SELECT * FROM Sales_Order_Invoice WHERE "is_deleted"=false');
        if (sales.rows.length === 0) {
            console.log("No Sales Invoices to show");
            res.json([]);
        } else {
            res.json(sales.rows);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while fetching invoices" });
    }
});

// POST API 
router.post('/', async (req, res) => {
    const { Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status } = req.body;
    try {
        const create = await pool.query("INSERT INTO Sales_Order_Invoice(Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *",
            [Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status]);

        console.log("Invoice created successfully");
        res.json(create.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "An error occurred while creating an invoice" });
    }
});

// PUT API 
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status } = req.body;
    try {
        const update = await pool.query("UPDATE Sales_Order_Invoice SET Document_No=$1, DATE=$2, BASE=$3, BASE_REF_NO=$4, Customer=$5, Net_Amount=$6, Entry_User=$7, Entry_Date=$8, Status=$9 WHERE id=$10 AND is_deleted=false", [Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, Status, id]);

        if (update.rowCount === 0) {
            console.error("Error in updating Invoice");
            res.status(404).json({ error: "Invoice not found" });
        } else {
            console.log("Invoice Updated successfully");
            res.json({ message: "Invoice updated successfully" });
        }
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "An error occurred while updating an invoice" });
    }
});

// DELETE 
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const upd = await pool.query("UPDATE Sales_Order_Invoice SET is_deleted=true WHERE id=$1 AND \"is_deleted\"=false", [id]);
        if (!upd) {
            console.log({ error: "Error in deleting Invoice" });
        }
        else {
            console.log("Inovie Deleted Successfully");
        }

    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "An error occurred while deleting task" });
    }
});

module.exports = router;
