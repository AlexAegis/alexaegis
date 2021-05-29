import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	templateUrl: './blog-page.component.html',
	styleUrls: ['./blog-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogPageComponent {
	public top = 0;

	moveDown() {
		this.top = this.top + 10;
	}
}
