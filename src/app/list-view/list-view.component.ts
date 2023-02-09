import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from '../employee-service.service'
@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  employeeList: any[];
  currentPage = 0;
  recordsPerPage = 3;
  pagesCount = 0;
  employeesToDisplay: any[];

  constructor( private employeService : EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeList = this.employeService.returnData();
    this.pagesCount = Math.ceil(this.employeeList.length / this.recordsPerPage);
    this.employeesToDisplay = this.employeeList.slice(0, this.recordsPerPage);

  }

  deleteEmployee(employee) {
    this.employeeList = this.employeService.removeData(employee);
    this.pagesCount = Math.ceil(this.employeeList.length / this.recordsPerPage);
    this.employeesToDisplay = this.employeeList.slice(0, this.recordsPerPage);
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
}
