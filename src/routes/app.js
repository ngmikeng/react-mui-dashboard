import Dashboard from '../components/Dashboard';
import User from '../components/User';
import Post from '../components/Post';
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