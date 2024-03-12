import React, { useState, useEffect } from "react";
import DesComp from './../../DescriptionComp/DesComp';
import axios from "axios";
import EditBtn from "../../../assets/edit-button.png";
import DeleteBtn from "../../../assets/trash-can.png";
import PrintBtn from "../../../assets/print.png";
import "./salesArea.css";

const Salesinvoice = () => {
  const [showAddNew, setShowAddNew] = useState(false);
  const [getNewData, setData] = useState([]);
  const [id, SetEditid] = useState(null);

  const handleAddNewClick = () => {
    console.log("Adding New Clicked");
    setShowAddNew(true);
  };
  const handleDelete = async (id) => {
    console.log("item id", id);
    try {
      const response = await axios.delete(`http://localhost:4000/SalesArea/${id}`);
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
    console.log("ID", id);
    handleAddNewClick();
  }
  const getData = async () => {
    try {
      const GetDATA = await axios.get("http://localhost:4000/SalesArea");
      if (GetDATA) {
        console.log("Data Fetched Successfully");
        setData(GetDATA.data);
        console.log(setData.data);
      }
      else {
        console.log("Error in fetching Data");
      }
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData();
  }, [])
  const closeAddclick = () => {
    setShowAddNew(false);
  }
  return (
    <div>
      <div className="headersales">
        <h5>Sales Area</h5>
        <button onClick={handleAddNewClick}>+|Add New</button>
      </div>
      {showAddNew && (
        <div className="popup-container" >
          <div className="popup-contentt">
            <DesComp head="Sales Area" apiendpoint="http://localhost:4000/SalesArea" id={id} />
            <button className="bttn2" onClick={closeAddclick}>Close</button>
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
          <label className="enteries">enteries</label>
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
              <th>↑↓Description</th>
              <th>↑↓Entry Date</th>
              <th>↑↓Action</th>
            </tr>
          </thead>
          <tbody>
            {
              getNewData.length > 0 ? (
                getNewData.map((item, index) => {
                  return (<tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.description}</td>
                    <td>{item.entry_date}</td>
                    <td>
                      <img src={DeleteBtn} alt="Delete Button" className="bbttn1" onClick={() => handleDelete(item.id)} />
                      <img src={EditBtn} alt="Edit Button" className="bbttn2" onClick={() => handleEditclick(item.id)} />
                      <img src={PrintBtn} alt="Print Button" className="bbttn3" />
                    </td>
                  </tr>)
                })
              ) : (
                <tr>
                  <td colSpan="10" className="data">No data available</td>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <div>
        <p className="footer">©2023 Copyright : <a href="https://www.codeswave.com" target="_blank" rel="noopener noreferrer" className="foot">codeswave</a></p>
      </div>
    </div>
  );
}

export default Salesinvoice;