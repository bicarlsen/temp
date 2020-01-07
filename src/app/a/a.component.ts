import { Component, OnInit, Input } from '@angular/core';
import { A } from './a.model';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.less']
})
export class AComponent implements OnInit {

	@Input()
	a: A;

  constructor() { }

  ngOnInit() {
  }

}
