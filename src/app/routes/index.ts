import express from 'express';
import { ProfileRoutes } from '../module/profile/profile.route';
import { SocialPlatformRoutes } from '../module/socialPlatform/socialPlatform.route';
import { UserRouter } from '../module/user/user.route';

const router = express.Router();

const moduleRoutes = [
  // ... routes
  // {
  //   path: "",
  //   routes: ""
  // },
  {
    path: '/profile',
    routes: ProfileRoutes,
  },
  {
    path: '',
    routes: '',
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.routes));
export default router;
