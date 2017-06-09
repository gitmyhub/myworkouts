import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
//import { ContactPage } from '../contact/contact';
import { WorkoutsPage } from '../workouts/workouts';
import { AddWorkoutPage } from '../add-workout/add-workout';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

@ViewChild('myNav') nav: NavController;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
 // tab3Root: any = ContactPage;
  workoutsRoot: any = WorkoutsPage;
  addworkoutsRoot: any = AddWorkoutPage;
  constructor() {
    
  }

  setTab(tabval){
    //this.nav.select(tabval);
  }
}
