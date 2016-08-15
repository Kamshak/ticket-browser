import { Component, OnInit } from '@angular/core';
import template from './home.component.html';
import { UISref } from "ui-router-ng2";

@Component({
	selector: 'home',
	directives: [UISref],
	template
})
export class HomeComponent implements OnInit {
	constructor() { }

	ngOnInit() { }
}
