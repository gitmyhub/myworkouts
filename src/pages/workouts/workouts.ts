import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../services/workout.service';
import { WorkoutDetailsPage } from '../workoutdetails/workoutdetails';

@Component({
  selector: 'page-workouts',
  templateUrl: 'workouts.html',
  providers: [WorkoutService]
})
export class WorkoutsPage implements OnInit{
  workouts: any;
  //workoutService: WorkoutService;

/*  static get parameters(){
    console.log("Returned Parameters...")
    return [[WorkoutService]];
  } */

  constructor(public navCtrl: NavController, private _workoutService: WorkoutService) {
 /*     console.log("Constructor Called...")
      this.workoutService = workoutService; */
      this._workoutService.getWorkouts().subscribe(workouts => {
        console.log(workouts);
        this.workouts = workouts;
    });
  }
  ionViewWillEnter(){
      this._workoutService.getWorkouts().subscribe(workouts => {
        console.log(workouts);
        this.workouts = workouts;
    });    
  }

  ngOnInit(){
      this._workoutService.getWorkouts().subscribe(workouts => {
        console.log(workouts);
        this.workouts = workouts;
    });
  }
  
  WorkoutClicked(event, workout){
      this.navCtrl.push(WorkoutDetailsPage, {
          workout: workout
      });

  }
}
