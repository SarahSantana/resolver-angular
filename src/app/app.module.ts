import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListResolver } from './list/list-resolver';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule ],
  declarations: [ AppComponent, ListComponent ],
  providers:    [ ListResolver ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
