import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BlogPageComponentModule } from './blog-page-component.module';
import { BlogPageComponent } from './blog-page.component';

describe('BlogPageComponent', () => {
	let component: BlogPageComponent;
	let fixture: ComponentFixture<BlogPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BlogPageComponentModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(BlogPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
