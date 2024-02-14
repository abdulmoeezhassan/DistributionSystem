import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './supplierInfo.css';

const SupplierInfo = () => {
    const [activeKey, setActiveKey] = useState("#first");

    const handleNavSelect = (selectedKey) => {
        setActiveKey(selectedKey);
    };

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
                                    <input type="text" id="documentNo" name="documentNo" readOnly />
                                </div>
                                <div>
                                    <label for="documentNo">COAID</label>
                                    <input type="text" id="documentNo" name="documentNo" readOnly />
                                </div>
                                <div>
                                    <label for="documentNo"> Type</label>
                                    <input type="text" id="documentNo" name="documentNo"/>
                                </div>

                                <div>
                                    <label for="documentNo">Code</label>
                                    <input type="text" className="inp" id="documentNo" name="documentNo" />
                                </div>

                            </div> 
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Contact Person</label>
                                    <input type="text" id="documentNo" name="documentNo" />
                                </div>
                                <div>
                                    <label for="documentNo">Phone</label>
                                    <input type="text" id="documentNo" name="documentNo" />
                                </div>
                                <div>
                                    <label for="documentNo">City</label>
                                    <input type="text" id="documentNo" name="documentNo" />
                                </div>
                                <div>
                                    <label for="documentNo">Entry_Date</label>
                                    <input type="Date" className='inp' id="documentNo" name="documentNo" />
                                </div>
                            </div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Address</label>
                                    <input type="text" id="documentNo" name="documentNo" />
                                </div>
                                <div>
                                    <label for="Total Amount">Opening Balance</label>
                                    <input type="text" id="documentNo" name="documentNo" />
                                </div>
                                <div>
                                    <label for="documentNo">Name*</label>
                                    <input type="text" id="documentNo" name="documentNo" />
                                </div>
                            </div>
                            <div class="addC">
                                <label>Balance Type</label>
                                <div>
                                    <ul>
                                        <li>
                                            <input type="radio" id="option1" name="options" />
                                            <label for="option1" class="bullet-button">Debit</label>
                                        </li>
                                        <li>
                                            <input type="radio" id="option2" name="options" />
                                            <label for="option2" class="bullet-button">Credit</label>
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
                                    <input type="text" id="documentNo" name="documentNo"  />
                                </div>
                                <div>
                                    <label for="documentNo">Web</label>
                                    <input type="text" id="documentNo" name="documentNo"  />
                                </div>
                                <div>
                                    <label for="documentNo">Country</label>
                                    <select id="documentNo" name="documentNo">
                                        <option value="autoNumber">Pakistan</option>
                                        <option value="autoNumber">Germany</option>
                                    </select>
                                </div>

                                <div>
                                    <label for="documentNo">Email</label>
                                    <input type="text" id="documentNo" name="documentNo" />
                                </div>

                            </div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">NTN</label>
                                    <input type="text" id="documentNo" name="documentNo" />
                                </div>
                                <div>
                                    <label for="documentNo">STRN</label>
                                    <input type="text" id="documentNo" name="documentNo" />
                                </div>
                                <div>
                                    <label for="documentNo">Credit Limit</label>
                                    <input type="text" id="documentNo" name="documentNo" />
                                </div>
                            </div>
                            <div className="addC">
                                <div>
                                    <label for="documentNo">Credit Days</label>
                                    <input type="text" id="documentNo" name="documentNo" />
                                </div>
                                <div>
                                    <label for="Total Amount">License Number</label>
                                    <input type="text" id="documentNo" name="documentNo" />
                                </div>
                                <div>
                                    <label for="documentNo">License Expiry</label>
                                    <input type="date" id="documentNo" name="documentNo" />
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
            </Card.Body>
        </Card>
    );
}

export default SupplierInfo;
