import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import { DirDirective } from './dir.directive';
import { PipePipe } from './pipe.pipe';
import { LoginComponent } from './login/login.component';
import { GuardGuard } from './guard.guard';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { UpdateLeaveComponent } from './update-leave/update-leave.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ViewLeaveAllComponent } from './view-leave-all/view-leave-all.component';
import { HomeDashComponent } from './home-dash/home-dash.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { HolidaysPortalComponent } from './holidays-portal/holidays-portal.component';
import { LeavePortalComponent } from './leave-portal/leave-portal.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { DefDashComponent } from './def-dash/def-dash.component';
import { ApplyLeavePortalComponent } from './apply-leave-portal/apply-leave-portal.component';
import { AuthService } from './auth.service';
import { MyLeavesComponent } from './my-leaves/my-leaves.component';
import { UserServiceService } from './user-service.service';
import { MyLeavesPortalComponent } from './my-leaves-portal/my-leaves-portal.component';
import { AdminGuard } from './admin.guard';
import { NotepadComponent } from './notepad/notepad.component';
import { NotepadPortalComponent } from './notepad-portal/notepad-portal.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplyLeaveComponent,
    ViewLeaveComponent,
    UpdateLeaveComponent,
    ErrorpageComponent,
    DirDirective,
    PipePipe,
    LoginComponent,
    ViewLeaveAllComponent,
    HomeDashComponent,
    SignupComponent,
    AdminDashComponent,
    HolidaysComponent,
    HolidaysPortalComponent,
    LeavePortalComponent,
    UserDashComponent,
    DefDashComponent,
    ApplyLeavePortalComponent,
    MyLeavesComponent,
    MyLeavesPortalComponent,
    NotepadComponent,
    NotepadPortalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [AuthService,UserServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
