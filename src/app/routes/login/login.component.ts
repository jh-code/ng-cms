import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

declare var CoinHive: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild('form') public form: NgForm;

  public register = false;
  public user = {
    username: '',
    password: ''
  };

  constructor() {

  }

  ngOnInit() {
    const captcha = CoinHive.Captcha;
    console.log(captcha);

    captcha.CreateElements();
  }

}
