const express=require('express');
const pool = require('./models/model.js');
const app = express();

app.use(express.json());

const PORT=8000;

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








app.listen(PORT,()=>{
    console.log(`Server is listening on PORT ${PORT}`);
})