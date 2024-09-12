import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AssessmentIcon from '@mui/icons-material/Assessment';
import MapIcon from '@mui/icons-material/Map';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import Logo from '../assets/images/PathScoutLogo.png';
import { NavLink, Routes, Route, Outlet } from 'react-router-dom'; 
import DbAssesment from './Dashboard/DbAssesment';
import DbRoadmap from './Dashboard/DbRoadmap';
import './Dashboard.css';
import DbAlumConnect from './Dashboard/DbAlumConnect';
import DbCourseSimulation from './Dashboard/DbCourseSimulation';
import DbJobSimulation from './Dashboard/DbJobSimulation';
import MyProfile from './Dashboard/Profile'

const drawerWidth = 240;

// Mock user data
const user = {
  name: 'John Doe',
  username: 'johndoe'
};

function Dashboard() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: '#36a9de', color:'white' }}
      >
        <Toolbar sx={{ justifyContent: 'center' }}>
          {/* Center-aligned logo and title */}
          <NavLink to={'/'}>
            <img src={Logo} alt="Navbar" width={"70px"} style={{ marginRight: '20px' }} />
          </NavLink>
          <NavLink to={'/'} style={{ textDecoration: 'none' }}>
            <Typography variant="h6" noWrap component="div" sx={{ color: 'white', fontWeight: 'bold' }}>
              PATHSCOUT
            </Typography>
          </NavLink>
        </Toolbar>
      </AppBar>
      <Drawer
        className='drawer' 
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'#36a9de',
            color:'white'
          },
        }}
        variant="permanent"
        anchor="left"
      >
        {/* User Info at the top of the drawer */}
        <Box sx={{ display: 'flex', alignItems: 'center', padding: 2, backgroundColor: '#2890c8', height:'64px'}}>
          <Avatar sx={{ bgcolor: '#FFFFFF', color: '#36a9de', marginRight: 1 }}>
            {user.username.charAt(0).toUpperCase()}
          </Avatar>
          <Typography variant="body1" sx={{ color: 'white', fontWeight: 'bold' }}>
            {user.name}
          </Typography>
        </Box>
        <Divider />
        <List>
          {/* Navigation Links for Dashboard Subpages */}
          <ListItem key="Home" disablePadding>
            <NavLink to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon><HomeIcon /></ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem key="Profile" disablePadding>
            <NavLink to="" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                <ListItemText primary="Profile" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem key="My Assessments" disablePadding>
            <NavLink to="dbassesment" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon><AssessmentIcon /></ListItemIcon>
                <ListItemText primary="My Assessments" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem key="Roadmap" disablePadding>
            <NavLink to="dbroadmap" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon><MapIcon /></ListItemIcon>
                <ListItemText primary="Roadmap" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem key="Coursework Simulation" disablePadding>
            <NavLink to="dbcoursesim" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon><SchoolIcon /></ListItemIcon>
                <ListItemText primary="Coursework Simulation" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem key="Job Simulation" disablePadding>
            <NavLink to="dbjobsim" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon><WorkIcon /></ListItemIcon>
                <ListItemText primary="Job Simulation" />
              </ListItemButton>
            </NavLink>
          </ListItem>
          <ListItem key="Alum Connect" disablePadding>
            <NavLink to="dbalumconnect" style={{ textDecoration: 'none', color: 'inherit' }}>
              <ListItemButton>
                <ListItemIcon><PeopleIcon /></ListItemIcon>
                <ListItemText primary="Alum Connect" />
              </ListItemButton>
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {/* Routes for Subpages */}
        <Routes>
          <Route path="/dbassesment" element={<DbAssesment/>} />
          <Route path="/dbroadmap" element={<DbRoadmap />} />
          <Route path='/dbcoursesim' element={<DbCourseSimulation/>}/>
          <Route path='/dbjobsim' element={<DbJobSimulation/>}/>
          <Route path='dbalumconnect' element={<DbAlumConnect/>}/>
          <Route path='' element={<MyProfile/>}/>
        </Routes>
        <Outlet />
      </Box>
    </Box>
  );
}

export default Dashboard;
