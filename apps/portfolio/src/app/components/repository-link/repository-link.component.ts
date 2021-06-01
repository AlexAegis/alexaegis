import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import packageInfo from '../../../../../../package.json';

@Component({
	selector: 'portfolio-repository-link',
	templateUrl: './repository-link.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RepositoryLinkComponent {
	homepage = packageInfo.homepage;
	faGithub = faGithub;
}
