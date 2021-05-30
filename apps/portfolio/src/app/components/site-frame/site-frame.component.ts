import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'portfolio-site-frame',
	templateUrl: './site-frame.component.html',
	styleUrls: ['./site-frame.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFrameComponent {}
