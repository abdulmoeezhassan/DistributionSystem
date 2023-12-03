import React from "react";
import "./salesOrder.css";

const Salesinvoice = () => {
  return (
    <div>
      <div className="headersales">
        <h5>Sales Order</h5>
        <button>+|Add New</button>
      </div>
      <div className="sales">
        <div className="sales-1">
          <label>Show</label>
          <select className="input">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <label className="enteries">enteries</label>
        </div>
        <div className="search">
          <label>Search:</label>
          <input type="text" placeholder="Search here" className="input" />
        </div>
      </div>
      <div>
      <div className="saleshead">
          <h4 className="salesh">↑↓Sr.No</h4>
          <h4 className="salesh">↑↓Document No</h4>
          <h4 className="salesh">↑↓Date</h4>
          <h4 className="salesh">↑↓Base</h4>
          <h4 className="salesh">↑↓Base Ref No</h4>
          <h4 className="salesh">↑↓Customer</h4>
          <h4 className="salesh">↑↓Net Amount</h4>
          <h4 className="salesh">↑↓Entry User</h4>
          <h4 className="salesh">↑↓Entry Date</h4>
          <h4 className="salesh">↑↓Status</h4>
          <h4 className="salesh">↑↓Action</h4>
          </div>
      </div>
      <div>
      <p className="footer">©2023 Copyright : <a href="https://www.codeswave.com" target="_blank" rel="noopener noreferrer" className="foot">codeswave</a></p>
      </div>
      </div>
  );
}

export default Salesinvoice;