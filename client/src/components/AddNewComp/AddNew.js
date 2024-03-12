import React, { useState, useEffect } from "react";
import axios from "axios";
import './addNew.css';


const AddNew = (props) => {
    const[show,setshow]=useState(false);
    const handleshow=()=>{
        setshow(true);
    }
    const [postData, setPostData] = useState({

        Base_Currency: null,
        BASE_REF_NO: null,
        Currency: null,
        Customer: null,
        Document_BASE: null,
        Document_DATE: null,
        Document_No: null,
        Entry_Date: null,
        Entry_User: null,
        Flat_Discount_Amount: null,
        Flat_Tax: null,
        Flat_Tax_Amount: null,
        Grand_Total: null,
        Remarks: null,
        Salesman: null,
        Total_Amount: null
    });



    const handleChange = (e) => {
        console.log('Event:', e);   
        const { name, value } = e.target;
        console.log('Name:', name, 'Value:', value); 
        setPostData(postData => ({
            ...postData,
            [name]: value
        }));
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

    useEffect(() => {
        const getdata = async () => {
            try {
                const getDa = await axios.get(`${props.apiendpoint}/${props.id}`);
                if (getDa) {
                    console.log("Data fetched Successfully of id", props.id);
                    console.log(getDa);
                    const newUserData={
                        Base_Currency:getDa.data[0].base_currency,
                        BASE_REF_NO:getDa.data[0].base_ref_no,
                        Currency:getDa.data[0].currency,
                        Customer:getDa.data[0].customer,
                        Document_BASE:getDa.data[0].document_base,
                        Document_DATE:getDa.data[0].document_date,
                        Document_No:getDa.data[0].document_no,
                        Entry_Date:getDa.data[0].entry_date,
                        Entry_User:getDa.data[0].entry_user,
                        Flat_Discount_Amount:getDa.data[0].flat_discount_amount,
                        Flat_Tax:getDa.data[0].flat_tax,
                        Flat_Tax_Amount:getDa.data[0].flat_tax_amount,
                        Grand_Total:getDa.data[0].grand_total,
                        Remarks:getDa.data[0].remarks,
                        Salesman:getDa.data[0].salesman,
                        Total_Amount:getDa.data[0].total_amount,
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
    }, [props.id,props.apiendpoint]);

    console.log("postData:", postData);

    return (
        <div >
            <div>
                <div>
                    <h3 className="headd">{props.head}</h3>
                    <hr />
                </div>
                <div className="addC">
                    <div>
                        <label htmlFor="documentNo">Document No</label>
                        <input type="text" id="documentNo" name="Document_No" value={postData.Document_No ||""} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="documentDate">Document Date*</label>
                        <input type="date" id="documentDate" name="Document_DATE" value={postData.Document_DATE ||""} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="documentBase">Document Base*</label>
                        <input type="text" id="documentBase" name="Document_BASE" value={postData.Document_BASE ||""} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="baseRef">Base Ref*</label>
                        <input type="text" id="baseRef" name="BASE_REF_NO" value={postData.BASE_REF_NO ||""} onChange={handleChange} />
                    </div>
                </div>
                <div className="addC">
                    <div>
                        <label htmlFor="customer">Customer</label>
                        <input type="text" id="customer" name="Customer" value={postData.Customer ||""} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="entryUser">Entry User</label>
                        <input type="text" id="entryUser" name="Entry_User" value={postData.Entry_User ||""} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="salesman">Salesman*</label>
                        <input type="text   " id="salesman" name="Salesman" value={postData.Salesman ||""} onChange={handleChange} />
                    </div>
                    <div>
                        <button className="addProd" onClick={handleshow}>Add Products</button>
                        {show&&(
                            <div>
                                

                            </div>
                        )}
                    </div>

                </div>
                <div className="addC">
                    <div>
                        <label htmlFor="flatTax">Flat Tax*</label>
                        <select id="flatTax" name="Flat_Tax" onChange={handleChange}>
                            <option value="0">Advance Tax 0% Rate:0</option>
                            <option value="0.5">Advance Tax 0.5% Rate:0.5</option>
                            <option value="1">Advance Tax 1% Rate:1</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="baseCurrency">Base Currency*</label>
                        <input type="text" id="baseCurrency" name="Base_Currency" value={postData.Base_Currency ||""} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="currency">Currency</label>
                        <input type="text" id="currency" name="Currency" value={postData.Currency ||""} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="entryDate">Entry Date</label>
                        <input type="date" id="entryDate" name="Entry_Date" value={postData.Entry_Date ||""} onChange={handleChange} />
                    </div>
                </div>
                <div className="addC">
                    <div>
                        <label htmlFor="flatTaxAmount">Flat Tax Amount</label>
                        <input type="text" id="flatTaxAmount" name="Flat_Tax_Amount" value={postData.Flat_Tax_Amount ||""} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="totalAmount">Total Amount</label>
                        <input type="text" id="totalAmount" name="Total_Amount" value={postData.Total_Amount ||""} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="flatDiscount">Flat Discount Am.</label>
                        <input type="text" id="flatDiscount" name="Flat_Discount_Amount" value={postData.Flat_Discount_Amount ||""} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="grandTotal">Grand Total</label>
                        <input type="text" id="grandTotal" name="Grand_Total" value={postData.Grand_Total ||""} onChange={handleChange} />
                    </div>
                </div>
                <div className="addC">
                    <div>
                        <label htmlfor="remarks" className="doc">Title</label>
                        <input type="text" id="documentNooo" name="Remarks" value={postData.Remarks ||""} onChange={handleChange} />
                    </div>
                </div>

                <div>
                    <div className="addC addc">
                        <button className="bttn1" onClick={SaveData}>Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AddNew;