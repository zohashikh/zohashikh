import SimpleList from  './Dashboard-Components/Sidebar'
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchBar from "material-ui-search-bar";
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import PersonIcon from '@material-ui/icons/Person';
import { grey } from '@material-ui/core/colors';
import './Dashboard.css'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>


      <Grid container spacing={3}>
        <Grid item xs={2.5}>
           <SimpleList />
        </Grid>
        
        <Grid item xs={5}>
          <p>Dashboard</p>
        </Grid>
       
       
        <Grid item xs={2}>
         <SearchBar />
        </Grid> 
      
         <Grid item xs={2}>
           <DashboardIcon className="icon" style={{ color: grey[900] }} />     
        <NotificationsIcon className="icon" style={{ color: grey[900] }} />
          <PersonIcon className="icon" style={{ color: grey[900] }} />
        </Grid>
          
        
      </Grid>
    </div>
  );
}
