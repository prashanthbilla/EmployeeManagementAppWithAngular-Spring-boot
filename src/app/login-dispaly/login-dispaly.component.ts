import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';



@Component({
  selector: 'app-login-dispaly',
  templateUrl: './login-dispaly.component.html',
  styleUrls: ['./login-dispaly.component.css']
})
export class LoginDispalyComponent implements OnInit {

  employees: Employee[];
  response:Response
  result:any
  id: number;
  employee: Employee = new Employee();

  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.employeeService.getOneEmployeesList(this.id).subscribe(data => {
      this.result=data;
      this.employees=this.result.data;
      console.log(this.employees)
  },error => console.log(error));
}

updateEmployee(id: number){
  this.router.navigate(['update-one', id]);
}

logout(){
  this.router.navigate(['/']);
}

}
