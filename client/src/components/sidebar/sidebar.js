import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faList } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';
import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from 'react-router-dom';

function MySidebar() {
    // State to manage the visibility of the sidebar
    const [collapsed, setCollapsed] = useState(false);

    // Toggle the sidebar visibility
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    return (
        <div className="my-sidebar-container">
            <div className={`my-sidebar ${collapsed ? 'collapsed' : 'expanded'}`}>

                <Sidebar collapsed={collapsed}>
                    <div className="toggle-button-container">
                        <button onClick={toggleSidebar} className="toggle-button toggl">
                            <FontAwesomeIcon icon={collapsed ? faList : faList} />
                        </button>
                    </div>
                    <Menu iconShape="square">
                        <MenuItem icon={<FontAwesomeIcon icon={faGem} />}>Dashboard</MenuItem>
                        <Link to="/AnalyticalReports" className='analy'>
                            <MenuItem >Analytical Reports</MenuItem>
                        </Link>
                        <SubMenu label="Sales Management">
                            <Link to="/SaleInvoice" className='analy'> <MenuItem>Sales Invoice</MenuItem></Link>
                            <Link to='/SalesReturn' className='analy'>
                                <MenuItem>Sales Return</MenuItem></Link>
                            <Link to="/SalesEstimate" className='analy'>
                                <MenuItem>Sales Estimate</MenuItem>
                            </Link>
                            <Link to='/SalesOrder' className='analy'>
                                <MenuItem>Sales Order</MenuItem></Link>
                            <Link to='/SalesQuotation' className='analy'>
                                <MenuItem>Sales Quotation</MenuItem></Link>
                        </SubMenu>
                        <SubMenu label="Purchase Management">
                            <Link to="/PurchaseInvoice" className='analy'>
                            <MenuItem>Purchase Invoice</MenuItem></Link>
                            <Link to="/PurchaseReturn" className='analy'>
                            <MenuItem>Purchase Return</MenuItem></Link>
                            <Link to="/PurchaseOrder" className='analy'>
                            <MenuItem>Purchase Order</MenuItem></Link>
                        </SubMenu>
                        <SubMenu label="Voucher Management" >
                            <MenuItem>Journal Voucher</MenuItem>
                            <MenuItem>Bank Payment</MenuItem>
                            <MenuItem>Cash Payment</MenuItem>
                            <MenuItem>Bank Receipt</MenuItem>
                            <MenuItem>Cash Receipt</MenuItem>
                            <MenuItem>Unposted Voucher</MenuItem>
                            <MenuItem>Un Reconciled Voucher</MenuItem>
                        </SubMenu>
                        <SubMenu label="Customer Management">
                            <MenuItem>Customer</MenuItem>
                            <MenuItem>Customer Type</MenuItem>
                            <MenuItem>Customer Area</MenuItem>
                            <MenuItem>Sales Area</MenuItem>
                        </SubMenu>
                        <SubMenu label="Supplier Management">
                            <MenuItem>Supplier</MenuItem>
                            <MenuItem>Supplier Type</MenuItem>
                        </SubMenu>
                        <SubMenu label="Product Management" >
                            <MenuItem>Product</MenuItem>
                            <MenuItem>Type</MenuItem>
                            <MenuItem>Category</MenuItem>
                            <MenuItem>Packing</MenuItem>
                            <MenuItem>Brand</MenuItem>
                            <MenuItem>Manufacturer</MenuItem>
                        </SubMenu>
                        <MenuItem icon={<FontAwesomeIcon icon={faList} />}>Orders</MenuItem>
                    </Menu>

                </Sidebar>
            </div>
        </div>
    );
}

export default MySidebar;