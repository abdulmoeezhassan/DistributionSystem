import 'bootstrap/dist/css/bootstrap.min.css';
import AnalyticalReports from './components/analyticalReports/analyticalReports';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MySidebar from './components/sidebar/sidebar';
import Salesinvoice from './components/SalesManagement/saleinvoice/saleInvoice';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
