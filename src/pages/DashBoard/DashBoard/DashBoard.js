
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import Pyment from "../Pyment/Pyment";
import OrderReview from "../OrderReview/OrderReview";
import {
  Switch,
  Route,
  Link,
  
  useRouteMatch
} from "react-router-dom";
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import AddProducts from '../AddProducts/AddProducts';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../Hooks/useAuth';
import AdminRoute from '../../../PrivateRoute/AdminRoute/AdminRoute';
import { Button } from '@mui/material';

const drawerWidth = 240;
 const orderBtn ={
     textDecoration:"none",
     backgroundColor:"skyblue",
     color:"white",
     margin:"10px",
     padding:"15px",
     borderRadius:"50px"
 }
 const linkSize = {
   textDecoration: "none",
   color: "sky",
   margin: "30px",
   padding: "10px",
   fontWeight:400,
   fontSize:"16px"
   

 }
 const fontSize={
   fontWeight:500,
   fontSize:"18px",
   

 }
function DashBoard(props) {

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin,logOut,user}=useAuth();
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Link style={orderBtn} to="/explores">
         Order Now
      </Link>
            {user?.email && <Button variant="contained"  onClick={logOut} > Logout</Button> }
      <br />
      
      <List>
       
      </List>
      <Divider />
      
        <List>
        <Link style={linkSize}  to={`${url}`}>
        <Button variant="contained" color="success" >My Order</Button> 
      </Link>
      </List>
      <Divider />
      <br/>
      <List>

      <Link style={linkSize}   to={`${url}/orderReview`}>
        <Button style={fontSize}  color="secondary"> Order Review</Button> 
      
      </Link>
       <br/>
      <Link style={linkSize}   to={`${url}/pay`}>
        <Button style={fontSize}  color="secondary">Payment</Button>
        
      </Link>
      </List>
      <Divider />
      
      {admin && <Box>
        <List>
        <Link style={linkSize}   to={`${url}/addProducts`}>
           <Button style={fontSize}  color="success">Addproduct</Button>
      </Link>
      <br />
          <Link style={linkSize}   to={`${url}/makeAdmin`}>
          <Button style={fontSize}  color="success">Make Admin</Button>
         
      </Link>
      <br/>
       <Link style={linkSize}   to={`${url}/manageAllorders`}>
         <Button style={fontSize}  color="success">Manage All Orders</Button>
         
      </Link>
      <br/>
       <Link style={linkSize}   to={`${url}/manageProducts`}>
        <Button style={fontSize}  color="success"> Manage Products</Button>
        
      </Link>
      </List>
      </Box>}
      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            DashBoard
          </Typography>
          <Typography  sx={{mx:5}} variant="h6" noWrap component="div">
            <Link style={{color:"white",textDecoration:"none"}} to="/">Home</Link>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
          <Switch>
        <Route exact path={path}>
          <DashBoardHome></DashBoardHome>
        </Route>
        <Route path={`${path}/payment/:orderId`}>
          <Pyment></Pyment>
        </Route>
        <Route path={`${path}/orderReview`}>
         <OrderReview></OrderReview>
        </Route>
        <AdminRoute path={`${path}/addProducts`}>
          <AddProducts></AddProducts>
        </AdminRoute>
         <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageAllorders`}>
          <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
         <ManageProducts></ManageProducts>
        </AdminRoute>
      </Switch>
                
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;


