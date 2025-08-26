// import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, CanLoad, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AssignUserService } from '../Service/assignUser.service';
// import { BackendBsService } from '../Service/backendBs.service';
 
// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate, CanActivateChild {
//   loginData: any;
 
//   constructor(
//     private router: Router,
//     private authService: AssignUserService,
//     private BackService: BackendBsService
//   ){
//     // this.testData();
//   }
 
 
//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       if(this.authService.isLogin()){
//         return true;
//       }else{
//         this.router.navigate(['/Login'])
//         return false;
//       }
//   }
//   canActivateChild(
//     childRoute: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//       if(this.authService.isLogin()){
//         return true;
//       }else{
//         this.router.navigate(['/Login'])
//         return false;
//       }
//   }
// }