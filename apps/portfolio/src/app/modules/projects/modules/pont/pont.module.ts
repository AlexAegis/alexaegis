import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'apps/portfolio/src/app/shared';
import { PontPageComponent } from './pages/pont-page.component';

@NgModule({
	declarations: [PontPageComponent],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: PontPageComponent,
			},
		]),
	],
})
export class PontModule {}
