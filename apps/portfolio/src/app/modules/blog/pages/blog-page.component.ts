import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	templateUrl: './blog-page.component.html',
	styleUrls: ['./blog-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent {}
