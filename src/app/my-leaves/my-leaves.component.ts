import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { ApiService } from '../api.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-my-leaves',
  templateUrl: './my-leaves.component.html',
  styleUrls: ['./my-leaves.component.css']
})
export class MyLeavesComponent implements OnInit {
  userName: string | undefined;
  displayedColumns: string[] = ['Employee-id', 'Fromdate', 'Todate', 'Reason', 'Status', 'Action'];
  dataSource!: MatTableDataSource<any>; // Add '!' here to indicate it will be initialized in the constructor

  constructor(public userService: UserServiceService, private apiService: ApiService) {
    const user = this.userService.getUser();
    if (user) {
      this.userName = user.email;
      const userEmail = user.email;
      this.apiService.getLeavesByUserEmail(userEmail).subscribe(
        (data: any) => {
          this.dataSource = new MatTableDataSource(data);
        },
        (error) => {
          console.error('Error fetching leaves:', error);
        }
      );
    }
  }

  ngOnInit(): void {
    // No need to call displayleave() separately. It's already done in the constructor.
  }
}
