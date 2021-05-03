import { Routes } from '@angular/router';
import { SiteFrameComponent } from './components/site-frame.component';
import { NotFoundComponent } from './pages/not-found.component';

export const mainPages: Routes = [
	{
		path: 'projects',
		data: {
			name: 'Projects',
		},
		loadChildren: () =>
			import('./modules/projects/projects.module').then((module) => module.ProjectsModule),
	},
	{
		path: 'blog',
		data: {
			name: 'Blog',
		},
		loadChildren: () =>
			import('./modules/blog/blog.module').then((module) => module.BlogModule),
	},
];

const otherPages: Routes = [
	{
		path: '404',
		component: NotFoundComponent,
	},
];

export const routes: Routes = [
	{
		path: '',
		component: SiteFrameComponent,
		children: mainPages.concat(otherPages),
	},
	{ path: '**', redirectTo: '/404' },
];
