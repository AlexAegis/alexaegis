import { NgModule } from '@angular/core';
import { SharedModule } from '@portfolio/app/shared';
import { SiteHeaderComponentModule } from '../site-header';
import { SiteMenuComponentModule } from '../site-menu/site-menu-component.module';
import { SiteFrameComponent } from './site-frame.component';

@NgModule({
	declarations: [SiteFrameComponent],
	imports: [SharedModule, SiteHeaderComponentModule, SiteMenuComponentModule],
	exports: [SiteFrameComponent],
})
export class SiteFrameComponentModule {}
