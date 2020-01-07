import { Component, OnInit } from '@angular/core';

import { A } from '../a/a.model';
import { AComponent } from '../a/a.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

	aList: A[];
  aType = A;
  aCompoennt = AComponent;

  constructor() { }

  ngOnInit() {
  	this.aList = [
  		{ name: 'A one' },
  		{ name: 'A two' },
  		{ name: 'A three' },
  		{ name: 'A four' }
  	];


  }

}
