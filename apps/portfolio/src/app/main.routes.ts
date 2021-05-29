import { Routes } from '@angular/router';
import { LayoutFullComponent } from './components/layout-full/layout-full.component';
import { LayoutTricolumnComponent } from './components/layout-tricolumn/layout-tricolumn.component';

export interface RouterData {
	name?: string;
	layout?: 'full' | 'narrow';
}

export const mainRoutes: Routes = [
	{
		path: '',
		component: LayoutTricolumnComponent,
		children: [
			{
				path: 'projects',
				data: {
					name: 'Projects',
					layout: 'narrow',
				} as RouterData,
				loadChildren: () =>
					import('./modules/projects/projects.module').then(
						(module) => module.ProjectsModule
					),
			},
			{
				path: 'blog',
				data: {
					name: 'Blog',
					layout: 'narrow',
				} as RouterData,
				loadChildren: () =>
					import('./modules/blog/blog.module').then((module) => module.BlogModule),
			},
		],
	},
	{
		path: 'app',
		component: LayoutFullComponent,
		data: {
			name: 'App',
			layout: 'full',
		},
		children: [
			{
				path: '',
				redirectTo: 'dashboard',
				pathMatch: 'full',
			},
			{
				path: 'dashboard',
				data: {
					name: 'Dashboard',
				} as RouterData,
				loadChildren: () =>
					import('./modules/dashboard/dashboard.module').then(
						(module) => module.DashboardModule
					),
			},
		],
	},
];

export type MenuConfiguration = MenuItem[];
export interface MenuItem {
	name: string;
	data?: unknown;
	path: string;
	children?: MenuItem[];
}

// TODO: Investigate lazy route items
export const pathCollector = (routes: Routes, pathPrefix: string = ''): MenuConfiguration =>
	routes.reduce((acc, route) => {
		const currentPath = pathPrefix ? `${pathPrefix}/${route.path}` : route.path ?? '';
		if (route.path) {
			acc.push({
				name: route.data?.name,
				data: route.data,
				path: currentPath,
				children: route.children ? pathCollector(route.children, currentPath) : undefined,
			});
		} else if (route.children) {
			// pathless collections will be flattened
			acc.push(...pathCollector(route.children, currentPath));
		}
		return acc;
	}, [] as MenuItem[]);

export const menuConfiguration = pathCollector(mainRoutes);
console.log(menuConfiguration);
