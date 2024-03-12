import React from 'react';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './navbar.css';
import UserBtn from "../../assets/user.jpg";

function MyNavbar() {
    return (
       <div className='care navbar-fixed'>
                <img src={UserBtn} alt="User" className="user-image" width='24px'/>
                {/* <h3 className='head999'>ZBL PHARMA</h3> */}
        <NavDropdown title="ZBL Pharma"  id="collasible-nav-dropdown" className='logout'>
                    <NavDropdown.Item href="/" >
                        LogOut
                    </NavDropdown.Item>
                </NavDropdown>
        </div>
    );
}

export default MyNavbar;