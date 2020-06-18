import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rxjs-lib';
    
  public left = "{name: 'Samir', age: 25, city: 'Tunis'}"
  public right = "{name: 'Houssem', age: 27, city: 'Paris'}"
 
 
  public _left : {[key:string]:any}  = {
"quiz": {
       "sport":{
          "q1":{
             "question":"10",
             "options":[
                "New York Bulls",
                "Los Angeles Kings",
                "Golden State Warriros",
                "Huston Rocket"
             ],
             "answer":"Huston Rocket"
          }
       },
       "maths":{
          "q1":{
             "question":"5 + 7 = ?",
             "options":[
                "10",
                "11",
                "12",
                "13"
             ],
             "answer":"12"
          },
          "q2":{
             "question":"12 - 8 = ?",
             "options":[
                "1",
                "2",
                "3",
                "4"
             ],
             "answer":"4"
          }
       }
    }
 };
  public _right : {[key:string]:any} = {
    "quiz":{
           "sport":{
              "q1":{
                 "question":"11",
                 "options":[
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                 ],
                 "answer":"Huston Rocket"
              }
           },
           "maths":{
              "q1":{
                 "question":"5 + 7 = ?",
                 "options":[
                    "10",
                    "11",
                    "12",
                    "13"
                 ],
                 "answer":"12"
              },
              "q2":{
                 "question":"12 - 8 = ?",
                 "options":[
                    "1",
                    "2",
                    "3",
                    "4"
                 ],
                 "answer":"4"
              }
           }
        }
     };



  constructor(){

  }
}

import { Pipe, PipeTransform } from '@angular/core';
@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value): any {
    if(!value) return null;
    return Object.keys(value);
  }
}