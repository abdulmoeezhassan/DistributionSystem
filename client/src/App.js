import 'bootstrap/dist/css/bootstrap.min.css';
import AnalyticalReports from './components/analyticalReports/analyticalReports';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MySidebar from './components/sidebar/sidebar';
import Salesinvoice from './components/SalesManagement/saleinvoice/saleInvoice';
import SalesEstimate from './components/SalesManagement/saleestimate/salesEstimate';
import SalesOrder from './components/SalesManagement/saleOrder/salesOrder';
import SalesQuotation from './components/SalesManagement/saleQuotation/salesQuotation';
import SalesReturn from './components/SalesManagement/salereturn/salesReturn';
import PurchaseReturn from './components/PurchaseManagement/PurchaseReturn/purchasereturn';
import PurchaseOrder from './components/PurchaseManagement/PurchaseOrder/purchaseorder';
import PurchaseInvoice from './components/PurchaseManagement/PurchaseInvoice/purchaseinvocie';
import BankPayment from './components/VoucherManagement/BankPayment/bankpayment';
import CashPayment from './components/VoucherManagement/CashPayment/cashpay';
import BankReceipt from './components/VoucherManagement/BankReceipt/bankreceipt';
import CashReceipt from './components/VoucherManagement/CashReceipt/cashrecp';
import JournalVoucher from './components/VoucherManagement/JournalVoucher/Journalvoucher.js';
import UnpostedVoucher from './components/VoucherManagement/unPostedVoucher/unpostedvouch.js';
import UnReconciled from './components/VoucherManagement/unReconciledVoucher/unRec.js';
import Customer from './components/CustomerManagement/Customer/customer.js';
import CustomerArea from './components/CustomerManagement/CustomerArea/customerArea.js';
import CustomerType from './components/CustomerManagement/CustomerType/customerType.js';
import SalesArea from './components/CustomerManagement/SalesArea/salesArea.js';
import Sales from './components/SuppplierManagement/Supplier/supplier.js';
import SupplierType from './components/SuppplierManagement/SupplierType/supplierType.js';
import Brand from './components/ProductManagement/Brand/brand.js';
import Category from './components/ProductManagement/Category/category.js';
import Manufacturer from './components/ProductManagement/Manufacturer/man.js';
import Packing from './components/ProductManagement/Packing/pack.js';
import Product from './components/ProductManagement/Product/prod.js';
import Type from './components/ProductManagement/Type/type.js';
import "./index.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>
            <MySidebar />
          </div>} />
          <Route
            path='/AnalyticalReports'
            element={
              <div className="app-container">
                <MySidebar />
                <AnalyticalReports />
              </div>
            }
          />
          <Route path='/SaleInvoice' element={<div><MySidebar />
            <Salesinvoice /></div>} />
          <Route path='/SalesEstimate' element={<div>
            <MySidebar />
            <SalesEstimate />
          </div>} />
          <Route path='/SalesOrder' element={<div>
            <MySidebar />
            <SalesOrder />
          </div>} />
          <Route path='/SalesQuotation' element={<div>
            <MySidebar />
            <SalesQuotation />
          </div>} />
          <Route path='/SalesReturn' element={<div>
            <MySidebar />
            <SalesReturn />
          </div>} />
          <Route path='/PurchaseReturn' element={<div>
            <MySidebar />
            <PurchaseReturn />
          </div>} />
          <Route path='/PurchaseOrder' element={<div>
            <MySidebar />
            <PurchaseOrder />
          </div>} />
          <Route path='/PurchaseInvoice' element={<div>
            <MySidebar />
            <PurchaseInvoice />
          </div>} />
          <Route path='/BankPayment' element={<div>
            <MySidebar />
            <BankPayment />
          </div>} />
          <Route path='/CashPayment' element={<div>
            <MySidebar />
            <CashPayment />
          </div>} />
          <Route path='/BankReceipt' element={<div>
            <MySidebar />
            <BankReceipt />
          </div>} />
          <Route path='/CashReceipt' element={<div>
            <MySidebar />
            <CashReceipt />
          </div>} />
          <Route path='/JournalVoucher' element={<div>
            <MySidebar />
            <JournalVoucher />
          </div>} />
          <Route path='/UnpostedVoucher' element={<div>
            <MySidebar />
            <UnpostedVoucher />
          </div>} />
          <Route path='/UnReconciledVoucher' element={<div>
            <MySidebar />
            < UnReconciled />
          </div>} />
          <Route path='/Customer' element={<div>
            <MySidebar />
            < Customer/>
          </div>} />
          <Route path='/CustomerArea' element={<div>
            <MySidebar />
            < CustomerArea/>
          </div>} />
          <Route path='/CustomerType' element={<div>
            <MySidebar />
            < CustomerType/>
          </div>} />
          <Route path='/SalesArea' element={<div>
            <MySidebar />
            < SalesArea/>
          </div>} />
          <Route path='/Supplier' element={<div>
            <MySidebar />
            < Sales/>
          </div>} />
          <Route path='/SupplierType' element={<div>
            <MySidebar />
            < SupplierType/>
          </div>} />
          <Route path='/Brand' element={<div>
            <MySidebar />
            < Brand/>
          </div>} />
          <Route path='/Category' element={<div>
            <MySidebar />
            < Category/>
          </div>} />
          <Route path='/Manufacturer' element={<div>
            <MySidebar />
            <Manufacturer/>
          </div>} />
          <Route path='/Packing' element={<div>
            <MySidebar />
            < Packing/>
          </div>} />
          <Route path='/Product' element={<div>
            <MySidebar />
            < Product/>
          </div>} />
          <Route path='/Type' element={<div>
            <MySidebar />
            < Type/>
          </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
