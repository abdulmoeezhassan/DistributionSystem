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
        Document_DATE VARCHAR(200),
        Document_BASE VARCHAR(200),
        BASE_REF_NO VARCHAR(200),
        Salesman VARCHAR(200),
        Flat_Tax VARCHAR(200),
        Base_Currency VARCHAR(200),
        Currency VARCHAR(200),
        Flat_Tax_Amount VARCHAR(200),
        Total_Amount VARCHAR(200),
        Flat_Discount_Amount VARCHAR(200),
        Customer VARCHAR(300),
        Grand_Total VARCHAR(300),
        Entry_User VARCHAR(300),
        Entry_Date VARCHAR(300),
        Remarks VARCHAR(500),
        "is_deleted" boolean DEFAULT false
      )
    `;

    const createSalesReturnInvoiceTableQuery = `
      CREATE TABLE IF NOT EXISTS Sales_Return_Invoice(
        id SERIAL PRIMARY KEY,
        Document_No VARCHAR(500),
        Document_DATE VARCHAR(200),
        Document_BASE VARCHAR(200),
        BASE_REF_NO VARCHAR(200),
        Salesman VARCHAR(200),
        Flat_Tax VARCHAR(200),
        Base_Currency VARCHAR(200),
        Currency VARCHAR(200),
        Flat_Tax_Amount VARCHAR(200),
        Total_Amount VARCHAR(200),
        Flat_Discount_Amount VARCHAR(200),
        Customer VARCHAR(300),
        Grand_Total VARCHAR(300),
        Entry_User VARCHAR(300),
        Entry_Date VARCHAR(300),
        Remarks VARCHAR(500),
        "is_deleted" boolean DEFAULT false
      )
    `;
    const createSalesEstimateInvoiceTableQuery = `
    CREATE TABLE IF NOT EXISTS Sales_Estimate_Invoice(
      id SERIAL PRIMARY KEY,
      Document_No VARCHAR(500),
      Document_DATE VARCHAR(200),
      Document_BASE VARCHAR(200),
      BASE_REF_NO VARCHAR(200),
      Salesman VARCHAR(200),
      Flat_Tax VARCHAR(200),
      Base_Currency VARCHAR(200),
      Currency VARCHAR(200),
      Flat_Tax_Amount VARCHAR(200),
      Total_Amount VARCHAR(200),
      Flat_Discount_Amount VARCHAR(200),
      Customer VARCHAR(300),
      Grand_Total VARCHAR(300),
      Entry_User VARCHAR(300),
      Entry_Date VARCHAR(300),
      Remarks VARCHAR(500),
      "is_deleted" boolean DEFAULT false
    )
  `;
    const createSalesQuotationInvoiceTableQuery= `
    CREATE TABLE IF NOT EXISTS Sales_Quotation_Invoice(
      id SERIAL PRIMARY KEY,
        Document_No VARCHAR(500),
        Document_DATE VARCHAR(200),
        Document_BASE VARCHAR(200),
        BASE_REF_NO VARCHAR(200),
        Salesman VARCHAR(200),
        Flat_Tax VARCHAR(200),
        Base_Currency VARCHAR(200),
        Currency VARCHAR(200),
        Flat_Tax_Amount VARCHAR(200),
        Total_Amount VARCHAR(200),
        Flat_Discount_Amount VARCHAR(200),
        Customer VARCHAR(300),
        Grand_Total VARCHAR(300),
        Entry_User VARCHAR(300),
        Entry_Date VARCHAR(300),
        Remarks VARCHAR(500),
        "is_deleted" boolean DEFAULT false
    )
  `;
  const createSalesOrderInvoiceTableQuery= `
    CREATE TABLE IF NOT EXISTS Sales_Order_Invoice(
      id SERIAL PRIMARY KEY,
      Document_No VARCHAR(500),
      Document_DATE VARCHAR(200),
      Document_BASE VARCHAR(200),
      BASE_REF_NO VARCHAR(200),
      Salesman VARCHAR(200),
      Flat_Tax VARCHAR(200),
      Base_Currency VARCHAR(200),
      Currency VARCHAR(200),
      Flat_Tax_Amount VARCHAR(200),
      Total_Amount VARCHAR(200),
      Flat_Discount_Amount VARCHAR(200),
      Customer VARCHAR(300),
      Grand_Total VARCHAR(300),
      Entry_User VARCHAR(300),
      Entry_Date VARCHAR(300),
      Remarks VARCHAR(500),
      "is_deleted" boolean DEFAULT false
    )
  `;
  const createPurchaseInvoiceTableQuery= `
  CREATE TABLE IF NOT EXISTS Purchase_Invoice(
    id SERIAL PRIMARY KEY,
    Document_No VARCHAR(500),
    Document_DATE VARCHAR(200),
    Document_BASE VARCHAR(200),
    BASE_REF_NO VARCHAR(200),
    Salesman VARCHAR(200),
    Flat_Tax VARCHAR(200),
    Base_Currency VARCHAR(200),
    Currency VARCHAR(200),
    Flat_Tax_Amount VARCHAR(200),
    Total_Amount VARCHAR(200),
    Flat_Discount_Amount VARCHAR(200),
    Customer VARCHAR(300),
    Grand_Total VARCHAR(300),
    Entry_User VARCHAR(300),
    Entry_Date VARCHAR(300),
    Remarks VARCHAR(500),
    "is_deleted" boolean DEFAULT false
  )
`;
const createPurchaseOrderTableQuery= `
CREATE TABLE IF NOT EXISTS Purchase_Order(
  id SERIAL PRIMARY KEY,
  Document_No VARCHAR(500),
  Document_DATE VARCHAR(200),
  Document_BASE VARCHAR(200),
  BASE_REF_NO VARCHAR(200),
  Salesman VARCHAR(200),
  Flat_Tax VARCHAR(200),
  Base_Currency VARCHAR(200),
  Currency VARCHAR(200),
  Flat_Tax_Amount VARCHAR(200),
  Total_Amount VARCHAR(200),
  Flat_Discount_Amount VARCHAR(200),
  Customer VARCHAR(300),
  Grand_Total VARCHAR(300),
  Entry_User VARCHAR(300),
  Entry_Date VARCHAR(300),
  Remarks VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)
`;
const createPurchaseReturnTableQuery= `
CREATE TABLE IF NOT EXISTS Purchase_Return(
  id SERIAL PRIMARY KEY,
  Document_No VARCHAR(500),
      Document_DATE VARCHAR(200),
      Document_BASE VARCHAR(200),
      BASE_REF_NO VARCHAR(200),
      Salesman VARCHAR(200),
      Flat_Tax VARCHAR(200),
      Base_Currency VARCHAR(200),
      Currency VARCHAR(200),
      Flat_Tax_Amount VARCHAR(200),
      Total_Amount VARCHAR(200),
      Flat_Discount_Amount VARCHAR(200),
      Customer VARCHAR(300),
      Grand_Total VARCHAR(300),
      Entry_User VARCHAR(300),
      Entry_Date VARCHAR(300),
      Remarks VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)
`;
const createJournalVoucherTableQuery= `
CREATE TABLE IF NOT EXISTS Journal_Voucher(
  id SERIAL PRIMARY KEY,
  Document_No VARCHAR(500),
  Document_DATE VARCHAR(200),
  Document_BASE VARCHAR(200),
  BASE_REF_NO VARCHAR(200),
  Salesman VARCHAR(200),
  Flat_Tax VARCHAR(200),
  Base_Currency VARCHAR(200),
  Currency VARCHAR(200),
  Flat_Tax_Amount VARCHAR(200),
  Total_Amount VARCHAR(200),
  Flat_Discount_Amount VARCHAR(200),
  Customer VARCHAR(300),
  Grand_Total VARCHAR(300),
  Entry_User VARCHAR(300),
  Entry_Date VARCHAR(300),
  Remarks VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)
`;
const createBankPayementTableQuery= `
CREATE TABLE IF NOT EXISTS Bank_Payment(
  id SERIAL PRIMARY KEY,
  Document_No VARCHAR(500),
  Document_DATE VARCHAR(200),
  Document_BASE VARCHAR(200),
  BASE_REF_NO VARCHAR(200),
  Salesman VARCHAR(200),
  Flat_Tax VARCHAR(200),
  Base_Currency VARCHAR(200),
  Currency VARCHAR(200),
  Flat_Tax_Amount VARCHAR(200),
  Total_Amount VARCHAR(200),
  Flat_Discount_Amount VARCHAR(200),
  Customer VARCHAR(300),
  Grand_Total VARCHAR(300),
  Entry_User VARCHAR(300),
  Entry_Date VARCHAR(300),
  Remarks VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)
`;
const createCashPayementTableQuery= `
CREATE TABLE IF NOT EXISTS Cash_Payment(
  id SERIAL PRIMARY KEY,
  Document_No VARCHAR(500),
  Document_DATE VARCHAR(200),
  Document_BASE VARCHAR(200),
  BASE_REF_NO VARCHAR(200),
  Salesman VARCHAR(200),
  Flat_Tax VARCHAR(200),
  Base_Currency VARCHAR(200),
  Currency VARCHAR(200),
  Flat_Tax_Amount VARCHAR(200),
  Total_Amount VARCHAR(200),
  Flat_Discount_Amount VARCHAR(200),
  Customer VARCHAR(300),
  Grand_Total VARCHAR(300),
  Entry_User VARCHAR(300),
  Entry_Date VARCHAR(300),
  Remarks VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)
`;
const createBankReceiptTableQuery= `
CREATE TABLE IF NOT EXISTS Bank_Recipt(
  id SERIAL PRIMARY KEY,
  Document_No VARCHAR(500),
  Document_DATE VARCHAR(200),
  Document_BASE VARCHAR(200),
  BASE_REF_NO VARCHAR(200),
  Salesman VARCHAR(200),
  Flat_Tax VARCHAR(200),
  Base_Currency VARCHAR(200),
  Currency VARCHAR(200),
  Flat_Tax_Amount VARCHAR(200),
  Total_Amount VARCHAR(200),
  Flat_Discount_Amount VARCHAR(200),
  Customer VARCHAR(300),
  Grand_Total VARCHAR(300),
  Entry_User VARCHAR(300),
  Entry_Date VARCHAR(300),
  Remarks VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)
`;
const createCashReceiptTableQuery= `
CREATE TABLE IF NOT EXISTS Cash_Recipt(
  id SERIAL PRIMARY KEY,
  Document_No VARCHAR(500),
        Document_DATE VARCHAR(200),
        Document_BASE VARCHAR(200),
        BASE_REF_NO VARCHAR(200),
        Salesman VARCHAR(200),
        Flat_Tax VARCHAR(200),
        Base_Currency VARCHAR(200),
        Currency VARCHAR(200),
        Flat_Tax_Amount VARCHAR(200),
        Total_Amount VARCHAR(200),
        Flat_Discount_Amount VARCHAR(200),
        Customer VARCHAR(300),
        Grand_Total VARCHAR(300),
        Entry_User VARCHAR(300),
        Entry_Date VARCHAR(300),
        Remarks VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)
`;
const unpostedvoucher=`CREATE TABLE IF NOT EXISTS un_posted_voucher(
  id SERIAL PRIMARY KEY,
  Document_No VARCHAR(500),
  Document_DATE VARCHAR(200),
  Document_BASE VARCHAR(200),
  BASE_REF_NO VARCHAR(200),
  Salesman VARCHAR(200),
  Flat_Tax VARCHAR(200),
  Base_Currency VARCHAR(200),
  Currency VARCHAR(200),
  Flat_Tax_Amount VARCHAR(200),
  Total_Amount VARCHAR(200),
  Flat_Discount_Amount VARCHAR(200),
  Customer VARCHAR(300),
  Grand_Total VARCHAR(300),
  Entry_User VARCHAR(300),
  Entry_Date VARCHAR(300),
  Remarks VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)`
const unreconciledvoucher=`CREATE TABLE IF NOT EXISTS un_reconciled_voucher(
  id SERIAL PRIMARY KEY,
  Document_No VARCHAR(500),
        Document_DATE VARCHAR(200),
        Document_BASE VARCHAR(200),
        BASE_REF_NO VARCHAR(200),
        Salesman VARCHAR(200),
        Flat_Tax VARCHAR(200),
        Base_Currency VARCHAR(200),
        Currency VARCHAR(200),
        Flat_Tax_Amount VARCHAR(200),
        Total_Amount VARCHAR(200),
        Flat_Discount_Amount VARCHAR(200),
        Customer VARCHAR(300),
        Grand_Total VARCHAR(300),
        Entry_User VARCHAR(300),
        Entry_Date VARCHAR(300),
        Remarks VARCHAR(500),
  "is_deleted" boolean DEFAULT false
)`
const Customervoucher=`CREATE TABLE IF NOT EXISTS Customer(
  id SERIAL PRIMARY KEY,
  Supplier_Number VARCHAR (500),
  COAID VARCHAR(500),
  Code VARCHAR(500),
  Contact_Person VARCHAR(500),
  Opening_Balance VARCHAR(500),
  Balance_Type VARCHAR(500),
  Address VARCHAR(1000),
  Fax VARCHAR(500),
  Web VARCHAR(500),
  Country VARCHAR(500),
  NTN VARCHAR(500),
  STRN VARCHAR(500),
  Credit_Limit VARCHAR(500),
  Credit_Days VARCHAR(500),
  Lincense_Number VARCHAR(500),
  Lincense_Expiry VARCHAR(500),
  Email VARCHAR(1000),
  Supplier_Type VARCHAR(500),
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
  Supplier_Number VARCHAR (500),
  COAID VARCHAR(500),
  Code VARCHAR(500),
  Contact_Person VARCHAR(500),
  Opening_Balance VARCHAR(500),
  Balance_Type VARCHAR(500),
  Address VARCHAR(1000),
  Fax VARCHAR(500),
  Web VARCHAR(500),
  Country VARCHAR(500),
  NTN VARCHAR(500),
  STRN VARCHAR(500),
  Credit_Limit VARCHAR(500),
  Credit_Days VARCHAR(500),
  Lincense_Number VARCHAR(500),
  Lincense_Expiry VARCHAR(500),
  Email VARCHAR(1000),
  Supplier_Type VARCHAR(500),
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
        Product_Number VARCHAR(500),
        BarCode VARCHAR(500),
        Manufacturer VARCHAR(500),
        Code VARCHAR(500),
        Description VARCHAR(500),
        Brand VARCHAR(500),
        Packing VARCHAR(500),
        Product_Type VARCHAR(500),
        Category VARCHAR(500),
        Re_Order_Level VARCHAR(500) ,
        Name VARCHAR(500),
        Danger_Level VARCHAR(500),
        Sale_Price VARCHAR(500),
        Least_Price VARCHAR(500),
        Sale_Dis VARCHAR(500),
        MR_Price VARCHAR(500),
        Purchase_Price VARCHAR(500),
        Purchase_Dis VARCHAR(500),
        Supplier VARCHAR(500),
        Rate VARCHAR(500),
        Quantity VARCHAR(500),
        Unit_of_Meas VARCHAR(500),
        Expiry_Date VARCHAR(500),
        Batch VARCHAR(500),
        Entry_Date VARCHAR(500),
        Product_Avail VARCHAR(500),
        Image BYTEA,
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
const Login=`CREATE TABLE IF NOT EXISTS Login(
  id SERIAL PRIMARY KEY,
  UserName VARCHAR(500) NOT NULL,
  HashedPassword TEXT NOT NULL,
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
      pool.query(Manufacturer),
      pool.query(Login)
    ]);
  })
  .then(() => {
    console.log("Tables Created or Already Exists");
  })
  .catch(error => {
    console.error('Error connecting to PostgreSQL', error);
  });

module.exports = pool;
