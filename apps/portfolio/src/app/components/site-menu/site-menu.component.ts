import { ChangeDetectionStrategy, Component } from '@angular/core';
import { menuConfig } from '@portfolio/app/app.routes';

@Component({
	selector: 'portfolio-site-menu',
	templateUrl: './site-menu.component.html',
	styleUrls: ['./site-menu.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteMenuComponent {
	menuConfiguration = menuConfig;
}
