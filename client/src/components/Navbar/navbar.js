import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';

function MyNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container className='nav-bar'>
                <Navbar.Brand href="#home" className='title'>Connect<br></br>Distribution</Navbar.Brand>
                <NavDropdown title="PrimeCare Pharma" id="collasible-nav-dropdown" className='care'>
                    <NavDropdown.Item href="#action/3.1">Change Password</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                        LogOut
                    </NavDropdown.Item>
                </NavDropdown>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;