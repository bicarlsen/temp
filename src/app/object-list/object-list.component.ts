import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-object-list',
  templateUrl: './object-list.component.html',
  styleUrls: ['./object-list.component.less']
})
export class ObjectListComponent implements OnInit {

	@Input()
	type?: any;

  @Input()
  component: any; // component used to display objects

	@Input()
	objects: Array<any>; // should be Array<this.type> if type is passed in, otherwise Array<any>; 

  constructor() { }

  ngOnInit() {
  }

}
