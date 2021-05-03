import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PontPageComponent } from './pont-page.component';

describe('PontPageComponent', () => {
	let component: PontPageComponent;
	let fixture: ComponentFixture<PontPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [PontPageComponent],
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
