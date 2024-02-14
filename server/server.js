const express=require('express');
const cors = require('cors');
//const pool = require('./models/model.js');
const app = express();

app.use(express.json());

const PORT=4000;

app.use(cors({
    origin: 'http://localhost:3000'
}));
//Sales Invoice...                                                                                                                      
const  salesinvoiceRoute=require("./routes/salesmanagement/salesInvoice");

//Sales Return Invoice...
const SalesReurnInovice=require('./routes/salesmanagement/salesreturninvoice.js');

//Sales Estimate Invoice
const SalesEstimateInvoice=require('./routes/salesmanagement/saleestimateinvoice.js');

//Sales Quotation Invoice...
const SalesQuotationInvoice=require('./routes/salesmanagement/salequotation.js');

//Sales Order Invoice...
const SalesOrderInvoice=require('./routes/salesmanagement/saleorder.js');

//Purchase Inovice...

const PurcahseInvoice=require('./routes/purchasemanagement/purchaseInvoice.js');

//Purchase Order Invoice...

const PurcahseOrderInvoice=require('./routes/purchasemanagement/purchaseOrder.js');

//Purchase Return....

const PurcahseReturn=require('./routes/purchasemanagement/purchaseReturn.js');

//Journal Voucher...

const JournalVocher=require('./routes/voucherManagement/journalVoucher.js');

//Bank Payment...

const BankPayment=require('./routes/voucherManagement/BankPayement.js');

//Cash Recipt...

const CashRecipt=require('./routes/voucherManagement/CashRecipt.js');

//Un Posted Voucher...

const unPostedVoucher=require('./routes/voucherManagement/unPostedVoucher.js');

//Un Reconciled Voucher...

const reConciledVoucher=require('./routes/voucherManagement/UnReconicledVocher.js');

//Customer Data

const Customer=require('./routes/customermanagement/customer.js');

//CustomerType

const CustomerType=require('./routes/customermanagement/customerType.js');

//CustomerArea

const CustomerArea=require('./routes/customermanagement/customerArea.js');

//Supplier

const Supplier=require('./routes/supppliermanagement/supplier.js');

//Supplier Type

const SupplierType=require('./routes/supppliermanagement/supplierType.js');

//Product

const Product=require('./routes/Productmanagement/product.js');

//Type....

const Type=require('./routes/Productmanagement/product.js');

//Category.......

const Category=require('./routes/Productmanagement/category.js');
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sales Invoice...
app.use('/salesInvoice',salesinvoiceRoute);

//Sales Return Invoice...
app.use('/SalesReutrnInovice',SalesReurnInovice);

//Sales Estimate Invoice...
app.use('/SalesEstimateInvoice',SalesEstimateInvoice);

//Sales Quotation Invoice...
app.use('/SalesQuotationInvoice',SalesQuotationInvoice);

//Sales Order Invoice...
app.use('/SalesOrderInovice',SalesOrderInvoice);

//Purchase Invoice...
app.use('/PurchaseInvoice',PurcahseInvoice);

//Purchase Order...
app.use('/PurchaseOrder',PurcahseOrderInvoice);

//Purchase Return...
app.use('/PurchaseReturn',PurcahseReturn);

//JournalVoucher...

app.use('/JournalVoucher',JournalVocher);

//BankPayment...

app.use('/BankPayment',BankPayment);

//Cash Recipt...

app.use('/CashReceipt',CashRecipt);

//Un posted Voucher...
app.use('/UnPostedvoucher',unPostedVoucher);

//Un Reconciled Voucher...
app.use('/UnReconciledVoucher',reConciledVoucher);

//Customer

app.use('/CustomerInfo',Customer);

//CustomerType

app.use('/CustomerType',CustomerType);

//customerArea

app.use('/CustomerArea',CustomerArea);

//Supplier

app.use('/Supplier',Supplier);

//supplierType

app.use('/SupplierType',SupplierType);

//Product..

app.use('/ProductInfo',Product);

//Type......

app.use('/Type',Type);

//Category.....

app.use('/Category',Category);
//Server...

app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})