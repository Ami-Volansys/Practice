import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'forgot-password',
  template: `<div style=" position:fixed;top:38%;left:42%;">
            <p style="font-size:17px;font-family: sans-serif;text-align:left">Enter email:<input type="text" class="form-control col-sm border border-dark" id="email"/></p>
            <button class="btn btn-primary  border border-dark ">Send mail</button>
            </div>`
          })
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
