import { NgModule } from '@angular/core';
import { SharedModule } from '@portfolio/app/shared';
import { RepositoryLinkComponent } from './repository-link.component';

@NgModule({
	declarations: [RepositoryLinkComponent],
	imports: [SharedModule],
	exports: [RepositoryLinkComponent],
})
export class RepositoryLinkComponentModule {}
