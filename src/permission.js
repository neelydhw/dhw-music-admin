import router from './router';
import store from './store';
import { getToken } from './utils/auth';
const whiteList = ['/login', '/403', '/404']; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  const hasToken = getToken();
  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else {
      next();
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next();
    } else {
      next('/login?redirect=' + to.path);
    }
  }
});
