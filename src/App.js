import 'bootstrap/dist/css/bootstrap.min.css';
import AnalyticalReports from './components/analyticalReports/analyticalReports';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/AnalyticalReports' Component={AnalyticalReports} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
