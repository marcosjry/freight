import { HttpInterceptorFn } from '@angular/common/http';

export const demoInterceptor: HttpInterceptorFn = (req, next) => {
  
  const token = sessionStorage.getItem('auth-token');
  var authReq = req.url.includes('/login');
  if(!authReq && token) {

    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
  }
  
  return next(req);

};
