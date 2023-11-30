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
  const createPurchaseInvoiceTableQuery= `
  CREATE TABLE IF NOT EXISTS Purchase_Invoice(
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
const createPurchaseOrderTableQuery= `
CREATE TABLE IF NOT EXISTS Purchase_Order(
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
const createPurchaseReturnTableQuery= `
CREATE TABLE IF NOT EXISTS Purchase_Return(
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
const createJournalVoucherTableQuery= `
CREATE TABLE IF NOT EXISTS Journal_Voucher(
  id SERIAL PRIMARY KEY,
  Document_No VARCHAR(500),
  DATE VARCHAR(200),
  Title VARCHAR(200),
  Type VARCHAR(200),
  Currency VARCHAR(200),
  Total_Amount VARCHAR(200),
  Entry_User VARCHAR(300),
  Entry_Date VARCHAR(300),
  "is_deleted" boolean DEFAULT false
)
`;
const createBankPayementTableQuery= `
CREATE TABLE IF NOT EXISTS Bank_Payment(
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
const createCashPayementTableQuery= `
CREATE TABLE IF NOT EXISTS Cash_Payment(
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
const createBankReceiptTableQuery= `
CREATE TABLE IF NOT EXISTS Bank_Recipt(
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
const createCashReceiptTableQuery= `
CREATE TABLE IF NOT EXISTS Cash_Recipt(
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
const unpostedvoucher=`CREATE TABLE IF NOT EXISTS un_posted_voucher(
  id SERIAL PRIMARY KEY,
  Document_No VARCHAR (500),
  Date VARCHAR(500),
  type VARCHAR(500),
  title VARCHAR(500),
  Amount VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)`
const unreconciledvoucher=`CREATE TABLE IF NOT EXISTS un_reconciled_voucher(
  id SERIAL PRIMARY KEY,
  Document_No VARCHAR (500),
  Date VARCHAR(500),
  type VARCHAR(500),
  title VARCHAR(500),
  Amount VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)`
const Customervoucher=`CREATE TABLE IF NOT EXISTS Customer(
  id SERIAL PRIMARY KEY,
  Number VARCHAR (500),
  Area VARCHAR(500),
  type VARCHAR(500),
  Name VARCHAR(500),
  Phone VARCHAR(500),
  City VARCHAR(500),
  Entry_Date VARCHAR(300),
  "is_deleted" boolean DEFAULT false
)`
const CustomerType=`CREATE TABLE IF NOT EXISTS CustomerType(
  id SERIAL PRIMARY KEY,
  Description VARCHAR(500),
  Entry_Date VARCHAR(300),
  "is_deleted" boolean DEFAULT false
)`
const CustomerArea=`CREATE TABLE IF NOT EXISTS CustomerArea(
  id SERIAL PRIMARY KEY,
  Description VARCHAR(500),
  Entry_Date VARCHAR(300),
  "is_deleted" boolean DEFAULT false
)`  
const SalesArea=`CREATE TABLE IF NOT EXISTS SalesArea(
  id SERIAL PRIMARY KEY,
  Description VARCHAR(500),
  Entry_Date VARCHAR(300),
  "is_deleted" boolean DEFAULT false
)`  
const SupplierInfo=`CREATE TABLE IF NOT EXISTS SupplierInfo(
  id SERIAL PRIMARY KEY,
  Number VARCHAR (500),
  type VARCHAR(500),
  Name VARCHAR(500),
  Phone VARCHAR(500),
  City VARCHAR(500),
  Entry_Date VARCHAR(300),
  "is_deleted" boolean DEFAULT false
)`  
const SupplierType=`CREATE TABLE IF NOT EXISTS SupplierType(
  id SERIAL PRIMARY KEY,
  Description VARCHAR(500),
  Entry_Date VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)`  
const ProductInfo=`CREATE TABLE IF NOT EXISTS ProductInfo(
  id SERIAL PRIMARY KEY,
  Number VARCHAR(500),
  Name VARCHAR(500),
  Type VARCHAR(500),
  Category VARCHAR(500),
  is_service VARCHAR(500),
  SalePrice_tp VARCHAR(500),
  Purchase_Price VARCHAR(500),
  Entry_Date VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)`  
const Type=`CREATE TABLE IF NOT EXISTS Type(
  id SERIAL PRIMARY KEY,
  Description VARCHAR(500),
  Entry_Date VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)`  
const Category=`CREATE TABLE IF NOT EXISTS Category(
  id SERIAL PRIMARY KEY,
  Description VARCHAR(500),
  Entry_Date VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)`  
const Packing=`CREATE TABLE IF NOT EXISTS Packing(
  id SERIAL PRIMARY KEY,
  Description VARCHAR(500),
  Entry_Date VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)`  
const Brand=`CREATE TABLE IF NOT EXISTS Brand(
  id SERIAL PRIMARY KEY,
  Description VARCHAR(500),
  Entry_Date VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)`  
const Manufacturer=`CREATE TABLE IF NOT EXISTS Manufacturer(
  id SERIAL PRIMARY KEY,
  Description VARCHAR(500),
  Entry_Date VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)`  
return Promise.all([
      pool.query(createSalesInvoiceTableQuery),
      pool.query(createSalesReturnInvoiceTableQuery),
      pool.query(createSalesEstimateInvoiceTableQuery),
      pool.query(createSalesQuotationInvoiceTableQuery),
      pool.query(createSalesOrderInvoiceTableQuery),
      pool.query(createPurchaseInvoiceTableQuery),
      pool.query(createPurchaseOrderTableQuery),
      pool.query(createPurchaseReturnTableQuery),
      pool.query(createJournalVoucherTableQuery),
      pool.query(createBankPayementTableQuery),
      pool.query(createCashPayementTableQuery),
      pool.query(createBankReceiptTableQuery),
      pool.query(createCashReceiptTableQuery),
      pool.query(unpostedvoucher),
      pool.query(unreconciledvoucher),
      pool.query(Customervoucher),
      pool.query(CustomerType),
      pool.query(CustomerArea),
      pool.query(SalesArea),
      pool.query(SupplierInfo),
      pool.query(SupplierType),
      pool.query(ProductInfo),
      pool.query(Type),
      pool.query(Category),
      pool.query(Packing),
      pool.query(Brand),
      pool.query(Manufacturer)
    ]);
  })
  .then(() => {
    console.log("Tables Created or Already Exists");
  })
  .catch(error => {
    console.error('Error connecting to PostgreSQL', error);
  });

module.exports = pool;
