import { Component } from '@angular/core';
import { TabsPage } from '../tabs/tabs.ts';
import { NavController, NavParams } from 'ionic-angular';
import { WorkoutService } from '../../services/workout.service';
import { WorkoutsPage } from '../workouts/workouts.ts';


@Component({
  selector: 'page-workoutdetails',
  templateUrl: 'workoutdetails.html',
    providers: [WorkoutService]
})
export class WorkoutDetailsPage {
    workout: any;
    result: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _workoutService: WorkoutService) {
        this.workout = this.navParams.get('workout');
  }

  deleteWorkout(workoutId){
  this._workoutService.deleteWorkout(workoutId).subscribe(data => {
    this.result = data
  },
  err => console.log(err),
  () => {
    console.log('workout Deleted');
   this.navCtrl.parent.select(0);
      });
  }

}
