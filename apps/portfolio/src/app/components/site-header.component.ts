import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'portfolio-site-header',
	templateUrl: './site-header.component.html',
	styleUrls: ['./site-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {}
