import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import appRoutes from '../routes/app';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import SettingBar from '../components/SettingBar';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import appLayoutStyle from '../assets/jss/appLayoutStyle';

class AppLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchor: 'left'
    };
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleChangeAnchor = event => {
    this.setState({
      anchor: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    const { anchor, open } = this.state;

    let before = null;
    let after = null;

    if (anchor === 'left') {
      before = <Sidebar {...this.state} routes={appRoutes} onClickDrawerClose={this.handleDrawerClose} />;
    } else {
      after = <Sidebar {...this.state} routes={appRoutes} onClickDrawerClose={this.handleDrawerClose} />;
    }

    return (
      <div className={classes.root}>
        <CssBaseline />
        <div className={classes.appFrame}>
          <Header {...this.state} onClickDrawerOpen={this.handleDrawerOpen} onChangeAnchor={this.handleChangeAnchor} />
          {before}
          <main
            className={classNames(classes.content, classes[`content-${anchor}`], {
              [classes.contentShift]: open,
              [classes[`contentShift-${anchor}`]]: open,
            })}>
            <div className={classes.drawerHeader}></div>
            <SettingBar anchor={anchor} onChangeAnchor={this.handleChangeAnchor} />
            <Typography>{'Version 0.0.1'}</Typography>
            <Switch>
              {appRoutes.map((route, index) => 
                <Route path={route.path} component={route.component} key={index} />
              )}
              <Redirect from='/' to='/dashboard'/>
            </Switch>
          </main>
          {after}
        </div>
      </div>
    );
  }
}

AppLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(appLayoutStyle, { withTheme: true })(AppLayout);