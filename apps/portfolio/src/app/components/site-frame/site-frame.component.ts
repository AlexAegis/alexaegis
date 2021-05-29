import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterData } from '@portfolio/app/main.routes';
import { map } from 'rxjs/operators';

/**
 * Sitewide layout
 */
@Component({
	selector: 'portfolio-site-frame',
	templateUrl: './site-frame.component.html',
	styleUrls: ['./site-frame.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteFrameComponent {
	layout$ = this.activatedRoute.data.pipe(map((data) => (data as RouterData).layout));
	layoutIsFull$ = this.layout$.pipe(map((layout) => layout === 'full'));
	layoutIsNarrow$ = this.layout$.pipe(map((layout) => layout === 'narrow'));

	constructor(private readonly activatedRoute: ActivatedRoute, private router: Router) {
		this.layout$.subscribe((a) => console.log('framelayout', a));

		// this.router..subscribe((a) => console.log('re', a));
	}
}
