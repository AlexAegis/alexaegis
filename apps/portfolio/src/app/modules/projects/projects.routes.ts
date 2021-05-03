import { Routes } from '@angular/router';

export const projectPages: Routes = [
	{
		path: 'pont',
		loadChildren: () =>
			import('./modules/pont/pont.module').then((module) => module.PontModule),
	},
];
