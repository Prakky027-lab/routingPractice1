import {Component, OnInit} from '@angular/core';
import { EmployeeService } from './app.employeeservice';
@Component({
    selector:'search-emp',
    templateUrl:'searchemployee.html'
})
export class SearchEmployeeComponent implements OnInit{
    constructor(private myservice:EmployeeService){}
    empId1:number;
    arr2:any[]=[];
    empAll:any[]=[];
    ngOnInit(){
        this.empAll=this.myservice.getAllEmployee();
        console.log(this.empAll);
    }
        status:any=false;
    search():any{
        this.status=true;
        for(let data of this.empAll){
            if(data.empId==this.empId1){
                this.arr2.push(data)

                //console.log(this.arr2);
            }
        }
    }
}