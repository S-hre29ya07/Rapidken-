import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-employee-registration',
  templateUrl: './employee-registration.component.html',
  styleUrls: ['./employee-registration.component.scss']
})
export class EmployeeRegistrationComponent implements OnInit {

  public name='';
  public position='';
  public about='';
  public joining='';
  public display = false;
  public formOpen = true;
  public employeeList = new Array;
  public message = "Your response is recorded";
  isLoggedIn: boolean;
  constructor( private employeService : EmployeeServiceService,public router: Router) { }

  ngOnInit(): void {
    if (!localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['/login']);
    } else {
      this.isLoggedIn = true;
    }
  }

  trimSpace() {
    this.name = this.name.trim();
  }
  onSubmit(){
    this.formOpen=false;
    this.display=true;
    let employeeData = {
      'id':this.name.toLowerCase()+this.about.toLowerCase()+this.position.toLowerCase()+this.joining,
      'name':this.name,
      'about':this.about,
      'position':this.position,
      'joining':this.joining
    }
    if(this.employeService.returnData()!=null){
      this.employeeList = this.employeService.returnData();
      let length = this.employeeList.length;
      if(this.employeeList.filter(data=> data['id']!=employeeData['id']).length!=length){
        this.message = "Employee already exist";
      }
      else{
        this.employeService.addData(employeeData);
        this.message = "Employee data is added";
      }
    }
    else{
      this.employeService.addData(employeeData);
      this.message = "Employee data is added";
    }
    // console.log(this.name);
    console.log(this.employeService.returnData());
    this.name='';
    this.joining='';
    this.about='';
    this.position='';
  }

  form(){
    this.formOpen=true;
    this.display=false;

  }
  goToList(){
    this.router.navigate(['/employee']);
    }


}
