import { Routes } from '@angular/router';

export interface RouterData {
	name?: string;
	layout?: 'full' | 'narrow';
	lazyRoutes?: Routes;
	skipMenu?: boolean;
}
