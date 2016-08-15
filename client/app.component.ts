import { Component, OnInit } from '@angular/core';

import { TicketsComponent } from './imports/tickets/tickets.component';
import { NavigationItem } from './imports/navbar/navigation-item';
import { NavbarComponent } from './imports/navbar/navbar.component';
import { UIROUTER_DIRECTIVES } from "ui-router-ng2";
import { LocationStrategy } from '@angular/common';
import { UIRouter } from "ui-router-ng2";

import template from './app.component.html';

@Component({
  selector: 'app',
  template,
  directives: [TicketsComponent, UIROUTER_DIRECTIVES, NavbarComponent]
})
export class AppComponent implements OnInit {
	public navigationItems: NavigationItem[];

	constructor(uiRouter: UIRouter) {
		console.log(uiRouter.stateRegistry.get());
	}

	ngOnInit() {
		this.navigationItems = [{
			title: "Home",
			stateName: "app.home"
		}, {
			title: "Tickets",
			stateName: "app.tickets"
		}];
  }
}
