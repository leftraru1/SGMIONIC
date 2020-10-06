import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.scss'],
})
export class CabeceraComponent implements OnInit {

  // tslint:disable-next-line: ban-types
  @Input() titulo: String;

  constructor() { }

  ngOnInit() {}

}
