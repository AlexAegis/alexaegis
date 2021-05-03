import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@portfolio/app/shared';
import { PontPageComponent, PontPageComponentModule } from './pages/pont-page';

@NgModule({
	imports: [
		SharedModule,
		PontPageComponentModule,
		RouterModule.forChild([
			{
				path: '',
				component: PontPageComponent,
			},
		]),
	],
})
export class PontModule {}
