import { Overview1 } from '../pages/Overview1';
import { Overview2 } from '../pages/Overview2';

const publicRoutes: any = [
  { id: 1, path: '/', component: Overview1 },
  { id: 2, path: '/overview-2', component: Overview2 }
];
const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
