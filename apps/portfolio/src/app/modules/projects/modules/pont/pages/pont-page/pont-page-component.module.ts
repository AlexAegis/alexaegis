import { NgModule } from '@angular/core';
import { SharedModule } from '@portfolio/app/shared';
import { PontPageComponent } from './pont-page.component';

@NgModule({
	declarations: [PontPageComponent],
	imports: [SharedModule],
	exports: [PontPageComponent],
})
export class PontPageComponentModule {}
