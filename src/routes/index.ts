import { Overview1 } from '../pages/Overview1';
import { Overview2 } from '../pages/Overview2';

const publicRoutes: any = [
  { id: 1, path: '/', component: Overview1 },
  { id: 2, path: '/dashboard/overview2', component: Overview2 },
  { id: 3, path: '/e-commerce', component: Overview2 },
  { id: 4, path: '/calendar', component: Overview2 },
  { id: 5, path: '/mail', component: Overview2 },
  { id: 6, path: '/chat', component: Overview2 },
  { id: 7, path: '/tasks', component: Overview2 },
  { id: 8, path: '/projects', component: Overview2 },
  { id: 8, path: '/file-manager', component: Overview2 },
  { id: 9, path: '/notes', component: Overview2 },
  { id: 10, path: '/contacts', component: Overview2 }
];
const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
