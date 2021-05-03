import { NgModule } from '@angular/core';
import { SharedModule } from '@portfolio/app/shared';
import { SiteHeaderComponent } from './site-header.component';

@NgModule({
	declarations: [SiteHeaderComponent],
	imports: [SharedModule],
	exports: [SiteHeaderComponent],
})
export class SiteHeaderComponentModule {}
