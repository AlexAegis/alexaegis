import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutTricolumnComponentModule } from './layout-tricolumn-component.module';
import { LayoutTricolumnComponent } from './layout-tricolumn.component';

describe('LayoutTricolumnComponent', () => {
	let component: LayoutTricolumnComponent;
	let fixture: ComponentFixture<LayoutTricolumnComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LayoutTricolumnComponentModule, RouterTestingModule],
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
