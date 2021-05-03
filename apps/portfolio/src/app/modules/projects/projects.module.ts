import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsPageComponent, ProjectsPageComponentModule } from './pages/projects-page';
import { projectPages } from './projects.routes';

@NgModule({
	imports: [
		SharedModule,
		ProjectsPageComponentModule,
		RouterModule.forChild([
			{
				path: '',
				component: ProjectsPageComponent,
				children: projectPages,
			},
		]),
	],
})
export class ProjectsModule {}
