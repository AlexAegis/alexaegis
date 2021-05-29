import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AcrylicSquareComponent } from './acrylic-square.component';

describe('AcrylicSquareComponent', () => {
	let component: AcrylicSquareComponent;
	let fixture: ComponentFixture<AcrylicSquareComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [AcrylicSquareComponent],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(AcrylicSquareComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
