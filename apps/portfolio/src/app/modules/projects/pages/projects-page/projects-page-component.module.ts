import { NgModule } from '@angular/core';
import { SharedModule } from '@portfolio/app/shared';
import { ProjectsPageComponent } from './projects-page.component';

@NgModule({
	declarations: [ProjectsPageComponent],
	imports: [SharedModule],
	exports: [ProjectsPageComponent],
})
export class ProjectsPageComponentModule {}
