import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SiteFrameComponentModule } from './components/site-frame';
import { SiteHeaderComponentModule } from './components/site-header';
import { SiteMenuComponentModule } from './components/site-menu';
import { CoreModule } from './core/core.module';
import { NotFoundComponentModule } from './pages/not-found';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [AppComponent],
	imports: [
		CoreModule,
		SharedModule,
		NotFoundComponentModule,
		SiteFrameComponentModule,
		SiteHeaderComponentModule,
		SiteMenuComponentModule,
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
