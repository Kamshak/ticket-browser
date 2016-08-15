import {Ng2StateDeclaration} from "ui-router-ng2/ng2/interface";
import {TICKETS_STATES} from "./imports/tickets/tickets.states";
import {HOME_STATES} from "./imports/home/home.states";
import {AppComponent} from "./app.component";
import {TicketsComponent} from "./imports/tickets/tickets.component";

// The top level states
let MAIN_STATES: Ng2StateDeclaration[] = [
    // The top-level app state. This state fills the root
    { name: 'app', component: AppComponent, abstract: true }
];

export let INITIAL_STATES: Ng2StateDeclaration[] =
    MAIN_STATES
			.concat(TICKETS_STATES)
			.concat(HOME_STATES);
