const express = require('express');
const pool = require('../../models/model.js');

const router = express.Router();

router.use(express.json());

// GET API FOR SALES_INVOICE
router.get("/", async (req, res) => {
    try {
        const sales = await pool.query(`
  SELECT
    id,
    Document_No ,
    Document_DATE ,
    Document_BASE ,
    BASE_REF_NO ,
    Customer ,
    Grand_Total,
    Entry_User ,
    Entry_Date
  FROM
    Sales_Return_Invoice
  WHERE
  "is_deleted"=false
`);

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

//GET API WITH ID
router.get("/:id", async (req, res) => {
    const {id}=req.params;
    try {
        const sales = await pool.query(`
        SELECT
        Document_No,
        Document_DATE,
        Document_BASE,
        BASE_REF_NO,
        Salesman,
        Flat_Tax,
        Base_Currency,
        Currency,
        Flat_Tax_Amount,
        Total_Amount,
        Flat_Discount_Amount,
        Customer,
        Grand_Total,
        Entry_User,
        Entry_Date,
        Remarks
        FROM
        Sales_Return_Invoice
        WHERE
        "is_deleted"=false AND id=$1
      `,[id]); if (sales.rows.length === 0) {
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
// POST API FOR SALES_INVOICE
router.post('/', async (req, res) => {
    const {
        Document_No,
        Document_DATE,
        Document_BASE,
        BASE_REF_NO,
        Salesman,
        Flat_Tax,
        Base_Currency,
        Currency,
        Flat_Tax_Amount,
        Total_Amount,
        Flat_Discount_Amount,
        Customer,
        Grand_Total,
        Entry_User,
        Entry_Date,
        Remarks
    } = req.body;
    try {
        const create = await pool.query(
            "INSERT INTO Sales_Return_Invoice(Document_No, Document_DATE, Document_BASE, BASE_REF_NO, Salesman, Flat_Tax, Base_Currency, Currency, Flat_Tax_Amount, Total_Amount, Flat_Discount_Amount, Customer, Grand_Total, Entry_User, Entry_Date, Remarks) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *",
            [
                Document_No,
                Document_DATE,
                Document_BASE,
                BASE_REF_NO,
                Salesman,
                Flat_Tax,
                Base_Currency,
                Currency,
                Flat_Tax_Amount,
                Total_Amount,
                Flat_Discount_Amount,
                Customer,
                Grand_Total,
                Entry_User,
                Entry_Date,
                Remarks
            ]
        );

        console.log("Invoice created successfully");
        res.json(create.rows[0]);
    } catch (error) {
        console.error(error);
        res.status(400).json({ error: "An error occurred while creating an invoice" });
    }
});

// PUT API FOR SALES_INVOICE
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date } = req.body;
    try {
        const update = await pool.query("UPDATE Sales_Return_Invoice SET Document_No=$1, Document_DATE=$2, Document_BASE=$3, BASE_REF_NO=$4, Customer=$5, Grand_Total=$6, Entry_User=$7, Entry_Date=$8 WHERE id=$9 AND is_deleted=false", [Document_No, DATE, BASE, BASE_REF_NO, Customer, Net_Amount, Entry_User, Entry_Date, id]);

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

// DELETE API FOR SALES_INVOICE
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const upd = await pool.query("UPDATE Sales_Return_Invoice SET is_deleted=true WHERE id=$1 AND \"is_deleted\"=false", [id]);
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
