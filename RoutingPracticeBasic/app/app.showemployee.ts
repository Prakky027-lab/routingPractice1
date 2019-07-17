import { Component, OnInit } from "@angular/core";
import { EmployeeService } from './app.employeeservice';
@Component({
    selector:'show-emp',
    templateUrl:'showemployee.html'
})
export class ShowEmployeeComponent implements OnInit{

    constructor(private myservice:EmployeeService){}
    empAll:any[]=[];

    ngOnInit(){
       this.empAll=this.myservice.getAllEmployee();
    }

    delete(data:number):any{
        this.empAll.splice(data,1); //To delete the data
    }

}