import { Component, OnInit, OnChanges, Input, DoCheck } from '@angular/core';
import template from './navbar.component.html';
import { NavigationItem } from './navigation-item';
import { UIROUTER_DIRECTIVES, UIROUTER_PROVIDERS, StateRegistry, State } from "ui-router-ng2";
import { Ng2StateDeclaration } from "ui-router-ng2";

@Component({
	selector: 'navbar',
	template,
	directives: [UIROUTER_DIRECTIVES]
})
export class NavbarComponent implements OnInit, OnChanges {
	@Input('items') navigationItems: NavigationItem[] = [];
	public states: {[key:string]: State};

	constructor(private stateRegistry: StateRegistry) {
		console.log("StateRegistry:", stateRegistry.get());
		this.states = stateRegistry.stateQueue.states;
		console.log(this.states);
	}

	ngOnChanges(changes: any) {
		console.log("StateRegistry ngOnChanges:", this.stateRegistry.get());
		console.log("OnChanges", changes);
	}

	ngOnInit() {
		console.log("StateRegistry OnInit:", this.stateRegistry.get());
	}

	ngDoCheck() {}

	public getNavigationItems() {
		return this.navigationItems;
	}
}
