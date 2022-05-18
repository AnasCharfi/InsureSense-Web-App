import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
 
  {
    path: '/about',
    title: 'About',
    icon: 'bi bi-building',
    class: '',
    extralink: false,
    id:'about',
    submenu: []
  }  ,
  {
    path: '/component/login',
    title: 'Login',
    icon: 'bi bi-card-text',
    class: '',
    extralink: false,
    id:'login',
    submenu: []
  },
 /* {
    path: '/component/chatbot',
    title: 'Chatbot',
    icon: 'bi bi-card-text',
    class: '',
    extralink: false,
    id:'chatbot',
    submenu: []
  },*/

  {
    path: '/contact',
    title: 'Contact',
    icon: 'bi bi-person-lines-fill',
    class: '',
    extralink: false,
    id:'contact',
    submenu: []
  }  ,
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'bi bi-speedometer2',
    class: '',
    extralink: false,
    id:'dashboard',
    submenu: []
    
  },
];
