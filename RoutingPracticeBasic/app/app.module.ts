import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AddEmployeeComponent} from './app.addemployee';
import {ShowEmployeeComponent}from './app.showemployee'
import{ FormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { SearchEmployeeComponent} from './app.searchemployee';
const routes:Routes=[
    {path:'',component:ShowEmployeeComponent},
    {path:'add',component:AddEmployeeComponent},
    {path:'show',component:ShowEmployeeComponent},
    {path:'search',component:SearchEmployeeComponent},
    ];
    

@NgModule({            // main method to run
    imports: [
        BrowserModule,FormsModule,RouterModule.forRoot(routes),HttpClientModule,FormsModule
        
        
    ],
    declarations: [
        AppComponent,AddEmployeeComponent,ShowEmployeeComponent,SearchEmployeeComponent
		],
    providers: [ ],
    bootstrap: [AppComponent]
})

export class AppModule { }