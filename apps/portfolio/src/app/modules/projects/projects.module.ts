import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { ProjectsPageComponent } from './pages/projects-page.component';
import { projectPages } from './projects.routes';

@NgModule({
	declarations: [ProjectsPageComponent],
	imports: [
		SharedModule,
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
