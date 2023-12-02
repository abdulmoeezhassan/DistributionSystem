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
            <PurchaseOrder/>
          </div>} />
          <Route path='/PurchaseInvoice' element={<div>
            <MySidebar />
            <PurchaseInvoice/>
          </div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
