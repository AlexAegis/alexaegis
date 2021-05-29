import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutTricolumnComponent } from './layout-tricolumn.component';

describe('LayoutTricolumnComponent', () => {
	let component: LayoutTricolumnComponent;
	let fixture: ComponentFixture<LayoutTricolumnComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [LayoutTricolumnComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutTricolumnComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
