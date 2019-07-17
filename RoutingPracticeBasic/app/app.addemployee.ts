import {Component} from '@angular/core';
import { EmployeeService } from "./app.employeeservice";
import { Router } from "@angular/router";
@Component({
    selector:'add-emp',
    templateUrl:'addemployee.html'
})
export class AddEmployeeComponent{
    constructor(private service:EmployeeService, private router:Router){}
    empId:number;
    empName:string;
    empSal:number;
    empDep:string;
    addData:any;
    add():any{
        this.addData=({empId:this.empId,empName:this.empName,empSal:this.empSal,empDep:this.empDep});   
        if(this.service.addEmployee(this.addData)){
            this.router.navigate(['show']);
        }
    }
}
