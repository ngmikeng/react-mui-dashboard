
const drawerWidth = 240;
const SidebarStyle = theme => ({
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  navLink: {
    textDecoration: 'none'
  },
  listItemTextPrimary: {
    fontWeight: 'unset'
  }
});

export default SidebarStyle;