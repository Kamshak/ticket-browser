import { Component, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizationService, BROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';
import { MeteorComponent } from 'angular2-meteor';

import { TicketsCollection } from '../../../both/collections/TicketsCollection';
import { TicketDataObject, TicketComment } from '../../../both/models/TicketDataObject';
import { keys, chain, partialRight, debounce } from "lodash";

import template from './tickets.component.html';

@Component({
	selector: 'tickets',
	providers: [DomSanitizationService, BROWSER_SANITIZATION_PROVIDERS],
	template
})
export class TicketsComponent extends MeteorComponent implements OnInit {
	tickets: Mongo.Cursor<TicketDataObject>;

	private shortNameMap: {[key:string]: number} = {
		"Pointshop 2": 596,
		"Weapons": 677,
		"Drops": 1104,
		"Gambling": 645,
		"Airdrops": 2015,
		"Boosters": 648,
		"Advent Calendar": 1799
	};

	public loading: boolean = false;

	public settings: {
		searchText: string,
		activeScripts: {[key:string] : boolean}
	} = {
		searchText: "",
		activeScripts: {
			"Pointshop 2": true,
			"Weapons": true,
			"Gambling": true,
			"Airdrops": true,
			"Boosters": true,
			"Advent Calendar": true,
			"Drops": true
		}
	};

	public searchText: string;
	subscription: Meteor.SubscriptionHandle;

	constructor(private sanitizer: DomSanitizationService) {
		super();
	}

	public getTickets() {
		return this.tickets;
	}

	public getScriptNames() {
		return keys(this.shortNameMap);
	}

	public toggleScript(scriptName: string) {
		this.settings.activeScripts[scriptName] = !this.settings.activeScripts[scriptName];
		this.resubscribe();
	}

	public getTrustedHtml(comment: TicketComment) {
		return this.sanitizer.bypassSecurityTrustHtml(comment.text);
	}

	ngOnInit() {
		this.tickets = TicketsCollection.find();
		this.resubscribe();
	}

	public resubscribe: () => void = debounce(() => {
		console.log("Resubscribe");
		this.loading = true;
		let activeScriptIds = chain(this.settings.activeScripts)
			.toPairs()
			.filter(x => x[1])
			.map(x => this.shortNameMap[<string>x[0]])
			.value();
			console.log('Tickets', 10, this.settings.searchText, activeScriptIds);

		if (this.subscription) {
			this.subscription.stop();
		}
		this.subscription = this.subscribe('Tickets', 10, this.settings.searchText, activeScriptIds, () => {
			this.tickets = TicketsCollection.find({},{
				sort: {
					score: -1
				},
				limit: 10
			});
			this.loading = false;
			console.log("Subscription Finished", this.tickets.fetch());
		}, true);
	}, 100);
}
