const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Distribution_System",
  password: "postgres",
  port: 5432,
});

pool.connect()
  .then(() => {
    console.log('Connected to PostgreSQL');
    
    const createSalesInvoiceTableQuery = `
      CREATE TABLE IF NOT EXISTS Sales_Invoice(
        id SERIAL PRIMARY KEY,
        Document_No VARCHAR(500),
        DATE VARCHAR(200),
        BASE VARCHAR(200),
        BASE_REF_NO VARCHAR(200),
        Customer VARCHAR(300),
        Net_Amount VARCHAR(300),
        Entry_User VARCHAR(300),
        Entry_Date VARCHAR(300),
        Status VARCHAR(100),
        "is_deleted" boolean DEFAULT false
      )
    `;

    const createSalesReturnInvoiceTableQuery = `
      CREATE TABLE IF NOT EXISTS Sales_Return_Invoice(
        id SERIAL PRIMARY KEY,
        Document_No VARCHAR(500),
        DATE VARCHAR(200),
        BASE VARCHAR(200),
        BASE_REF_NO VARCHAR(200),
        Customer VARCHAR(300),
        Net_Amount VARCHAR(300),
        Entry_User VARCHAR(300),
        Entry_Date VARCHAR(300),
        Status VARCHAR(100),
        "is_deleted" boolean DEFAULT false
      )
    `;
    const createSalesEstimateInvoiceTableQuery = `
    CREATE TABLE IF NOT EXISTS Sales_Estimate_Invoice(
      id SERIAL PRIMARY KEY,
      Document_No VARCHAR(500),
      DATE VARCHAR(200),
      BASE VARCHAR(200),
      BASE_REF_NO VARCHAR(200),
      Customer VARCHAR(300),
      Net_Amount VARCHAR(300),
      Entry_User VARCHAR(300),
      Entry_Date VARCHAR(300),
      Status VARCHAR(100),
      "is_deleted" boolean DEFAULT false
    )
  `;
    const createSalesQuotationInvoiceTableQuery= `
    CREATE TABLE IF NOT EXISTS Sales_Quotation_Invoice(
      id SERIAL PRIMARY KEY,
      Document_No VARCHAR(500),
      DATE VARCHAR(200),
      BASE VARCHAR(200),
      BASE_REF_NO VARCHAR(200),
      Customer VARCHAR(300),
      Net_Amount VARCHAR(300),
      Entry_User VARCHAR(300),
      Entry_Date VARCHAR(300),
      Status VARCHAR(100),
      "is_deleted" boolean DEFAULT false
    )
  `;
  const createSalesOrderInvoiceTableQuery= `
    CREATE TABLE IF NOT EXISTS Sales_Order_Invoice(
      id SERIAL PRIMARY KEY,
      Document_No VARCHAR(500),
      DATE VARCHAR(200),
      BASE VARCHAR(200),
      BASE_REF_NO VARCHAR(200),
      Customer VARCHAR(300),
      Net_Amount VARCHAR(300),
      Entry_User VARCHAR(300),
      Entry_Date VARCHAR(300),
      Status VARCHAR(100),
      "is_deleted" boolean DEFAULT false
    )
  `;
    return Promise.all([
      pool.query(createSalesInvoiceTableQuery),
      pool.query(createSalesReturnInvoiceTableQuery),
      pool.query(createSalesEstimateInvoiceTableQuery),
      pool.query(createSalesQuotationInvoiceTableQuery),
      pool.query(createSalesOrderInvoiceTableQuery)
    ]);
  })
  .then(() => {
    console.log("Tables Created or Already Exists");
  })
  .catch(error => {
    console.error('Error connecting to PostgreSQL', error);
  });

module.exports = pool;
