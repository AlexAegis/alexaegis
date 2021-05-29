import { NgModule } from '@angular/core';
import { MiscellaneousModule } from '@portfolio/app/modules/miscellaneous/miscellaneous.module';
import { SharedModule } from '@portfolio/app/shared';
import { SiteHeaderComponentModule } from '../site-header';
import { SiteMenuComponentModule } from '../site-menu/site-menu-component.module';
import { SiteFrameComponent } from './site-frame.component';

@NgModule({
	declarations: [SiteFrameComponent],
	imports: [
		SharedModule,
		SiteHeaderComponentModule,
		SiteMenuComponentModule,
		MiscellaneousModule,
	],
	exports: [SiteFrameComponent],
})
export class SiteFrameComponentModule {}
