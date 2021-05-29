import { NgModule } from '@angular/core';
import { SharedModule } from '@portfolio/app/shared';
import { RepositoryLinkComponentModule } from '../repo-url.component';
import { SiteMenuComponent } from './site-menu.component';

@NgModule({
	declarations: [SiteMenuComponent],
	imports: [SharedModule, RepositoryLinkComponentModule],
	exports: [SiteMenuComponent],
})
export class SiteMenuComponentModule {}
