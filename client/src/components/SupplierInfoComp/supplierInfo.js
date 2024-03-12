import React, { useState,useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import './supplierInfo.css';

const SupplierInfo = (props) => {
    const [activeKey, setActiveKey] = useState("#first");
    const [postData, setPostData] = useState({

        Supplier_Number: null,
        COAID: null,
        Supplier_Type: null,
        Code: null,
        Contact_Person: null,
        Phone: null,
        City: null,
        Address: null,
        Opening_Balance: null,
        Name: null,
        Balance_Type: null,
        Entry_Date:null,
        Fax: null,
        Web: null,
        Country: null,
        Email: null,
        NTN: null,
        STRN: null,
        Credit_Limit: null,
        Credit_Days: null,
        Lincense_Number: null,
        Lincense_Expiry: null

    });

    const handleChange = (e) => {
        const { value, name } = e.target;
        setPostData(postData => ({
            ...postData,
            [name]: value
        }))
    };
    
    const SaveData = async (e) => {
        e.preventDefault();
        try {
            if (props.id === null) {
                const post = await axios.post(props.apiendpoint, postData);
                if (post) {
                    console.log("Saved Data Successfully");
                    alert("Saved Successfully");
                }
            } else {
                const update = await axios.put(`${props.apiendpoint}/${props.id}`, postData);
                if (update) {
                    console.log("Updated Successfully");
                    alert("Update Successfully");
                }
            }
            
        } catch (error) {
            console.log(error);
        }

    }


    const handleNavSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    };
    useEffect(() => {
        const getdata = async () => {
            try {
                const getDa = await axios.get(`${props.apiendpoint}/${props.id}`);
                if (getDa) {
                    console.log("Data fetched Successfully of id", props.id);
                    console.log(getDa);
                    const newUserData={
                        Supplier_Number:getDa.data[0].supplier_number,
                        COAID:getDa.data[0].coaid,
                        Supplier_Type:getDa.data[0].supplier_type,
                        Code:getDa.data[0].code,
                        Contact_Person:getDa.data[0].contact_person,
                        Phone:getDa.data[0].phone,
                        City:getDa.data[0].city,
                        Entry_Date:getDa.data[0].entry_date,
                        Address:getDa.data[0].address,
                        Opening_Balance:getDa.data[0].opening_balance,
                        Name:getDa.data[0].name,
                        Balance_Type:getDa.data[0].balance_type,
                        Fax:getDa.data[0].fax,
                        Web:getDa.data[0].web,
                        Country:getDa.data[0].country,
                        Email:getDa.data[0].email,
                        NTN:getDa.data[0].ntn,
                        STRN:getDa.data[0].strn,
                        Credit_Limit:getDa.data[0].credit_limit,
                        Credit_Days:getDa.data[0].credit_days,
                        Lincense_Number:getDa.data[0].lincense_number,
                        Lincense_Expiry:getDa.data[0].lincense_expiry,
    
                    };
                    setPostData(newUserData);
                } else {
                    console.log("Error in fetching data");
                }
            } catch (error) {
                console.log(error);
            }
        }; 
    
        const fetchData = async () => {
            if (props.id) {
                getdata();
            }
        };
    
        fetchData();
    }, [props.id, props.apiendpoint]);

    console.log("postData:", postData);


    return (
        <Card>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first" onSelect={handleNavSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="#first">Initial info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="#link">Advance info</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                {activeKey === "#first" && (
                    <Card.Text>
                        <div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Number</label>
                                    <input type="text" id="documentNo" name="Supplier_Number" value={postData.Supplier_Number || ''} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label for="documentNo">COAID</label>
                                    <input type="text" id="documentNo" name="COAID" value={postData.COAID || ''} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label for="documentNo"> Type</label>
                                    <input type="text" id="documentNo" name="Supplier_Type" value={postData.Supplier_Type || ''} onChange={handleChange}/>
                                </div>

                                <div>
                                    <label for="documentNo">Code</label>
                                    <input type="text" className="inp" id="documentNo" name="Code" value={postData.Code || ''} onChange={handleChange}/>
                                </div>

                            </div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Contact Person</label>
                                    <input type="text" id="documentNo" name="Contact_Person" value={postData.Contact_Person || ''} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label for="documentNo">Phone</label>
                                    <input type="text" id="documentNo" name="Phone" value={postData.Phone || ''} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label for="documentNo">City</label>
                                    <input type="text" id="documentNo" name="City" value={postData.City || ''} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label for="documentNo">Entry Date</label>
                                    <input type="date" id="documentNo" name="Entry_Date" value={postData.Entry_Date || ''} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Address</label>
                                    <input type="text" id="documentNo" name="Address" value={postData.Address || ''} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label for="Total Amount">Opening Balance</label>
                                    <input type="text" id="documentNo" name="Opening_Balance" value={postData.Opening_Balance || ''} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label for="documentNo">Name*</label>
                                    <input type="text" id="documentNo" name="Name" value={postData.Name || ''} onChange={handleChange}/>
                                </div>
                              
                            </div>
                            <div className="addC">
                                <label>Balance Type</label>
                                <div>
                                    <ul>
                                        <li>
                                            <input type="radio" id="option1" name="Balance_Type" value="Debit" checked={postData.Balance_Type === 'Debit'} onChange={handleChange} />
                                            <label htmlFor="option1" className="bullet-button">Debit</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="option2" name="Balance_Type" value="Credit" checked={postData.Balance_Type === 'Credit'} onChange={handleChange} />
                                            <label htmlFor="option2" className="bullet-button">Credit</label>
                                        </li>
                                    </ul>
                                </div>
                               
                            </div>
                            <div>
                                <div className="addC addc">
                                    <button className="btn1">Save</button>
                                </div>
                            </div>
                        </div>
                    </Card.Text>
                )}
                {activeKey === "#link" && (
                    <Card.Text>
                        <div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Fax</label>
                                    <input type="text" id="documentNo" name="Fax" value={postData.Fax || ''} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label for="documentNo">Web</label>
                                    <input type="text" id="documentNo" name="Web" value={postData.Web || ''} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label for="documentNo">Country</label>
                                    <input type="text" id="documentNo" name="Country" value={postData.Country || ''} onChange={handleChange}/>
                                </div>

                                <div>
                                    <label for="documentNo">Email</label>
                                    <input type="text" id="documentNo" name="Email" value={postData.Email || ''} onChange={handleChange}/>
                                </div>

                            </div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">NTN</label>
                                    <input type="text" id="documentNo" name="NTN" value={postData.NTN || ''} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label for="documentNo">STRN</label>
                                    <input type="text" id="documentNo" name="STRN" value={postData.STRN || ''} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label for="documentNo">Credit Limit</label>
                                    <input type="text" id="documentNo" name="Credit_Limit" value={postData.Credit_Limit || ''} onChange={handleChange}/>
                                </div>
                            </div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Credit Days</label>
                                    <input type="text" id="documentNo" name="Credit_Days" value={postData.Credit_Days || ''} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label for="Total Amount">License Number</label>
                                    <input type="text" id="documentNo" name="Lincense_Number" value={postData.Lincense_Number || ''} onChange={handleChange}/>
                                </div>
                                <div>
                                    <label for="documentNo">License Expiry</label>
                                    <input type="date" id="documentNo" name="Lincense_Expiry" value={postData.Lincense_Expiry || ''} onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <div className="addC addc">
                                    <button className="btn1" onClick={SaveData}>Save</button>
                                </div>
                            </div>
                        </div>
                    </Card.Text>
                )}
            </Card.Body>
        </Card>
    );
}

export default SupplierInfo;
