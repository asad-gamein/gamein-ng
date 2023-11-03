import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyLeaveComponent } from './apply-leave/apply-leave.component';
import { UpdateLeaveComponent } from './update-leave/update-leave.component';
import { ViewLeaveComponent } from './view-leave/view-leave.component';
import { ViewLeaveAllComponent } from './view-leave-all/view-leave-all.component';
import { GuardGuard } from './guard.guard';
import { LoginComponent } from './login/login.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import {HomeDashComponent } from './home-dash/home-dash.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashComponent } from './admin-dash/admin-dash.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { UserDashComponent } from './user-dash/user-dash.component';
import { DefDashComponent } from './def-dash/def-dash.component';
import { MyLeavesComponent } from './my-leaves/my-leaves.component';
import { NotepadComponent } from './notepad/notepad.component';
import { AdminGuard } from './admin.guard';
const routes: Routes = [
  {path: '',component:LoginComponent},
  {path:'viewleave',component:ViewLeaveComponent},
  {path:'viewallleave',component:ViewLeaveAllComponent},
  {path: 'applyleave', component: ApplyLeaveComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'home', component: HomeDashComponent},
  // {path: 'admin', component: AdminDashComponent},
  { path: 'holidays', component: HolidaysComponent },
  {
    path: 'admin',
    component: AdminDashComponent,
    canActivate: [AdminGuard]
  },
  { path: 'notepad', component: NotepadComponent },
  { path: 'myleaves', component:MyLeavesComponent},
  {path:'updateleave/:id',component:UpdateLeaveComponent},
  {path: 'user', component:UserDashComponent},
  {path: 'default', component:DefDashComponent},
  { path: '**', component: ErrorpageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
