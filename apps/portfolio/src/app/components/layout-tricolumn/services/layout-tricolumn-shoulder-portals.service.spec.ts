import { TestBed } from '@angular/core/testing';
import { LayoutTricolumnShoulderPortalsService } from './layout-tricolumn-shoulder-portals.service';

describe('LayoutTricolumnShoulderPortalsService', () => {
	let service: LayoutTricolumnShoulderPortalsService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(LayoutTricolumnShoulderPortalsService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
