import { Login } from '../pages/Login';
import { AiPredictions } from '../pages/AiPredictions';

const publicRoutes: any = [
  //thechemis
  { id: 1, path: '/login', component: Login },
  { id: 2, path: '/aipredictions', component: AiPredictions }
];
const privateRoutes: any = [];

export { publicRoutes, privateRoutes };
