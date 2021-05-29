import { PortalModule } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { SharedModule } from '@portfolio/app/shared';
import { OnShoulderDirective } from './directives/on-shoulder.directive';
import { LayoutTricolumnComponent } from './layout-tricolumn.component';

@NgModule({
	declarations: [LayoutTricolumnComponent, OnShoulderDirective],
	imports: [SharedModule, PortalModule],
	exports: [LayoutTricolumnComponent, OnShoulderDirective],
})
export class LayoutTricolumnComponentModule {}
