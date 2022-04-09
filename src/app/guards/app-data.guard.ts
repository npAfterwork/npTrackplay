import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {DataService} from '../services/data.service';

@Injectable({
              providedIn: 'root'
            })
export class AppDataGuard implements CanActivate {

  constructor(
    private readonly dataService: DataService
  ) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.dataService.init();
  }

}
