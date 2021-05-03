import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SiteFrameComponentModule } from './site-frame-component.module';
import { SiteFrameComponent } from './site-frame.component';

describe('SiteFrameComponent', () => {
	let component: SiteFrameComponent;
	let fixture: ComponentFixture<SiteFrameComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [SiteFrameComponentModule, RouterTestingModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(SiteFrameComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
