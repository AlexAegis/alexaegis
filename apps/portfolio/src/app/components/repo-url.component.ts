import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { SharedModule } from '@portfolio/app/shared';
import { homepage } from '../../../../../package.json';

@Component({
	selector: 'portfolio-repository-link',
	template: `
		<a class="no-decor" target="_blank" rel="noopener noreferrer" [href]="homepage">
			<fa-icon [icon]="faGithub"></fa-icon>
		</a>
	`,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryLinkComponent {
	homepage = homepage;
	faGithub = faGithub;
}

@NgModule({
	declarations: [RepositoryLinkComponent],
	imports: [SharedModule],
	exports: [RepositoryLinkComponent],
})
export class RepositoryLinkComponentModule {}
