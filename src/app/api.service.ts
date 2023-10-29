import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { leavemodel } from './leavemodel';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  //apply leave
   applyleave(data:leavemodel){
     return this.http.post<leavemodel>("http://localhost:3000/api/post",data);
   }
  // view leave
  viewleave(){
    return this.http.get<leavemodel[]>("http://localhost:3000/api/posts");
  }
  viewallleave(){
    return this.http.get<leavemodel[]>("http://localhost:3000/api/posts");
  }
  // delete leave
  delete(id:number){
    return this.http.delete<leavemodel>("http://localhost:3000/api/post/"+id)
  }
  // fetch data
  fetchdata(id:number){
    return this.http.get<leavemodel>("http://localhost:3000/posts/"+id)
  }
  // update data
  update(data:leavemodel,postId:number){
    return this.http.put<leavemodel>("http://localhost:3000/api/post/"+postId,data)
  }

  getLeavesByUserEmail(email: string) {
    console.log("email",email)
    return this.http.get<leavemodel[]>("http://localhost:3000/api/posts/"+email);
  }
  

}
