import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'portfolio-layout-tricolumn',
	templateUrl: './layout-tricolumn.component.html',
	styleUrls: ['./layout-tricolumn.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LayoutTricolumnComponent implements OnInit {
	ngOnInit(): void {
		console.log('LayoutTricolumnComponent');
	}
}
