import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProjectsPageComponentModule } from './projects-page-component.module';
import { ProjectsPageComponent } from './projects-page.component';

describe('ProjectsPageComponent', () => {
	let component: ProjectsPageComponent;
	let fixture: ComponentFixture<ProjectsPageComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ProjectsPageComponentModule, RouterTestingModule],
		}).compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(ProjectsPageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
