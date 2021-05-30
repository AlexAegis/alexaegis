import { Routes } from '@angular/router';

export const projectPages: Routes = [
	{
		path: 'pont',
		data: {
			name: 'Pont',
		},
		loadChildren: () =>
			import('./modules/pont/pont.module').then((module) => module.PontModule),
	},
];
