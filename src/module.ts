import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { NgxCardNumberTemplate, NgxCardNameTemplate, NgxCardExpiryTemplate, NgxCardCvcTemplate } from './inputs';
import { NgxCard } from './card';

const CARD_DIRECTIVES = [
	NgxCard,
	NgxCardNumberTemplate,
	NgxCardNameTemplate,
	NgxCardExpiryTemplate,
	NgxCardCvcTemplate,
];

@NgModule({
	declarations: [CARD_DIRECTIVES],
	exports: [CARD_DIRECTIVES],
	schemas: [NO_ERRORS_SCHEMA]
})
export class CardModule { }
