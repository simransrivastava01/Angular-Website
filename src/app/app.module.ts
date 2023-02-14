import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { AppFile1 } from './File1.component';
import { AppFile2 } from './File2.component';
import { AppFile3 } from './File3.component';
import { AppFile4 } from './File4.component';
import { AppFile5 } from './File5.component';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
   { path: 'File 1', component: AppFile1 },
   { path: 'File 2', component: AppFile2 },
   { path: 'File 3', component: AppFile3 },
   { path: 'File 4', component: AppFile4 },
   { path: 'File 5', component: AppFile5 }
];


/*@NgModule ({
   imports: [ BrowserModule,FormsModule],
   declarations: [ AppComponent,FormComponent],
   bootstrap: [ AppComponent ]
})*/
@NgModule ({
   imports: [ BrowserModule,
   RouterModule.forRoot(appRoutes), FormsModule],   //RouterModule.forRoot adds the routes to the application.
   declarations: [ AppComponent,AppFile1,AppFile2,AppFile3,AppFile4,AppFile5],
   bootstrap: [ AppComponent ]
})
export class AppModule { }