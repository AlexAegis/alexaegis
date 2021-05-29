import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LayoutTricolumnShoulderPortalsService } from './services/layout-tricolumn-shoulder-portals.service';

@Component({
	selector: 'portfolio-layout-tricolumn',
	templateUrl: './layout-tricolumn.component.html',
	styleUrls: ['./layout-tricolumn.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutTricolumnComponent {
	constructor(
		public readonly layoutTricolumnShoulderPortalsService: LayoutTricolumnShoulderPortalsService
	) {}
}
