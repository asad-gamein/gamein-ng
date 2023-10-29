import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.css']
})
export class NotepadComponent implements OnInit {

  list: any[] = [];


  constructor() { }

  ngOnInit(): void {
    const storedData = JSON.parse(localStorage.getItem('hello') || '[]');
    if (Array.isArray(storedData)) {
      this.list = storedData;
    } else {
      this.list = [];
    }
  }
  
  

  newNote(item:string)
  {
    
    this.list.push({name:item})
    localStorage.setItem('hello', JSON.stringify(this.list))

  }



  removenote(i:number){
    this.list.splice(i, 1);
    localStorage.setItem('hello', JSON.stringify(this.list))
    // this.list=this.list.filter(item=>item.id!==id);
  }
}