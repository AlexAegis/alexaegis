import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'portfolio-layout-full',
	templateUrl: './layout-full.component.html',
	styleUrls: ['./layout-full.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutFullComponent implements OnInit {
	ngOnInit(): void {
		console.log('LayoutFullComponent');
	}
}
