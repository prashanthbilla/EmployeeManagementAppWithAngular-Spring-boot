import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-one-employee',
  templateUrl: './update-one-employee.component.html',
  styleUrls: ['./update-one-employee.component.css']
})
export class UpdateOneEmployeeComponent implements OnInit {

  employees: Employee;
  response:Response
  result:any
  id: number;
  employee: Employee = new Employee();
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id)
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.result=data;
      this.employee=this.result.data;
      console.log(this.employee)
    }, error => console.log(error));
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.id, this.employee).subscribe( data =>{
      window.alert("Updated employee has been successful")
      this.goToEmployee();
    }
    , error => console.log(error));
  }

  goToEmployee(){
    this.router.navigate(['/success-login', this.id]);
  }

  back(){
    this.router.navigate(['/employees']);
  }

  logout(){
    this.router.navigate(['/']);
  }

}
