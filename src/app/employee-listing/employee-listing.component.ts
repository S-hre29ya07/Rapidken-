import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.scss']
})
export class EmployeeListingComponent implements OnInit {

  public employeeList = new Array;

  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    if(this.employeeService.returnData())
    this.employeeList = this.employeeService.returnData();

  }

  removeEmployee(employee){
    console.log(employee);
   this.employeeList = this.employeeService.removeData(employee);
   

  }
}
