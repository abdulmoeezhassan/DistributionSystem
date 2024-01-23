import React,{useState} from "react";
import AddNew from "../../AddNewComp/AddNew";
import "./unpostedvouch.css";

const Salesinvoice = () => {
  const [showAddNew, setShowAddNew] = useState(false);

  const handleAddNewClick = () => {
    console.log("Adding New Clicked");
    setShowAddNew(true);
  };

  const closeAddclick = () => {
    setShowAddNew(false);
  }

  return (
    <div>
      <div className="headersales">
        <h5>Unposted Voucher</h5>
        <button onClick={handleAddNewClick}>+|Add New</button>
      </div>
      {showAddNew && (
        <div className="popup-container" >
          <div className="popup-contenttttt">
            <AddNew head="Un Posted Voucher" />
            <button className="bttn222" onClick={closeAddclick}>Close</button>
          </div>
        </div>
      )}
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
          <h4 className="salesh">Sr.No</h4>
          <h4 className="salesh">↑↓Document No</h4>
          <h4 className="salesh">↑↓Date</h4>
          <h4 className="salesh">↑↓Title</h4>
          <h4 className="salesh">↑↓Type</h4>
          <h4 className="salesh">↑↓Amount</h4>
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