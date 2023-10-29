import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../api.service';
import { ExcelService } from '../excel.service';
@Component({
  selector: 'app-view-leave',
  templateUrl: './view-leave.component.html',
  styleUrls: ['./view-leave.component.css']
})
export class ViewLeaveComponent implements OnInit {
  displayedColumns: string[] = ['ID','Employee-id', 'Fromdate', 'Todate', 'Reason', 'Status','LeaveBal','LeaveType', 'Action'];
  dataSource! :MatTableDataSource<any>;
  constructor(private api:ApiService, private excelService: ExcelService) { }

  ngOnInit(): void {
    this.displayleave();
  }

  exportToExcel(): void {
    this.excelService.exportToExcel(this.dataSource.data, 'leave_data'); // Call the exportToExcel function
  }

  displayleave() {
    this.api.viewleave().subscribe({
      next: (res) => {
        console.log('Received data from the API:', res);
        this.dataSource = new MatTableDataSource(res);
      },
      error: (error) => {
        console.error('Error while fetching data:', error);
      }
    });
}


  //delete
  delete(id:number){
   this.api.delete(id).subscribe(res=>{
    alert("Leave canceled successfully!!!")
    this.displayleave();
   })
  }
}
