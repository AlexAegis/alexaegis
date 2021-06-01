import { NgModule } from '@angular/core';
import { SharedModule } from '@portfolio/app/shared';
import { RepositoryLinkComponentModule } from '../repository-link';
import { SiteMenuComponent } from './site-menu.component';

@NgModule({
	declarations: [SiteMenuComponent],
	imports: [SharedModule, RepositoryLinkComponentModule],
	exports: [SiteMenuComponent],
})
export class SiteMenuComponentModule {}
