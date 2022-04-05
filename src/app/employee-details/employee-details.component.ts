import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number
  employee: Employee
  response:Response
  result:any
  constructor(private route: ActivatedRoute, private employeService: EmployeeService, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.result=data;
      this.employee=this.result.data;
    });
  }

  public back(){
    this.router.navigate(['/employees']);
  }
  logout(){
    this.router.navigate(['/']);
  }

}
