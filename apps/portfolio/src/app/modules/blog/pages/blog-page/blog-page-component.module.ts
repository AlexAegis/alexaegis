import { NgModule } from '@angular/core';
import { SharedModule } from '@portfolio/app/shared';
import { BlogPageComponent } from './blog-page.component';

@NgModule({
	declarations: [BlogPageComponent],
	imports: [SharedModule],
	exports: [BlogPageComponent],
})
export class BlogPageComponentModule {}
