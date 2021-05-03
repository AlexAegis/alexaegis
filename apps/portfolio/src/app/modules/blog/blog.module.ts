import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared';
import { BlogPageComponent, BlogPageComponentModule } from './pages/blog-page';

@NgModule({
	declarations: [],
	imports: [
		SharedModule,
		BlogPageComponentModule,
		RouterModule.forChild([
			{
				path: '',
				component: BlogPageComponent,
			},
		]),
	],
})
export class BlogModule {}
