import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./analyticalReports.css";

function AnalyticalReports() {
  return (
    <Container>
      <h2 className="head">AnalyticalReports</h2>
      {/*Row 1 */}
      <Row>
        <Col className="card1">
          <div>
            <h4 className=" head2">Sales Reports</h4>
            <hr className="hr hr1" />
            <h4 className="head1">Sales Summary</h4>
            <hr className="hr" />
            <h4 className="head1">Sales Return Summary</h4>
            <hr className="hr" />
            <h4 className="head1"> Sales Detail</h4>
            <hr className="hr" />
            <h4 className="head1">Sales Detail Return</h4>
            <hr className="hr" />
            <h4 className="head1">Monthly Customer Wise Sales</h4>
            <hr className="hr" />
            <h4 className="head1">Monthly Product Qty Wise</h4>
            <hr className="hr" />
            <h4 className="head1"> Monthly Product Wise Sales</h4>
            <hr className="hr" />
            <h4 className="head1">Sales Summary Qty</h4>
          </div>
        </Col>

        <Col className="card2">
          <div>
            <h4 className=" head2">CRM Reports</h4>
            <hr className="hr hr1" />
            <h4 className="head1"> Monthly Sales Order Qty Wise</h4>
            <hr className="hr" />
            <h4 className="head1"> Monthly Sales Order Value Wise</h4>
          </div>
        </Col>

        <Col className="card3">
          <div>
            <h4 className="head2">Inventory Reports</h4>
            <hr className="hr hr1 " />
            <h4 className="head1">Current Stock Statement</h4>
            <hr className="hr" />
            <h4 className="head1">Current Stock Batch Wise</h4>
            <hr className="hr" />
            <h4 className="head1"> Stock Cost Wise Report</h4>
            <hr className="hr" />
            <h4 className="head1">Periodic Stock Statement</h4>
            <hr className="hr" />
            <h4 className="head1">Product History Report</h4>
            <hr className="hr" />
            <h4 className="head1">Product Expiry Report</h4>
            <hr className="hr" />
            <h4 className="head1"> Product Information Report</h4>
          </div>
        </Col>
      </Row>
      {/*Row 2 */}
      <Row>
        <Col className="card4">
          <div>
            <h4 className=" head2">Purchase Reports</h4>
            <hr className="hr hr1" />
            <h4 className="head1"> Purchase Summary</h4>
            <hr className="hr" />
            <h4 className="head1">Purchase Return Summary</h4>
            <hr className="hr" />
            <h4 className="head1"> Purchase Detail</h4>
            <hr className="hr" />
            <h4 className="head1">Purchase Detail Return</h4>
            <hr className="hr" />
            <h4 className="head1"> Purchase Order Summary</h4>
            <hr className="hr" />
            <h4 className="head1"> Product ReOrder Level Report</h4>
            <hr className="hr" />
            <h4 className="head1"> Monthly Product Wise Sales</h4>
            <hr className="hr" />
            <h4 className="head1"> Product Danger Level Report</h4>
          </div>
        </Col>

        <Col className="card5">
          <div>
            <h4 className=" head2">Accounts Reports</h4>
            <hr className="hr hr1" />
            <h4 className="head1"> Accounts Ledger</h4>
            <hr className="hr" />
            <h4 className="head1"> Customer Ledger</h4>
            <hr className="hr" />
            <h4 className="head1"> Supplier Ledger</h4>
            <hr className="hr" />
            <h4 className="head1"> Expense Ledger</h4>
            <hr className="hr" />
            <h4 className="head1"> Bank Ledger</h4>
            <hr className="hr" />
            <h4 className="head1"> Cash Ledger</h4>
          </div>
        </Col>

        <Col className="card6">
          <div>
            <h4 className="head2">Accounts Balance Reports</h4>
            <hr className="hr hr1 " />
            <h4 className="head1"> Cash Summary</h4>
            <hr className="hr" />
            <h4 className="head1"> Expense Summary</h4>
            <hr className="hr" />
            <h4 className="head1">Bank Balance</h4>
            <hr className="hr" />
            <h4 className="head1"> Customer Balance</h4>
            <hr className="hr" />
            <h4 className="head1"> Supplier Balance</h4>
            <hr className="hr" />
            <h4 className="head1"> Trail Balance</h4>
          </div>
        </Col>
      </Row>
      {/*Row 3 */}
      <Row>
        <Col className="card7">
          <div>
            <h4 className=" head2">Finance Reports</h4>
            <hr className="hr hr1" />
            <h4 className="head1"> Gross Profit & Loss</h4>
            <hr className="hr" />
            <h4 className="head1">Gross Profit & Loss Return</h4>
            <hr className="hr" />
            <h4 className="head1"> Daybook Report</h4>
            <hr className="hr" />
            <h4 className="head1"> Balance Sheet</h4>
            <hr className="hr" />
            <h4 className="head1"> Profit and Loss</h4>
            <hr className="hr" />
            <h4 className="head1">Chart of Accounts</h4>
          </div>
        </Col>

        <Col className="card8">
          <div>
            <h4 className=" head2">Tax Reports</h4>
            <hr className="hr hr1" />
            <h4 className="head1"> Tax Accounts Ledger</h4>
            <hr className="hr" />
            <h4 className="head1"> Tax Balance</h4>
            <hr className="hr" />
            <h4 className="head1"> GST Customer Report</h4>
            <hr className="hr" />
            <h4 className="head1"> Tax Summary Customer Report</h4>
            <hr className="hr" />
            <h4 className="head1"> Flat Tax Customer Report</h4>
            <hr className="hr" />
            <h4 className="head1"> GST Supplier Report</h4>
            <hr className="hr" />
            <h4 className="head1"> Flat Tax Supplier Report</h4>
            <hr className="hr" />
            <h4 className="head1"> Tax Summary Supplier Report</h4>
          </div>
        </Col>

        <Col className="card9">
          <div>
            <h4 className="head2">Inventory Reports</h4>
            <hr className="hr hr1 " />
            <h4 className="head1">Customer Information</h4>
            <hr className="hr" />
            <h4 className="head1"> Supplier Information</h4>
            <hr className="hr" />
            <h4 className="head1"> Bank Information</h4>
            <hr className="hr" />
            <h4 className="head1">City Information</h4>
            <hr className="hr" />
            <h4 className="head1"> Area Information</h4>
            <hr className="hr" />
            <h4 className="head1">Sales Area Information</h4>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default AnalyticalReports;
