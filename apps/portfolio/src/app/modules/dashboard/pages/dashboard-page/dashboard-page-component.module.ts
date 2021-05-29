import { NgModule } from '@angular/core';
import { SharedModule } from '@portfolio/app/shared';
import { DashboardPageComponent } from './dashboard-page.component';

@NgModule({
	declarations: [DashboardPageComponent],
	imports: [SharedModule],
	exports: [DashboardPageComponent],
})
export class DashboardPageComponentModule {}
