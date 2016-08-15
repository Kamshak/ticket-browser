import { TicketsComponent } from './tickets.component';
import { Ng2StateDeclaration } from "ui-router-ng2";

export let TICKETS_STATES: Ng2StateDeclaration[] = [
	{
		name: "app.tickets",
		url: "/tickets",
		component: TicketsComponent
	}
];
