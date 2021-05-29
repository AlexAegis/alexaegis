import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardPageComponentModule } from './pages/dashboard-page/dashboard-page-component.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
	imports: [
		CommonModule,
		DashboardPageComponentModule,
		RouterModule.forChild([
			{
				path: '',
				component: DashboardPageComponent,
			},
		]),
	],
})
export class DashboardModule {}
