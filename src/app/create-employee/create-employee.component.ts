import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  result:any;
  response:Response;

  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveEmployee(){
    
    this.employeeService.createEmployee(this.employee).subscribe( data =>{
      this.result=data
      this.response=this.result;
      if(this.response.status===404){
        window.alert("Employee not created, All fields are mandatory...");
        this.goToEmployeeList();
      }else{
        window.alert("Employ added successfully")
        this.goToEmployeeList();
      }
    },
    error => console.log(error));

    
  }

  goToEmployeeList(){
    this.router.navigate(['/employees']);
  }
  
  onSubmit(){
    this.saveEmployee();
  }

  back(){
    this.router.navigate(['/employees']);
  }

  logout(){
    this.router.navigate(['/']);
  }
}
