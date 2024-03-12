import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Salesinvoice.css";
import AddNew from "../../AddNewComp/AddNew";
import EditBtn from "../../../assets/edit-button.png";
import DeleteBtn from "../../../assets/trash-can.png";
import PrintBtn from "../../../assets/print.png";

const Salesinvoice = () => {
  const [showAddNew, setShowAddNew] = useState(false);
  const [getData, setData] = useState([]);
  const [id, SetEditid] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:4000/salesInvoice");
        if (response) {
          console.log("Data fetched Successfully");
          setData(response.data); // Update state with fetched data
          console.log(response);
        } else {
          console.log("Error in fetching data");
        }
      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    console.log("item id", id);
    try {
      const response = await axios.delete(`http://localhost:4000/salesInvoice/${id}`);
      alert("Deleted Successfully");
      if (response) {
        alert("Deleted Successfully");
      } else {
        console.error('Failed to delete item');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  }

  const handleEditclick = (id) => {
    SetEditid(id);
    console.log("ID",id);
    handleAddNewClick();
  }
  // const handleUpdate = (id) => {

  // }
  const handleAddNewClick = () => {
    setShowAddNew(true);
  };

  const closeAddclick = () => {
    setShowAddNew(false);
  }

  return (
    <div className="headSales">
      <div className="headersales">
        <h5>Sales Invoice</h5>
        <button onClick={handleAddNewClick}>+|Add New</button>
      </div>

      {showAddNew && (
        <div className="popup-container" >
          <div className="popup-contenttt">
            <AddNew head="Sales Invoice" apiendpoint="http://localhost:4000/salesInvoice" id={id} />
            <button className="btttn2" onClick={closeAddclick}>Close</button>
          </div>
        </div>
      )}

      {/* <div className="sales">
        <div className="sales-1">
          <label>Show</label>
          <select className="input">
            <option>10</option>
            <option>25</option>
            <option>50</option>
            <option>100</option>
          </select>
          <label className="enteries">entries</label>
        </div>
        <div className="search">
          <label>Search:</label>
          <input type="text" placeholder="Search here" className="input" />
        </div>
      </div> */}

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>↑↓Sr.No</th>
              <th>↑↓Document No</th>
              <th>↑↓Date</th>
              <th>↑↓Document BASE</th>
              <th>↑↓Base Ref No</th>
              <th>↑↓Customer</th>
              <th>↑↓Net Amount</th>
              <th>↑↓Entry User</th>
              <th>↑↓Entry Date</th>
              <th>↑↓Action</th>
            </tr>
          </thead>
          <tbody>
            {getData.length > 0 ? (
              getData.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.document_no}</td>
                  <td>{item.document_date}</td>
                  <td>{item.document_base}</td>
                  <td>{item.base_ref_no}</td>
                  <td>{item.customer}</td>
                  <td>{item.grand_total}</td>
                  <td>{item.entry_user}</td>
                  <td>{item.entry_date}</td>
                  <td>
                    <img src={DeleteBtn} alt="Delete Button" className="bbttn1" onClick={() => handleDelete(item.id)} />
                    <img src={EditBtn} alt="Edit Button" className="bbttn2" onClick={() => handleEditclick(item.id)} />
                    <img src={PrintBtn} alt="Print Button" className="bbttn3" />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="10" className="data">No data available</td>
              </tr>
            )}

          </tbody>

        </table>
      </div>

      <div>
        <p className="footer">
          ©2023 Copyright :
          <a href="https://www.codeswave.com" target="_blank" rel="noopener noreferrer" className="foot">
            codeswave
          </a>
        </p>
      </div>
    </div>
  );
};

export default Salesinvoice;
