import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SiteFrameComponentModule } from './components/site-frame';
import { SiteHeaderComponentModule } from './components/site-header';
import { SiteMenuComponentModule } from './components/site-menu';
import { CoreModule } from './core/core.module';
import { CrystalDirective } from './directives/crystal.directive';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { MiscellaneousModule } from './modules/miscellaneous/miscellaneous.module';
import { NotFoundComponentModule } from './pages/not-found';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent, CrystalDirective],
	imports: [
		CoreModule,
		SharedModule,
		MiscellaneousModule,
		NotFoundComponentModule,
		SiteFrameComponentModule,
		SiteHeaderComponentModule,
		SiteMenuComponentModule,
		DashboardModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
