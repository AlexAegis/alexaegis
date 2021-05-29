import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DashboardPageComponentModule } from './dashboard-page-component.module';
import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {
	let component: DashboardPageComponent;
	let fixture: ComponentFixture<DashboardPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [DashboardPageComponentModule, RouterTestingModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(DashboardPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
