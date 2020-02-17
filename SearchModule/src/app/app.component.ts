import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  ngOnInit(){
  
    
  }
    
  
  
  FetchData = function()
  {
   
      this.Data = require('../assets/TrainData.json');
      
     // this.data2 = JSON.stringify(this.Data);
      document.getElementById("text").innerHTML;
    
 
  }


 

}