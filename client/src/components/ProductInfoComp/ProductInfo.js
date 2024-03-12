import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import './ProductInfo.css';

const ProductInfo = (props) => {
    const [activeKey, setActiveKey] = useState("#first");
    const [postData, setPostData] = useState({

        Product_Number: null,
        BarCode: null,
        Manufacturer: null,
        Code: null,
        Description: null,
        Brand: null,
        Packing: null,
        Product_Type: null,
        Category: null,
        Re_Order_Level: null,
        Name: null,
        Danger_Level: null,
        Sale_Price: null,
        Least_Price: null,
        Sale_Dis: null,
        MR_Price: null,
        Purchase_Price: null,
        Purchase_Dis: null,
        Supplier: null,
        Rate: null,
        Quantity: null,
        Unit_of_Meas: null,
        Expiry_Date: null,
        Batch: null,
        Product_Avail: null,
        Entry_Date: null,
        Image:null
    });

    const handleChange = (e) => {
        if (e.target.name === 'file') { 
            const selectedFile = e.target.files[0];
            setPostData(postData => ({
                ...postData,
                Image: selectedFile
            }));
            
        } else {
            const { value, name } = e.target;
            setPostData(postData => ({
                ...postData,
                [name]: value
            }));
        }
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

    // function handleFileSelect(event) {
    //     const selectedFile = event.target.files[0];
    //     if (selectedFile) {
    //         alert('Image selected successfully');
    //     }
    // }

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
                    const newUserData = {
                        BarCode: getDa.data[0].barcode,
                        Batch: getDa.data[0].batch,
                        Brand: getDa.data[0].brand,
                        Category: getDa.data[0].category,
                        Code: getDa.data[0].code,
                        Danger_Level: getDa.data[0].danger_level,
                        Description: getDa.data[0].description,
                        Entry_Date: getDa.data[0].entry_date,
                        Expiry_Date: getDa.data[0].expiry_date,
                        Least_Price: getDa.data[0].least_price,
                        MR_Price: getDa.data[0].mr_price,
                        Manufacturer: getDa.data[0].manufacturer,
                        Name: getDa.data[0].name,
                        Packing: getDa.data[0].packing,
                        Product_Avail: getDa.data[0].product_avail,
                        Product_Number: getDa.data[0].product_number,
                        Product_Type: getDa.data[0].product_type,
                        Purchase_Dis: getDa.data[0].purchase_dis,
                        Purchase_Price: getDa.data[0].purchase_price,
                        Quantity: getDa.data[0].quantity,
                        Rate: getDa.data[0].rate,
                        Re_Order_Level: getDa.data[0].re_order_level,
                        Sale_Dis: getDa.data[0].sale_dis,
                        Sale_Price: getDa.data[0].sale_price,
                        Supplier: getDa.data[0].supplier,
                        Unit_of_Meas: getDa.data[0].unit_of_meas,
                        Image: getDa.data[0].image,

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
        <Card className='cardbody'>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first" onSelect={handleNavSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="#first">Initial info</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="#link">General Pricing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="#third">Supplier Pricing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="#fourth">Unit of Measurement</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="#fifth">Batch Management</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="#six">Product Image</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body className='cardbody'>
                {activeKey === "#first" && (
                    <Card.Text className='cardbody'>
                        <div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Product Number</label>
                                    <input type="text" id="documentNo" name="Product_Number" value={postData.Product_Number || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo">Bar Code</label>
                                    <input type="text" id="documentNo" name="BarCode" value={postData.BarCode || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo"> Type</label>
                                    <input type="text" id="documentNo" name="Product_Type" value={postData.Product_Type || ''} onChange={handleChange} />
                                </div>

                                <div>
                                    <label for="documentNo">Code</label>
                                    <input type="text" className="inp" id="documentNo" name="Code" value={postData.Code || ''} onChange={handleChange} />
                                </div>

                            </div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Manufacturer</label>
                                    <input type="text" id="documentNo" name="Manufacturer" value={postData.Manufacturer || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="Total Amount">Description</label>
                                    <input type="text" id="documentNo" name="Description" value={postData.Description || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo">Name*</label>
                                    <input type="text" id="documentNo" name="Name" value={postData.Name || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo">Danger Level</label>
                                    <input type="text" id="documentNo" name="Danger_Level" value={postData.Danger_Level || ''} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Re Order Level</label>
                                    <input type="text" id="documentNo" name="Re_Order_Level" value={postData.Re_Order_Level || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo">Category</label>
                                    <input type="text" id="documentNo" name="Category" value={postData.Category || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo">Packing</label>
                                    <input type="text" id="documentNo" name="Packing" value={postData.Packing || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo">Brand</label>
                                    <input type="text" className='inp' id="documentNo" name="Brand" value={postData.Brand || ''} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Entry Date</label>
                                    <input type="date" id="documentNo" name="Entry_Date" value={postData.Entry_Date || ''} onChange={handleChange} />
                                </div>
                            </div>

                            <div className="addC">
                                <label>Is Service</label>
                                <div>
                                    <ul>
                                        <li>
                                            <input
                                                type="radio"
                                                id="option1"
                                                name="Product_Avail"
                                                value="Available"
                                                checked={postData.Product_Avail === 'Available'}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="option1" className="bullet-button">Is Product</label>
                                        </li>
                                        <li>
                                            <input
                                                type="radio"
                                                id="option2"
                                                name="Product_Avail"
                                                value="Out of Stock"
                                                checked={postData.Product_Avail === 'Out of Stock'}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="option2" className="bullet-button">Is Service</label>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                            <div>
                                <div className="addC addc">
                                    <p><h4 className='note'>Note:</h4>Is Service tagged Product will have no Stock and It will consider the Non-Stock Item.</p>
                                </div>
                            </div>
                            <div>
                                <div className="addC addc">
                                    <button className="btn121" onClick={SaveData}>Save</button>
                                </div>
                            </div>
                        </div>
                    </Card.Text>
                )}
                {activeKey === "#link" && (
                    <Card.Text>
                        <div className='cardbody'>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">MR Price</label>
                                    <input type="text" id="documentNo" name="MR_Price" value={postData.MR_Price || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo">Sale Price(TP)</label>
                                    <input type="text" id="documentNo" name="Sale_Price" value={postData.Sale_Price || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo">Least Price</label>
                                    <input type="text" id="documentNo" name="Least_Price" value={postData.Least_Price || ''} onChange={handleChange} />
                                </div>
                            </div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Sale Dis</label>
                                    <input type="text" id="documentNo" name="Sale_Dis" value={postData.Sale_Dis || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo">Purcahse Price</label>
                                    <input type="text" id="documentNo" name="Purchase_Price" value={postData.Purchase_Price || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo">Purcahse Dis</label>
                                    <input type="text" id="documentNo" name="Purchase_Dis" value={postData.Purchase_Dis || ''} onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <div className="addC addc">
                                    <button className="btn121" onClick={SaveData}>Save</button>
                                </div>
                            </div>
                        </div>
                    </Card.Text>
                )}
                {activeKey === "#third" && (
                    <Card.Text>
                        <div className='cardbody'>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Supplier</label>
                                    <input type="text" id="documentNo" name="Supplier" value={postData.Supplier || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo">Rate</label>
                                    <input type="text" id="documentNo" name="Rate" value={postData.Rate || ''} onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <div className="addC addc">
                                    <button className="btn121" onClick={SaveData}>Save</button>
                                </div>
                            </div>
                        </div>
                    </Card.Text>
                )}
                {activeKey === "#fourth" && (
                    <Card.Text>
                        <div className='cardbody'>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Unit of Measurement</label>
                                    <input type="text" id="documentNo" name="Unit_of_Meas" value={postData.Unit_of_Meas || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo">Quantity</label>
                                    <input type="text" id="documentNo" name="Quantity" value={postData.Quantity || ''} onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <div className="addC addc">
                                    <button className="btn121" onClick={SaveData}>Save</button>
                                </div>
                            </div>
                        </div>
                    </Card.Text>
                )}
                {activeKey === "#fifth" && (
                    <Card.Text>
                        <div className='cardbody'>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Batch/Lot</label>
                                    <input type="text" id="documentNo" name="Batch" value={postData.Batch || ''} onChange={handleChange} />
                                </div>
                                <div>
                                    <label for="documentNo">Expiry Date</label>
                                    <input type="date" id="documentNo" name="Expiry_Date" value={postData.Expiry_Date || ''} onChange={handleChange} />
                                </div>
                            </div>
                            <div>
                                <div className="addC addc">
                                    <button className="btn121" onClick={SaveData}>Save</button>
                                </div>
                            </div>
                        </div>
                    </Card.Text>
                )}
                {activeKey === "#six" && (
                    <Card.Text>
                        <div className='cardbody'>
                            <div><p>Product Image</p>
                                <input type='file' name='file' onChange={handleChange} />
                                <h4 className='note'>Note:</h4>
                                <p>The Product Image will be replace with new uploaded One.</p>
                            </div>
                            <div>
                                <div className="addC addc">
                                    <button className="btn121" onClick={SaveData}>Save</button>
                                </div>
                            </div>
                        </div>
                    </Card.Text>
                )}
            </Card.Body>
        </Card>
    );
}

export default ProductInfo;
