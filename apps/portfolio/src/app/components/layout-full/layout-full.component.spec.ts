import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LayoutFullComponentModule } from './layout-full-component.module';
import { LayoutFullComponent } from './layout-full.component';

describe('LayoutFullComponent', () => {
	let component: LayoutFullComponent;
	let fixture: ComponentFixture<LayoutFullComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [LayoutFullComponentModule, RouterTestingModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(LayoutFullComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
