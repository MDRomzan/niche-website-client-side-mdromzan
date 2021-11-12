
import { Typography } from '@mui/material';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../Hooks/useAuth';
import"./Navigation.css";

const style = {
    color: "white"
  
}
const Navigation = () => {
  const {user,logOut}=useAuth();
    return (
                  <>
  <Navbar collapseOnSelect expand="lg" sticky="top" bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home/home">
      < Typography sx = {
        {
          boxShadow: 3,
          fontWeight: 600,
          color: "GreenYellow"
        }
      }
      variant = "h4" >
      RD Bycycle
      </Typography>
      

       
    </Navbar.Brand>
     <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
      
        <Nav.Link style={style} as={HashLink} to="/home#home" className="nav-btn" >Home</Nav.Link>
      <Nav.Link style={style} as={HashLink} to="/explores"className="nav-btn">Explore</Nav.Link>
      <Nav.Link style={style} as={HashLink} to="/about"className="nav-btn">About us</Nav.Link>

     <Nav.Link style={style} as={HashLink} to="/contact"className="nav-btn">Contact us</Nav.Link>
        
        

        {user?.email?(
          <>
          <Nav.Link style={style} as={HashLink} to="/dashboard"className="nav-btn">DashBoard</Nav.Link>
        <button onClick={logOut} className="btn-button">logout</button>
         </>
        ):(<Nav.Link style={style} className="nav-btn" as={Link} to="/login">Login</Nav.Link>
        ) 

         }
        
         

         <Navbar.Text>
        Signed in as: <a  href="/login">{user?.displayName}</a>
         </Navbar.Text> 
    </Navbar.Collapse>

    </Container>
  </Navbar>
  
  
</> 

    );
};

export default Navigation;