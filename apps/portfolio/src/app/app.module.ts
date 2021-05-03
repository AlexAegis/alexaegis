import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SiteFrameComponent } from './components/site-frame.component';
import { SiteHeaderComponent } from './components/site-header.component';
import { SiteMenuComponent } from './components/site-menu.component';
import { CoreModule } from './core/core.module';
import { NotFoundComponent } from './pages/not-found.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
	declarations: [
		AppComponent,
		SiteFrameComponent,
		SiteHeaderComponent,
		SiteMenuComponent,
		NotFoundComponent,
	],
	imports: [CoreModule, SharedModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
