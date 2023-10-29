import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-def-dash',
  templateUrl: './def-dash.component.html',
  styleUrls: ['./def-dash.component.css']
})
export class DefDashComponent {

  activeTab: string = 'profile'; 
  activeTab1: string = 'payment';
  activeTab2: string = 'subscription';
  activeTab3: string = 'privacy';
  activeTab4: string = 'settings';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }

  setActiveTab1(tab: string) {
    this.activeTab1 = tab;
  }

  setActiveTab2(tab: string) {
    this.activeTab2 = tab;
  }

  setActiveTab3(tab: string) {
    this.activeTab3 = tab;
  }

  setActiveTab4(tab: string) {
    this.activeTab4 = tab;
  }


}
