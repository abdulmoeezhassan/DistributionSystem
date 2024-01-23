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
                        <Link to="/AnalyticalReports" className='analy analyy'>
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
                            <Link to='/JournalVoucher' className='analy'>
                            <MenuItem>Journal Voucher</MenuItem>
                            </Link>
                            <Link to="/BankPayment" className='analy'>
                            <MenuItem>Bank Payment</MenuItem>
                            </Link>
                            <Link to='/CashPayment' className='analy'>
                            <MenuItem>Cash Payment</MenuItem>
                            </Link>
                            <Link to='/BankReceipt' className='analy'>
                            <MenuItem>Bank Receipt</MenuItem>
                            </Link>
                            <Link to='/CashReceipt' className='analy'>
                            <MenuItem>Cash Receipt</MenuItem>
                            </Link>
                            <Link to="/UnpostedVoucher" className='analy'>
                            <MenuItem>Unposted Voucher</MenuItem>
                            </Link>
                            <Link to="/UnReconciledVoucher" className='analy'>
                            <MenuItem>Un Reconciled Voucher</MenuItem>
                            </Link>
                        </SubMenu>
                        <SubMenu label="Customer Management">
                            <Link to="/Customer" className='analy'>
                            <MenuItem>Customer</MenuItem>
                            </Link>
                            <Link to="/CustomerType" className='analy'>
                            <MenuItem>Customer Type</MenuItem>
                            </Link>
                            <Link to='/CustomerArea' className='analy'>
                            <MenuItem>Customer Area</MenuItem>
                            </Link>
                            <Link to="/SalesArea" className='analy'>
                            <MenuItem>Sales Area</MenuItem>
                            </Link>
                        </SubMenu>
                        <SubMenu label="Supplier Management">
                            <Link to="/Supplier" className='analy'>
                            <MenuItem>Supplier</MenuItem>
                            </Link>
                            <Link to="/SupplierType" className='analy'>
                            <MenuItem>Supplier Type</MenuItem>
                            </Link>
                        </SubMenu>
                        <SubMenu label="Product Management" >
                            <Link to='/Product' className='analy'>
                            <MenuItem>Product</MenuItem>
                            </Link>
                            <Link to='/Type' className='analy'>
                            <MenuItem>Type</MenuItem>
                            </Link>
                            <Link to='/Category' className='analy'>
                            <MenuItem>Category</MenuItem>
                            </Link>
                            <Link to='/Packing' className='analy'>
                            <MenuItem>Packing</MenuItem>
                            </Link>
                            <Link to='/Brand' className='analy'>
                            <MenuItem>Brand</MenuItem>
                            </Link>
                            <Link to='/Manufacturer' className='analy'>
                            <MenuItem>Manufacturer</MenuItem>
                            </Link>
                        </SubMenu>
                        <MenuItem icon={<FontAwesomeIcon icon={faList} />}>Orders</MenuItem>
                    </Menu>

                </Sidebar> 
            </div>
        </div>
    );
}

export default MySidebar;