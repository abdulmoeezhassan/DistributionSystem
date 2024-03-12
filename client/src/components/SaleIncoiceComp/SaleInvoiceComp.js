import React, { useState } from "react";
import "./SaleInvoiceComp.css";
import axios from "axios";


const Invoice = (props) => {
const [data,invoiceData]=useState([]);
const getData=async()=>{
   const Data= await axios.get(`${props.apiendpoint}/${props.id}`);
}
    return (
      <div className="invoice-container">
        <div className="company-info">
          <div>ZBL PHARMA DISTRIBUTORS PVT.LTD</div>
          <div>Building Situated, Main Road Near Kashmir House Scheme No 2 Tehsil Gujar Khan District Rawalpindi</div>
          <div>Phone: +92-300-9837998, 0333-5215321</div>
          <div>Email:</div>
          <div>Web:</div>
        </div>
        <div className="invoice-details">
          <div>Invoice No: {invoiceData.invoiceNo}</div>
          <div>Order No: {invoiceData.orderNo}</div>
          <div>Customer: {invoiceData.customer}</div>
          <div>Sales Type: {invoiceData.salesType}</div>
          <div>Address: {invoiceData.customerAddress}</div>
          <div>Phone: {invoiceData.customerPhone}</div>
          <div>Sale Date: {invoiceData.saleDate}</div>
          {/* Add more dynamic content here */}
        </div>
        <div className="invoice-items">
          <div className="item-header">
            <div>SR.</div>
            <div>PRODUCT</div>
            <div>BATCH</div>
            <div>PCK</div>
            <div>UOM</div>
            <div>SIZE</div>
            <div>QTY</div>
            <div>BNS</div>
            <div>RATE</div>
            <div>GROSS</div>
            <div>DIS</div>
            <div>GST</div>
            <div>NET</div>
          </div>
          {/* Render invoice items dynamically */}
          {invoiceData.items.map((item, index) => (
            <div key={index} className="item">
              <div>{index + 1}</div>
              <div>{item.product}</div>
              <div>{item.batch}</div>
              <div>{item.pck}</div>
              <div>{item.uom}</div>
              <div>{item.size}</div>
              <div>{item.qty}</div>
              <div>{item.bns}</div>
              <div>{item.rate}</div>
              <div>{item.gross}</div>
              <div>{item.dis}</div>
              <div>{item.gst}</div>
              <div>{item.net}</div>
            </div>
          ))}
        </div>
        <div className="invoice-summary">
          <div className="summary-header">
            <div>Net Amount</div>
            <div>Flat Dis</div>
            <div>Item Dis</div>
            <div>GST</div>
            <div>Gross</div>
            <div>Advance Tax</div>
          </div>
          {/* Render summary section dynamically */}
          <div className="summary">
            <div>{invoiceData.netAmount}</div>
            <div>{invoiceData.flatDis}</div>
            <div>{invoiceData.itemDis}</div>
            <div>{invoiceData.gst}</div>
            <div>{invoiceData.gross}</div>
            <div>{invoiceData.advanceTax}</div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Invoice;