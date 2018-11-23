import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { NewListComponent } from './new-list/new-list.component';
import { ListDetailsComponent } from './list-details/list-details.component';

const appRoutes: Routes = [
  { 
    path: 'list', 
    component: ListComponent 
  },
  { 
    path: 'list-details/:id',      
    component: ListDetailsComponent 
  },
  { 
    path: 'new-list',      
    component: ListDetailsComponent 
  }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewListComponent,
    ListComponent,
    ListDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false }
    )
  ],
  // exports: [
  //   RouterModule
  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
