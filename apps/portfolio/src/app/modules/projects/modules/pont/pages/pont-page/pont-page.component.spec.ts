import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PontPageComponentModule } from './pont-page-component.module';
import { PontPageComponent } from './pont-page.component';

describe('PontPageComponent', () => {
	let component: PontPageComponent;
	let fixture: ComponentFixture<PontPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [PontPageComponentModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(PontPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
