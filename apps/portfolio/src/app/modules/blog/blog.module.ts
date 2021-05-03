import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { BlogPageComponent } from './pages/blog-page.component';

@NgModule({
	declarations: [BlogPageComponent],
	imports: [
		SharedModule,
		RouterModule.forChild([
			{
				path: '',
				component: BlogPageComponent,
			},
		]),
	],
})
export class BlogModule {}
