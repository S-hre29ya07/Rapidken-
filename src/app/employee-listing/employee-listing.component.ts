import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service';

@Component({
  selector: 'app-employee-listing',
  templateUrl: './employee-listing.component.html',
  styleUrls: ['./employee-listing.component.scss']
})
export class EmployeeListingComponent implements OnInit {

  public employeeList = new Array;
  currentPage = 0;
  recordsPerPage = 3;
  pagesCount = 0;
  employeesToDisplay: any[];
  searchTerm: string;
  constructor(private employeeService: EmployeeServiceService) { }

  ngOnInit(): void {
    if(this.employeeService.returnData())
    this.employeeList = this.employeeService.returnData();
    this.pagesCount = Math.ceil(this.employeeList.length / this.recordsPerPage);
    this.employeesToDisplay = this.employeeList.slice(0, this.recordsPerPage);

  }

  removeEmployee(employee){
    console.log(employee);
   this.employeeList = this.employeeService.removeData(employee);
  }

  nextPage() {
    this.currentPage++;
    const startIndex = this.currentPage * this.recordsPerPage;
    const endIndex = startIndex + this.recordsPerPage;
    this.employeesToDisplay = this.employeeList.slice(startIndex, endIndex);
  }
  previousPage() {
    this.currentPage--;
    const startIndex = this.currentPage * this.recordsPerPage;
    const endIndex = startIndex + this.recordsPerPage;
    this.employeesToDisplay = this.employeeList.slice(startIndex, endIndex);
    }
    filterEmployees() {
      this.employeesToDisplay = this.employeeList
        .filter(employee => employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
        .slice(0, this.recordsPerPage);
    }
}
