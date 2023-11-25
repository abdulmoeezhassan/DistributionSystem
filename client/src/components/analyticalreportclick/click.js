import React from "react";
import "./click.css";


const Click = (props) => {

    return (
        <div>
            <p className="para">{props.head}</p>
            {props.showdiv1 && (<div id="1" className="zone-div">
                <label htmlFor="countryDropdown" className="lab">Zone</label>
                <select id="countryDropdown">
                    <option value="usa" >Select Country</option>
                    <option value="usa" className="opt">Pakistan</option>
                </select>
            </div>)}

            {props.showdiv2 && (<div id="2" className="zone-div">
                <label htmlFor="countryDropdown">Sales Area</label>
                <select id="countryDropdown">
                    <option value="usa">All Sales Area</option>
                </select>
            </div>)}
            {props.showdiv3 && (<div id="3" className="zone-div">
                <label htmlFor="countryDropdown">Bank</label>
                <select id="countryDropdown">
                    <option value="usa">Select Bank</option>
                </select>
            </div>)}
            {props.showdiv4 && (<div id="4" className="zone-div">
                <label htmlFor="countryDropdown">Bank Account</label>
                <select id="countryDropdown">
                    <option value="usa">All Bank</option>
                </select>
            </div>)}
            {props.showdiv5 && (<div id="5" className="zone-div">
                <label htmlFor="countryDropdown">Currency</label>
                <select id="countryDropdown">
                    <option value="usa">PKR</option>
                </select>
            </div>)}
            {props.showdiv6 && (<div id="6" className="zone-div">
                <label htmlFor="countryDropdown">Supplier Type</label>
                <select id="countryDropdown">
                    <option value="usa">All SupplierType</option>
                </select>
            </div>)}
            {props.showdiv7 && (<div id="7" className="zone-div">
                <label htmlFor="countryDropdown">City</label>
                <select id="countryDropdown">
                    <option value="usa">All City</option>
                </select>
            </div>)}
            {props.showdiv8 && (<div id="8" className="zone-div">
                <label htmlFor="countryDropdown">Customer Type</label>
                <select id="countryDropdown">
                    <option value="usa">All Customer Type</option>
                </select>
            </div>)}
            {props.showdiv9 && (<div id="9" className="zone-div">
                <label htmlFor="countryDropdown">Customer</label>
                <select id="countryDropdown">
                    <option value="usa">All Customer</option>
                </select>
            </div>)}
            {props.showdiv10 && (<div id="10" className="zone-div">
                <label htmlFor="countryDropdown">Area</label>
                <select id="countryDropdown">
                    <option value="usa">All Area</option>
                </select>
            </div>)}
            {props.showdiv11 && (<div id="11" className="btn">
                <button className="btn1">Print Preview</button>
                <button className="btn2" id="cancelButton" >Cancel</button>
            </div>)}
            {props.showdiv12 && (<div id="12" className="zone-div">
                <label htmlFor="countryDropdown">Date</label>
                <input type="date" />
            </div>)}
            {props.showdiv13 && (<div id="13" className="zone-div">
                <label htmlFor="countryDropdown">Tax Type</label>
                < select id="countryDropdown">
                    <option value="usa">All Tax type</option>
                    <option value="usa">Tax Assets</option>
                    <option value="usa">Tax Liability</option>
                </select>
            </div>)}
            {props.showdiv14 && (<div id="14" className="zone-div">
                <label htmlFor="countryDropdown">Account Head</label>
                < select id="countryDropdown">
                    <option value="usa">All Account Head</option>
                </select>
            </div>)}
            {props.showdiv15 && (<div id="15" className="zone-div">
                <label htmlFor="countryDropdown">Product</label>
                < select id="countryDropdown">
                    <option value="usa">All Products</option>
                </select>
            </div>)}
            {props.showdiv16 && (<div id="16" className="zone-div">
                <label htmlFor="countryDropdown">Supplier</label>
                < select id="countryDropdown">
                    <option value="usa">All Supplier</option>
                </select>
            </div>)}
            {props.showdiv17 && (<div id="16" className="zone-div">
                <label htmlFor="countryDropdown">Account Nature</label>
                < select id="countryDropdown">
                    <option value="usa">All Account Nature</option>
                </select>
            </div>)}
            {props.showdiv18 && (<div id="16" className="zone-div">
                <label htmlFor="countryDropdown">Account Type</label>
                < select id="countryDropdown">
                    <option value="usa">All Account Type</option>
                </select>
            </div>)}
            {props.showdiv19 && (<div id="16" className="zone-div">
                <label htmlFor="countryDropdown">Manufacturer</label>
                < select id="countryDropdown">
                    <option value="usa">All Manufacturers</option>
                </select>
            </div>)}
            {props.showdiv20 && (<div id="16" className="zone-div">
                <label htmlFor="countryDropdown">Category</label>
                < select id="countryDropdown">
                    <option value="usa">All Category</option>
                </select>
            </div>)}
            {props.showdiv21 && (<div id="16" className="zone-div">
                <label htmlFor="countryDropdown">Expiry Date</label>
                <input type="text" />
            </div>)}
            {props.showdiv22 && (<div id="16" className="zone-div">
                <label htmlFor="countryDropdown">Salesman</label>
                < select id="countryDropdown">
                    <option value="usa">Salesman Type</option>
                </select>
            </div>)}
            {props.showdiv23 && (<div id="16" className="zone-div">
                <label htmlFor="countryDropdown">Type</label>
                < select id="countryDropdown">
                    <option value="usa">All type</option>
                </select>
            </div>)}
        </div>

    );
};
export default Click;