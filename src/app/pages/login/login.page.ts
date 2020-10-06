import { Component, OnInit } from '@angular/core';

import { AppVersion } from '@ionic-native/app-version/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  numeroVersion: string;

  constructor( private appVersion: AppVersion ) { }

  ngOnInit() {
  }


  obtenerVersion() {

    this.appVersion.getVersionNumber();

  }
}




