import { Injectable } from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ListResolver implements Resolve<any> {

  resultado: Observable<any>;

  constructor(
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot): Observable<any> {
    const queryParam = route.queryParams;

    return this.searchApi(queryParam).pipe(
      catchError(err => {
        console.log(err.message);
        this.router.navigate(['/']);
        //return Observable.throw(err.statusText);
        return EMPTY;
      })
    );
  }

  searchApi(queryParam): Observable<any> {
    return this.resultado = Observable.create(
              (observer) => {
                observer.next('Hello');
                observer.next('World');
                observer.complete();
            });
  }

}