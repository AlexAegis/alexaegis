import { NgModule } from '@angular/core';
import { SharedModule } from '@portfolio/app/shared';
import { LayoutFullComponent } from './layout-full.component';

@NgModule({
	declarations: [LayoutFullComponent],
	imports: [SharedModule],
	exports: [LayoutFullComponent],
})
export class LayoutFullComponentModule {}
