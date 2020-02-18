import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  [x: string]: any;
  
  ngOnInit(){
  
    
  }
    
  
  
  FetchData = function()
  {
   
    //let x =  (<HTMLInputElement>document.getElementById("Source")).value;
    //let y =  (<HTMLInputElement>document.getElementById("Dest")).value;
  
      this.Data = require('../assets/TrainData.json');
    
      
   //this.data2 = JSON.stringify(this.Data);
     //if(x === this.data2.Train_no)
    // {
          //this.data2.Train_no = require('../assets/TrainData.json');
          document.getElementById("text").innerHTML;
     //}
      
   
 
  }


 

}