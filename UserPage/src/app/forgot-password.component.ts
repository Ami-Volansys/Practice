import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forgot-password',
  template: `<div style=" position:fixed;
  top:38%;
  left:42%;">
  
      <p style="font-size: 25px;font-family: sans-serif;text-align:left">Email</p> 
      <input type="text" class="form-control col-sm border border-dark">
      <button class="btn btn-primary form-control col-sm border border-secondary "> Login</button>
  
  </div>`
  

})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
