import Dashboard from '../containers/Dashboard';
import User from '../containers/User';
import Post from '../containers/Post';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';

export default [
  {
    path: '/dashboard',
    component: Dashboard,
    sidebarName: 'Dashboard',
    icon: DashboardIcon
  },
  {
    path: '/users',
    component: User,
    sidebarName: 'User',
    icon: PersonIcon
  },
  {
    path: '/posts',
    component: Post,
    sidebarName: 'Post',
    icon: ListIcon
  }
];