import { NgModule } from '@angular/core';
import { SharedModule } from '@portfolio/app/shared';
import { NotFoundComponent } from './not-found.component';

@NgModule({
	declarations: [NotFoundComponent],
	imports: [SharedModule],
	exports: [NotFoundComponent],
})
export class NotFoundComponentModule {}
