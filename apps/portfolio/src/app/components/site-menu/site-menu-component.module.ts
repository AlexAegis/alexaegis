import { NgModule } from '@angular/core';
import { SharedModule } from '@portfolio/app/shared';
import { SiteMenuComponent } from './site-menu.component';

@NgModule({
	declarations: [SiteMenuComponent],
	imports: [SharedModule],
	exports: [SiteMenuComponent],
})
export class SiteMenuComponentModule {}
