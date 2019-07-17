import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    constructor(private http:HttpClient){}

    empAll:any[]=[{empId:101,empName:"Ram",empSal:12340,empDep:"JAVA"},
                  {empId:102,empName:"Sham",empSal:11110,empDep:"DevOps"},
                  {empId:103,empName:"Johny",empSal:11220,empDep:"Python"}]
   
    addEmployee(data:any){
        this.empAll.push(data);
        return true;
    }

    getAllEmployee(){
        // return this.http.get("assets/employee.json");
 
        return this.empAll;
     }
}