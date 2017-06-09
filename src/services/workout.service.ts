import {Injectable, Inject} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
    export class WorkoutService {
        http: Http;
        apiKey: String;
        workoutsUrl: String;
        static get parameters(){
            return [Http];
        }

        constructor(http:Http){
            this.http = http;
            this.apiKey = 'IZ_WvXEYJ2J1etcolv22P_tTnc7G12Rd';
            this.workoutsUrl = 'https://api.mlab.com/api/1/databases/myworkoutsapp/collections/workouts';
            console.log('Service Connected...');
        }

  getWorkouts(){
    return this.http.get(this.workoutsUrl+'?apiKey='+this.apiKey)
    .map(res => res.json())
  }        

  addWorkout(workout){
      var headers = new Headers();
      headers.append('content-type','application/json');
      return this.http.post(this.workoutsUrl+'?apiKey='+this.apiKey, JSON.stringify(workout), {
          headers : headers
      }).map(res => res.json);
  }

  deleteWorkout(workoutId){
      console.log(workoutId);
      var headers = new Headers();
      headers.append('content-type','application/json');
      return this.http.delete(this.workoutsUrl+'/'+workoutId+'?apiKey='+this.apiKey, {
          headers : headers
      }).map(res => res.json);      
  }

    }