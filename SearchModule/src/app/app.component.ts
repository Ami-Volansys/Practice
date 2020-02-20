import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';


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
   
  let x =  (<HTMLInputElement>document.getElementById("Source")).value;
  
  //let y =  (<HTMLInputElement>document.getElementById("Dest")).value;
 
      this.Data = require('../assets/TrainData.json');
      //console.log(this.Data)
      for(var key in this.Data)
      {
       
       
        //console.log(key)
        if(this.Data[key].Train_no === x)
        {
         let data3 =[];
          
         
         
          //this.data2 =Array.of(this.Data[key]);
         data3 = Array.of(this.Data[key]);

         //data3= this.data2[key];
         document.getElementById("text").innerHTML;
         console.log(data3)
     
          }
          
          
        
   
   //this.data2 =this.Data[key];
          
      
          ///this.data3 = Object.keys(this.data2);

     //console.log(this.data3)
     
          //this.data2 = key;
        
        
      
       
      
      
   //this.data2 = JSON.stringify(this.Data);
     //if(x === this.data2.Train_no)
    // {
          //this.data2.Train_no = require('../assets/TrainData.json');
        
     //}
      
   
 
  }



  }

}