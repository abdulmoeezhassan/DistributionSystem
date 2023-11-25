import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./analyticalReports.css";
import Click from "../analyticalreportclick/click";
import { useState } from "react";


function AnalyticalReports() {
  const [showdiv, setShowDiv] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false]);
  const toggle = (index) => {
    const updateddivs = [...showdiv];
    updateddivs[index] = !updateddivs[index];
    setShowDiv(updateddivs);
  };

  return (
    <Container className="analytical">
      <h2 className="head">AnalyticalReports</h2>
      {/*Row 1 */}
      <Row>
        <Col className="card1">
          <div>
            <h4 className=" head2" >Sales Reports</h4>
            <hr className="hr hr1" />
            <h4 className="head1" onClick={() => toggle(46)}>Sales Summary</h4>
            {showdiv[46] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[46]} head="Customer Summary Report" />
                  <Click showdiv8={showdiv[46]} />
                  <Click showdiv9={showdiv[46]} />
                  <Click showdiv22={showdiv[46]} />
                  <Click showdiv11={showdiv[46]} />
                </div>
              </div>
            )}

            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(47)}>Sales Return Summary</h4>
            {showdiv[47] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[47]} head="Sales Return Summary Report" />
                  <Click showdiv8={showdiv[47]} />
                  <Click showdiv9={showdiv[47]} />
                  <Click showdiv11={showdiv[47]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(48)}> Sales Detail</h4>
            {showdiv[48] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[48]} head="Sales Detail Report" />
                  <Click showdiv10={showdiv[48]} />
                  <Click showdiv9={showdiv[48]} />
                  <Click showdiv8={showdiv[48]} />
                  <Click showdiv15={showdiv[48]} />
                  <Click showdiv19={showdiv[48]} />
                  <Click showdiv20={showdiv[48]} />
                  <Click showdiv23={showdiv[48]} />
                  <Click showdiv11={showdiv[48]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(49)}>Sales Detail Return</h4>
            {showdiv[49] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[49]} head="Sales Return Detail" />
                  <Click showdiv19={showdiv[49]} />
                  <Click showdiv15={showdiv[49]} />
                  <Click showdiv9={showdiv[49]} />
                  <Click showdiv11={showdiv[49]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(50)}>Monthly Customer Wise Sales</h4>
            {showdiv[50] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[50]} head="Monthly Sales Customer Wise" />
                  <Click showdiv9={showdiv[50]} />
                  <Click showdiv8={showdiv[50]} />
                  <Click showdiv11={showdiv[50]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(51)}>Monthly Product Qty Wise</h4>
            {showdiv[51] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[51]} head="Monthly Sales Product Wise" />
                  <Click showdiv9={showdiv[51]} />
                  <Click showdiv15={showdiv[51]} />
                  <Click showdiv11={showdiv[51]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(52)}> Monthly Product Wise Sales</h4>
            {showdiv[52] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[52]} head="Monthly Sales Product Wise Qty" />
                  <Click showdiv9={showdiv[52]} />
                  <Click showdiv15={showdiv[52]} />
                  <Click showdiv11={showdiv[52]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(53)}>Sales Summary Qty</h4>
            {showdiv[53] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[53]} head="Sales Detail Report" />
                  <Click showdiv9={showdiv[53]} />
                  <Click showdiv15={showdiv[53]} />
                  <Click showdiv11={showdiv[53]} />
                </div>
              </div>
            )}
          </div>
        </Col>

        <Col className="card2">
          <div>
            <h4 className=" head2">CRM Reports</h4>
            <hr className="hr hr1" />
            <h4 className="head1" onClick={() => toggle(44)}> Monthly Sales Order Qty Wise</h4>
            {showdiv[44] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv22={showdiv[44]} head="Monthly Sales Product Wise Qty" />
                  <Click showdiv23={showdiv[44]} />
                  <Click showdiv11={showdiv[44]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(45)}> Monthly Sales Order Value Wise</h4>
            {showdiv[45] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv22={showdiv[45]} head="Monthly Sales Product Wise Value" />
                  <Click showdiv23={showdiv[45]} />
                  <Click showdiv11={showdiv[45]} />
                </div>
              </div>
            )}
          </div>
        </Col>

        <Col className="card3">
          <div>
            <h4 className="head2">Inventory Reports</h4>
            <hr className="hr hr1 " />
            <h4 className="head1" onClick={() => toggle(37)}>Current Stock Statement</h4>
            {showdiv[37] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[37]} head="Current Stock Report" />
                  <Click showdiv6={showdiv[37]} />
                  <Click showdiv16={showdiv[37]} />
                  <Click showdiv11={showdiv[37]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(38)}>Current Stock Batch Wise</h4>
            {showdiv[38] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[38]} head="Current Stock Batch Wise Report" />
                  <Click showdiv6={showdiv[38]} />
                  <Click showdiv16={showdiv[38]} />
                  <Click showdiv11={showdiv[38]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(39)}> Stock Cost Wise Report</h4>
            {showdiv[39] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[39]} head="Current Stock Cost Wise Report" />
                  <Click showdiv6={showdiv[39]} />
                  <Click showdiv16={showdiv[39]} />
                  <Click showdiv11={showdiv[39]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(40)}>Periodic Stock Statement</h4>
            {showdiv[40] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[40]} head="Periodic Stock Report" />
                  <Click showdiv19={showdiv[40]} />
                  <Click showdiv20={showdiv[40]} />
                  <Click showdiv15={showdiv[40]} />
                  <Click showdiv11={showdiv[40]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(41)}>Product History Report</h4>
            {showdiv[41] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[41]} head="Product History Report" />
                  <Click showdiv19={showdiv[41]} />
                  <Click showdiv15={showdiv[41]} />
                  <Click showdiv11={showdiv[41]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(42)}>Product Expiry Report</h4>
            {showdiv[42] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv20={showdiv[42]} head="Current Stock Batch Wise Expiry Report" />
                  <Click showdiv15={showdiv[42]} />
                  <Click showdiv21={showdiv[42]} />
                  <Click showdiv11={showdiv[42]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(43)}> Product Information Report</h4>
            {showdiv[43] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[43]} head="Current Stock Batch Wise Report" />
                  <Click showdiv6={showdiv[43]} />
                  <Click showdiv16={showdiv[43]} />
                  <Click showdiv11={showdiv[43]} />
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
      {/*Row 2 */}
      <Row>
        <Col className="card4">
          <div>
            <h4 className=" head2">Purchase Reports</h4>
            <hr className="hr hr1" />
            <h4 className="head1" onClick={() => toggle(30)}> Purchase Summary</h4>
            {showdiv[30] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[30]} head="Purchase Summary Report" />
                  <Click showdiv6={showdiv[30]} />
                  <Click showdiv16={showdiv[30]} />
                  <Click showdiv11={showdiv[30]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(31)}>Purchase Return Summary</h4>
            {showdiv[31] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[31]} head="Purchase Return Summary Report" />
                  <Click showdiv6={showdiv[31]} />
                  <Click showdiv16={showdiv[31]} />
                  <Click showdiv11={showdiv[31]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(32)}> Purchase Detail</h4>
            {showdiv[32] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[32]} head="Purchase Detail Report" />
                  <Click showdiv19={showdiv[32]} />
                  <Click showdiv16={showdiv[32]} />
                  <Click showdiv15={showdiv[32]} />
                  <Click showdiv11={showdiv[32]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(33)}>Purchase Detail Return</h4>
            {showdiv[33] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[33]} head="Purchase Return Detail" />
                  <Click showdiv19={showdiv[33]} />
                  <Click showdiv16={showdiv[33]} />
                  <Click showdiv15={showdiv[33]} />
                  <Click showdiv11={showdiv[33]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(34)}> Purchase Order Summary</h4>
            {showdiv[34] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[34]} head="Purchase Order Summary Report" />
                  <Click showdiv6={showdiv[34]} />
                  <Click showdiv16={showdiv[34]} />
                  <Click showdiv11={showdiv[34]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(35)}> Product ReOrder Level Report</h4>
            {showdiv[35] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv19={showdiv[35]} head="ReOrder Level Report" />
                  <Click showdiv15={showdiv[35]} />
                  <Click showdiv20={showdiv[35]} />
                  <Click showdiv11={showdiv[35]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(36)}> Product Danger Level Report</h4>
            {showdiv[36] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv19={showdiv[36]} head="Danger Level Report" />
                  <Click showdiv15={showdiv[36]} />
                  <Click showdiv20={showdiv[36]} />
                  <Click showdiv11={showdiv[36]} />
                </div>
              </div>
            )}
          </div>
        </Col>

        <Col className="card5">
          <div>
            <h4 className=" head2">Accounts Reports</h4>
            <hr className="hr hr1" />
            <h4 className="head1" onClick={() => toggle(25)}> Accounts Ledger</h4>
            {showdiv[25] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[20]} head="Cash Balance" />
                  <Click showdiv14={showdiv[20]} />
                  <Click showdiv11={showdiv[20]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(25)}> Customer Ledger</h4>
            {showdiv[25] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[25]} head=" Customer Ledger" />
                  <Click showdiv14={showdiv[25]} />
                  <Click showdiv11={showdiv[25]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(26)}> Supplier Ledger</h4>
            {showdiv[26] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[26]} head="Supplier Ledger" />
                  <Click showdiv14={showdiv[26]} />
                  <Click showdiv11={showdiv[26]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(27)}> Expense Ledger</h4>
            {showdiv[27] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[27]} head="Expense Ledger" />
                  <Click showdiv14={showdiv[27]} />
                  <Click showdiv11={showdiv[27]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(28)}> Bank Ledger</h4>
            {showdiv[28] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[28]} head="Bank Ledger" />
                  <Click showdiv14={showdiv[28]} />
                  <Click showdiv11={showdiv[28]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(29)}> Cash Ledger</h4>
            {showdiv[29] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[29]} head="Cash Ledger" />
                  <Click showdiv14={showdiv[29]} />
                  <Click showdiv11={showdiv[29]} />
                </div>
              </div>
            )}
          </div>
        </Col>

        <Col className="card6">
          <div>
            <h4 className="head2">Accounts Balance Reports</h4>
            <hr className="hr hr1 " />
            <h4 className="head1" onClick={() => toggle(20)}> Cash Summary</h4>
            {showdiv[20] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[20]} head="Cash Balance" />
                  <Click showdiv14={showdiv[20]} />
                  <Click showdiv11={showdiv[20]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(21)}> Expense Summary</h4>
            {showdiv[21] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[21]} head="Expense Summary" />
                  <Click showdiv14={showdiv[21]} />
                  <Click showdiv11={showdiv[21]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(22)}>Bank Balance</h4>
            {showdiv[22] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[22]} head="Bank Balance" />
                  <Click showdiv14={showdiv[22]} />
                  <Click showdiv11={showdiv[22]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(22)}> Customer Balance</h4>
            {showdiv[22] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[22]} head="Customer Balance" />
                  <Click showdiv14={showdiv[22]} />
                  <Click showdiv8={showdiv[22]} />
                  <Click showdiv11={showdiv[22]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(23)}> Supplier Balance</h4>
            {showdiv[23] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[23]} head="Supplier Balance" />
                  <Click showdiv14={showdiv[23]} />
                  <Click showdiv11={showdiv[23]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(24)}> Trail Balance</h4>
            {showdiv[24] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[24]} head="Accounts Trail Balance" />
                  <Click showdiv14={showdiv[24]} />
                  <Click showdiv18={showdiv[24]} />
                  <Click showdiv11={showdiv[24]} />
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
      {/*Row 3 */}
      <Row>
        <Col className="card7">
          <div>
            <h4 className=" head2">Finance Reports</h4>
            <hr className="hr hr1" />
            <h4 className="head1" onClick={() => toggle(14)}> Gross Profit & Loss</h4>
            {showdiv[14] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[14]} head="Gross Profit & Loss" />
                  <Click showdiv15={showdiv[14]} />
                  <Click showdiv19={showdiv[14]} />
                  <Click showdiv9={showdiv[14]} />
                  <Click showdiv11={showdiv[14]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(15)}>Gross Profit & Loss Return</h4>
            {showdiv[15] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[15]} head="Gross Profit & Loss" />
                  <Click showdiv15={showdiv[15]} />
                  <Click showdiv19={showdiv[15]} />
                  <Click showdiv9={showdiv[15]} />
                  <Click showdiv11={showdiv[15]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(16)}> Daybook Report</h4>
            {showdiv[16] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[16]} head="Daybook Report " />
                  <Click showdiv11={showdiv[16]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(17)}> Balance Sheet</h4>
            {showdiv[17] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[17]} head="Balance Sheet" />
                  <Click showdiv11={showdiv[17]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(18)}> Profit and Loss</h4>
            {showdiv[18] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[18]} head="Profit and Loss" />
                  <Click showdiv11={showdiv[18]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(19)}>Chart of Accounts</h4>
            {showdiv[19] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv14={showdiv[19]} head="Charts of Accounts" />
                  <Click showdiv17={showdiv[19]} />
                  <Click showdiv18={showdiv[19]} />
                  <Click showdiv11={showdiv[19]} />
                </div>
              </div>
            )}
          </div>
        </Col>

        <Col className="card8">
          <div>
            <h4 className=" head2">Tax Reports</h4>
            <hr className="hr hr1" />
            <h4 className="head1" onClick={() => toggle(6)}> Tax Accounts Ledger</h4>
            {showdiv[6] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[6]} head="Tax Ledger" />
                  <Click showdiv14={showdiv[6]} />
                  <Click showdiv11={showdiv[6]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(7)}> Tax Balance</h4>
            {showdiv[7] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[7]} head="Tax Balance" />
                  <Click showdiv13={showdiv[7]} />
                  <Click showdiv14={showdiv[7]} />
                  <Click showdiv11={showdiv[7]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(8)}> GST Customer Report</h4>
            {showdiv[8] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[8]} head="GST Customer Report" />
                  <Click showdiv8={showdiv[8]} />
                  <Click showdiv8={showdiv[8]} />
                  <Click showdiv7={showdiv[8]} />
                  <Click showdiv15={showdiv[8]} />
                  <Click showdiv11={showdiv[8]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(9)}> Tax Summary Customer Report</h4>
            {showdiv[9] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[9]} head="Tax Summary Customer Report" />
                  <Click showdiv8={showdiv[9]} />
                  <Click showdiv9={showdiv[9]} />
                  <Click showdiv7={showdiv[9]} />
                  <Click showdiv11={showdiv[9]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(10)}> Flat Tax Customer Report</h4>
            {showdiv[10] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[10]} head="Flat Tax Customer Report" />
                  <Click showdiv8={showdiv[10]} />
                  <Click showdiv9={showdiv[10]} />
                  <Click showdiv7={showdiv[10]} />
                  <Click showdiv11={showdiv[10]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(11)}> GST Supplier Report</h4>
            {showdiv[11] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[11]} head="GST Supplier Report" />
                  <Click showdiv6={showdiv[11]} />
                  <Click showdiv16={showdiv[11]} />
                  <Click showdiv15={showdiv[11]} />
                  <Click showdiv7={showdiv[11]} />
                  <Click showdiv11={showdiv[11]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(12)}> Flat Tax Supplier Report</h4>
            {showdiv[12] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[12]} head="Flat Tax Supplier Report" />
                  <Click showdiv6={showdiv[12]} />
                  <Click showdiv16={showdiv[12]} />
                  <Click showdiv7={showdiv[12]} />
                  <Click showdiv11={showdiv[12]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(13)}> Tax Summary Supplier Report</h4>
            {showdiv[13] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv12={showdiv[13]} head="Tax Summary Supplier Report" />
                  <Click showdiv6={showdiv[13]} />
                  <Click showdiv16={showdiv[13]} />
                  <Click showdiv7={showdiv[13]} />
                  <Click showdiv11={showdiv[13]} />
                </div>
              </div>
            )}
          </div>
        </Col>

        <Col className="card9">
          <div>
            <h4 className="head2">Inventory Reports</h4>
            <hr className="hr hr1 " />
            <h4 className="head1" onClick={() => toggle(5)}>Customer Information</h4>
            {showdiv[5] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv8={showdiv[5]} head="Customer Info Report" />
                  <Click showdiv9={showdiv[5]} />
                  <Click showdiv10={showdiv[5]} />
                  <Click showdiv7={showdiv[5]} />
                  <Click showdiv11={showdiv[5]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(4)}> Supplier Information</h4>
            {showdiv[4] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv6={showdiv[4]} head="Supplier Info Report" />
                  <Click showdiv7={showdiv[4]} />
                  <Click showdiv11={showdiv[4]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(3)}> Bank Information</h4>
            {showdiv[3] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv3={showdiv[3]} head="Bank Info Report" />
                  <Click showdiv4={showdiv[3]} />
                  <Click showdiv5={showdiv[3]} />
                  <Click showdiv11={showdiv[3]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(2)}>City Information</h4>
            {showdiv[2] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv1={showdiv[2]} head="City Info Report" />
                  <Click showdiv7={showdiv[2]} />
                  <Click showdiv11={showdiv[2]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(1)}> Area Information</h4>
            {showdiv[1] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv1={showdiv[1]} head="Area Info Report" />
                  <Click showdiv2={showdiv[1]} />
                  <Click showdiv11={showdiv[1]} />
                </div>
              </div>
            )}
            <hr className="hr" />
            <h4 className="head1" onClick={() => toggle(0)}>Sales Area Information</h4>
            {showdiv[0] && (
              <div className="popup-container" style={{ display: "block" }} >
                <div className="popup-content">

                  <Click showdiv1={showdiv[0]} head="Sales Area Report" />
                  <Click showdiv2={showdiv[0]} />
                  <Click showdiv11={showdiv[0]} />
                </div>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default AnalyticalReports;
