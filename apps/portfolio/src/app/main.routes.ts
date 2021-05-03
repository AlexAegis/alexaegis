import { Routes } from '@angular/router';

export const mainRoutes: Routes = [
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

export const mainRoutesMetadata: Routes = mainRoutes.map(({ path, data }) => ({ path, data }));
