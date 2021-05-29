import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardPageComponent {
	constructor(private activatedRoute: ActivatedRoute) {
		activatedRoute.data.subscribe((d) => console.log('data', d));
	}
}
