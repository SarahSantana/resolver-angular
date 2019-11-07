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

    const result = this.searchApi(queryParam.date).pipe(
      catchError(err => {
        console.log(err.message);
        this.router.navigate(['/']);
        //return Observable.throw(err.statusText);
        return EMPTY;
      })
    );

    return result;
  }

  searchApi(queryParam): Observable<any> {
    this.resultado = Observable.create(
              (observer) => {
                observer.next('Hello');
                observer.next('World');
                observer.complete();
            });

    console.log('resultado', this.resultado);
    return this.resultado;
  }

}