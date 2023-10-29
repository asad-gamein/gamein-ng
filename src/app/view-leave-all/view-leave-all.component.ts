import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-view-leave-all',
  templateUrl: './view-leave-all.component.html',
  styleUrls: ['./view-leave-all.component.css']
})
export class ViewLeaveAllComponent implements OnInit {
  displayedColumns: string[] = ['ID','Employee-id', 'Fromdate', 'Todate', 'Reason', 'Status','LeaveBal', "LeaveType", 'Action'];
  dataSource! :MatTableDataSource<any>;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.displayleave();
  }

  displayleave(){
    this.api.viewallleave().subscribe({
      next:(res)=>{
        this.dataSource = new MatTableDataSource(res);
      }
    })
  }
  delete(id:number){
    this.api.delete(id).subscribe(res=>{
     alert("Leave canceled successfully!!!")
     this.displayleave();
    })
   }

}
