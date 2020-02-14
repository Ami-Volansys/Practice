import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
ngOnInit()
{
  
    var Obser = new Observable(observer => {
      setTimeout(()=> {
        observer.next(1);
      },1000);
      setTimeout(()=> {
        observer.next(2);
      },5000);
      setTimeout(()=> {
        observer.complete();
      },6000);
    });
   let sub1 =  Obser.subscribe(value =>{
      console.log("Sub1",value);
      sub1.unsubscribe()
      
    },error => {
      console.log(error)
    }) 
    Obser.subscribe(value =>{
      console.log("Sub2",value)
    },error => {
      console.log(error)
    }) 
  
  }
}
  
