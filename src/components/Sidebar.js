import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { NavLink } from 'react-router-dom';
import sidebarStyle from '../assets/jss/sidebarStyle';

class Sidebar extends Component {
  render() {
    const { classes, theme } = this.props;

    return (
      <div>
        <Drawer
          variant="persistent"
          anchor={this.props.anchor}
          open={this.props.open}
          classes={{
            paper: classes.drawerPaper,
          }}>
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.props.onClickDrawerClose}>
              {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
            </IconButton>
          </div>
          <Divider />
          <List>
            {
              this.props.routes.map((route, index) => (
                <ListItem component={NavLink} to={route.path} key={index} className={classes.navLink} activeStyle={{fontWeight: 'bold', background: '#cdcdcd'}} button>
                  <ListItemIcon>
                    <route.icon/>
                  </ListItemIcon>
                  <ListItemText primary={route.sidebarName} classes={{
                    primary: classes.listItemTextPrimary
                  }} />
                </ListItem>
              )
            )}
          </List>
          <Divider />
        </Drawer>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  anchor: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  routes: PropTypes.array.isRequired,
  onClickDrawerClose: PropTypes.func.isRequired
};

export default withStyles(sidebarStyle, { withTheme: true })(Sidebar);
