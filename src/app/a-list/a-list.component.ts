import { Component, OnInit, Input } from '@angular/core';
import { A } from '../a/a.model';

@Component({
  selector: 'app-a-list',
  templateUrl: './a-list.component.html',
  styleUrls: ['./a-list.component.less']
})
export class AListComponent implements OnInit {

	@Input()
	aList: A[];

  constructor() { }

  ngOnInit() {
  }

}
