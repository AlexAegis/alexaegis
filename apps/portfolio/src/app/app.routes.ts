import { Routes } from '@angular/router';
import { SiteFrameComponent } from './components/site-frame';
import { mainRoutes } from './main.routes';
import { NotFoundComponent } from './pages/not-found';

const otherPages: Routes = [
	{
		path: '404',
		component: NotFoundComponent,
	},
];

export const routes: Routes = [
	{
		path: '',
		// runGuardsAndResolvers: 'always',
		component: SiteFrameComponent,
		children: mainRoutes.concat(otherPages),
	},
	{ path: '**', redirectTo: '/404' },
];
