import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import { Response } from '../response';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[];
  response:Response;
  result:any;
  results:any;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees(){
    this.employeeService.getEmployeesList().subscribe(data => {
      this.result = data;
       this.employees=this.result.data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.results=window.confirm("Do you want to delete the employee ?")
    if(this.results==true){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      this.getEmployees();
    })
  }else{
    window.alert("Data not deleted");
  }
  }

  public addEmployee(){
    this.router.navigate(['create-employee']);
  }

  public logout(){
    this.router.navigate(['/']);
  }
}
