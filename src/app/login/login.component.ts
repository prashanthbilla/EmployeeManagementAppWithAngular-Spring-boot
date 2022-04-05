import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userId:string;
  password:string;
  response:Response
  result:any
  status:number;
  message:string;
  employee: Employee;


  constructor(private router: Router, private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  public doNavigateToCreate(){
    this.router.navigate(['/signup']);
  }

  public doLogin(){
    if(this.userId==="admin" && this.password==="admin"){
      window.alert("Admin login successful")
      this.router.navigate(['employees']);
    }
    else{
    this.employeeService.doLign(this.userId,this.password).subscribe(data =>{
      this.result = data;
      this.response=this.result;
      this.status=this.result.status;
      this.message=this.result.message;
      this.employee=this.result.data;
      if(this.status===200){
        window.alert("Employee Login successful")
        this.succesLogin();
      }
      else{
        window.alert(this.message);
        this.router.navigate(['']);
      }
    
    });
  }

  }
  public succesLogin(){
    this.router.navigate(['success-login', this.employee.id]);
  }
  
}
