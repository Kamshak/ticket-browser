import { bootstrap } from 'angular2-meteor-auto-bootstrap';
import { disableDeprecatedForms, provideForms } from '@angular/forms';
import { AppComponent } from './app.component';
import {MeteorApp as App, METEOR_PROVIDERS} from 'angular2-meteor';

import {trace, UIROUTER_PROVIDERS, UIRouterConfig, Category} from "ui-router-ng2";
import {UIView} from "ui-router-ng2";
import {MyUIRouterConfig} from "./router.config";
import {HTTP_PROVIDERS} from "@angular/http";
import {provide} from "@angular/core";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import {LocationStrategy, PathLocationStrategy} from '@angular/common';

trace.enable(Category.TRANSITION, Category.VIEWCONFIG);

bootstrap(UIView, [
	disableDeprecatedForms(),
	provideForms(),
	...UIROUTER_PROVIDERS,
	...HTTP_PROVIDERS,
	provide(UIRouterConfig, {useClass: MyUIRouterConfig}),
	provide(LocationStrategy, {useClass: PathLocationStrategy})
]);
