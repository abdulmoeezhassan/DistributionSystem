import React  from "react";
import './addNew.css';


const AddNew = (props) => {

    return (
        <div > 
            <div>
                <div>
                    <h3 className="headd">{props.head}</h3>
                    <hr />
                </div>
                <div className="addC">
                    <div>
                        <label for="documentNo">Document No</label>
                        <input type="text" id="documentNo" name="documentNo" value="Auto Number" readonly />
                    </div>
                    <div>
                        <label for="documentNo">Document Base*</label>
                        <select id="documentNo" name="documentNo">
                            <option value="autoNumber">Select Base Ref</option>
                            <option value="autoNumber">Open</option>
                        </select>
                    </div>
                    <div>
                        <label for="documentNo">Base Ref*</label>
                        <input type="text" id="documentNo" name="documentNo" value="OPEN-00001" readonly />
                    </div>
                    <div>
                        <label for="documentNo">Document Date*</label>
                        <input type="Date" id="documentNo" name="documentNo" />

                    </div>
                </div>
                <div className="addC">
                    <div>
                        <label for="documentNo">Customer</label>
                        <select id="documentNoo" name="documentNo">
                            <option value="autoNumber">Select Base Ref</option>
                            <option value="autoNumber">Open</option>
                        </select>
                    </div>
                    <div>
                        <label for="documentNo">Reference No*</label>
                        <input type="text" id="documentNo" name="documentNo" value="" />
                    </div>
                    <div>
                        <label for="documentNo">Salesman*</label>
                        <select id="documentNo" name="documentNo">
                            <option value="autoNumber">PrimeCarePharma</option>
                        </select>
                    </div>
                </div>
                <div className="addC">
                    <div>
                        <label for="documentNo">Flat Tax*</label>
                        <select id="documentNo" name="documentNo">
                            <option value="autoNumber">Advance Tax 0% Rate:0</option>
                            <option value="autoNumber">Advance Tax 0.5% Rate:0.5</option>
                            <option value="autoNumber">Advance Tax 1% Rate:1</option>
                        </select>
                    </div>
                    <div>
                        <label for="documentNo">Base Curency*</label>
                        <input type="text" id="documentNo" name="documentNo" value="PKR" readonly />
                    </div>
                    <div>
                        <label for="documentNo">Curency</label>
                        <input type="text" id="documentNo" name="documentNo" value="PKR" readonly />
                    </div>
                    <div>
                        <label for="documentNo">Conversion Rate*</label>
                        <input type="text" id="documentNo" name="documentNo" value="1" readonly />
                    </div>
                </div>
                <div className="addC">
                    <div>
                        <label for="documentNo">Flat Tax Amount</label>
                        <input type="text" id="documentNo" name="documentNo" value="0" readonly />
                    </div>
                    <div>
                        <label for="Total Amount">Total Amount</label>
                        <input type="text" id="documentNo" name="documentNo" value="0" readonly />
                    </div>
                    <div>
                        <label for="documentNo">Flat Discount Am.</label>
                        <input type="text" id="documentNo" name="documentNo" value="0" readonly />
                    </div>
                    <div>
                        <label for="documentNo">Grand Total</label>
                        <input type="text" id="documentNo" name="documentNo" value="0" readonly />
                    </div>
                </div>
                <div className="addC">
                    <div>
                        <label for="documentNo" className="doc">Remarks</label>
                        <input type="text" id="documentNooo" name="documentNo" />
                    </div>
                </div>
                <div>
                    <div className="addC addc">
                        <button className="btn1">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default AddNew;