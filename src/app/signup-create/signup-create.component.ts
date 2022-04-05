import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-signup-create',
  templateUrl: './signup-create.component.html',
  styleUrls: ['./signup-create.component.css']
})
export class SignupCreateComponent implements OnInit {

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
        this.goToLogin();
      }else{
        window.alert("Register has been successful")
        this.goToLogin();
      }
    },
    error => console.log(error));
  }

  goToLogin(){
    this.router.navigate(['/']);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();
  }

  back(){
    this.router.navigate(['/']);
  }

}