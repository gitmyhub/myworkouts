import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { WorkoutService } from '../../services/workout.service';
import { WorkoutsPage } from '../workouts/workouts.ts';

@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html',
  providers: [WorkoutService]
})
export class AddWorkoutPage {
  title: string;
  note: string;
  type: string;
  result: any;


  constructor(public navCtrl: NavController, private _workoutService: WorkoutService) {
      this.title;
      this.note;
      this.type;
      this.result;
  }

  onSubmit(){
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    };
  this._workoutService.addWorkout(workout).subscribe(data => {
    this.result = data
  },
  err => console.log(err),
  () => {
          console.log('workout Added');
       //   this.navCtrl.push(WorkoutsPage);
          this.navCtrl.parent.select(0);
        });

}


}
