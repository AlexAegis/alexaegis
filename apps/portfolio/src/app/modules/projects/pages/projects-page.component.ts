import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	templateUrl: './projects-page.component.html',
	styleUrls: ['./projects-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsPageComponent {}
