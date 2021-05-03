import { NgModule, Optional, SkipSelf } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from '../app.routes';

@NgModule({
	imports: [BrowserModule, RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: [],
	declarations: [],
})
export class CoreModule {
	public constructor(@SkipSelf() @Optional() private readonly coreModule: CoreModule) {
		if (coreModule) {
			throw new Error('CoreModule imported more than once!');
		}
	}
}
