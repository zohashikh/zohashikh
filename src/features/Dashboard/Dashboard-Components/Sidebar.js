import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { FaReact, FaRegClipboard } from 'react-icons/fa';
import { lightBlue } from '@material-ui/core/colors';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import RoomIcon from '@material-ui/icons/Room';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LanguageIcon from '@material-ui/icons/Language';
import './sidebar.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className="box">
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <FaReact color= "blue" />
          </ListItemIcon>
          <ListItemText primary="CREATIVE TIM" />
        </ListItem>
         <Divider />
        <ListItem button>
          <ListItemIcon>
            <DashboardIcon style={{ color: lightBlue[50] }} />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <PersonIcon style={{ color: lightBlue[50] }} />
          </ListItemIcon>
          <ListItemText primary="User Profile" />
        </ListItem>
         <ListItem button>
          <ListItemIcon>
            <FaRegClipboard color="white" size="30px" />
          </ListItemIcon>
          <ListItemText primary="Table List" />
        </ListItem>
         <ListItem button>
          <ListItemIcon>
            <LibraryBooksIcon style={{ color: lightBlue[50] }} />
          </ListItemIcon>
          <ListItemText primary="Typography" />
        </ListItem>
         <ListItem button>
          <ListItemIcon>
            <ScatterPlotIcon style={{ color: lightBlue[50] }} />
          </ListItemIcon>
          <ListItemText primary="Icons" />
        </ListItem>
         <ListItem button>
          <ListItemIcon>
            <RoomIcon style={{ color: lightBlue[50] }} />
          </ListItemIcon>
          <ListItemText primary="Maps" />
        </ListItem>
         <ListItem button>
          <ListItemIcon>
            <NotificationsIcon style={{ color: lightBlue[50] }} />
          </ListItemIcon>
          <ListItemText primary="Notifications" />
        </ListItem>
         <ListItem button>
          <ListItemIcon>
            <LanguageIcon style={{ color: lightBlue[50] }} />
          </ListItemIcon>
          <ListItemText primary="RTL Support" />
        </ListItem>




      </List>
     
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>
      </div>
    </div>
  );
}
