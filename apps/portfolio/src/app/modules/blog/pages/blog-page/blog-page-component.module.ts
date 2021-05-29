import { NgModule } from '@angular/core';
import { LayoutTricolumnComponentModule } from '@portfolio/app/components/layout-tricolumn';
import { SharedModule } from '@portfolio/app/shared';
import { BlogPageComponent } from './blog-page.component';

@NgModule({
	declarations: [BlogPageComponent],
	imports: [SharedModule, LayoutTricolumnComponentModule],
	exports: [BlogPageComponent],
})
export class BlogPageComponentModule {}
