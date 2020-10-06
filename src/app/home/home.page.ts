import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  lista = [ 'Ordenes de Trabajo' , 'Stock D13' , 'Stock D19' , 'Stock N' ];

  constructor() {}

  ngOnInit() {

  }

  onClick() {
    console.log('test');
  }

  // animar() {
  //   vanishIn
  // }

}
