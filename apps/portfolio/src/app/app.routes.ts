import { Routes } from '@angular/router';
import { LayoutFullComponent } from './components/layout-full/layout-full.component';
import { LayoutTricolumnComponent } from './components/layout-tricolumn/layout-tricolumn.component';
import { SiteFrameComponent } from './components/site-frame/site-frame.component';
import { pathCollector } from './functions/path-collector.function';
import { RouterData } from './model/router-data.interface';
import { projectPages } from './modules/projects/projects.routes';
import { NotFoundComponent } from './pages/not-found';

export const routes: Routes = [
	{
		path: '',
		// runGuardsAndResolvers: 'always',
		component: SiteFrameComponent,
		children: [
			{
				path: '404',
				data: {
					name: '404',
					skipMenu: true,
				} as RouterData,
				component: NotFoundComponent,
			},
			{
				path: '',
				component: LayoutTricolumnComponent,
				children: [
					{
						path: 'projects',
						data: {
							name: 'Projects',
							layout: 'narrow',
							lazyRoutes: projectPages,
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
							import('./modules/blog/blog.module').then(
								(module) => module.BlogModule
							),
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
		],
	},
	{ path: '**', redirectTo: '/404' },
];

export const menuConfig = pathCollector(routes);
