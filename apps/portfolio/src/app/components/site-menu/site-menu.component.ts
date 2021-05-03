import { ChangeDetectionStrategy, Component } from '@angular/core';
import { mainRoutesMetadata } from '../../main.routes';

@Component({
	selector: 'portfolio-site-menu',
	templateUrl: './site-menu.component.html',
	styleUrls: ['./site-menu.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteMenuComponent {
	mainRoutes = mainRoutesMetadata;
}
