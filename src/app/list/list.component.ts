import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit, OnDestroy { 

  private subscription: Subscription;

  constructor( 
    private router: Router,
    private activatedRouter: ActivatedRoute
   ) { }

  ngOnInit() {
    this.subscription = this.activatedRouter.data.subscribe(data => {
      console.log('Saída da lista de filmes legais: ', data);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
