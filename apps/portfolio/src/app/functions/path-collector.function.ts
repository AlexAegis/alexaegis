import { Routes } from '@angular/router';
import { MenuConfiguration, MenuItem } from '../model/menu-configuration.interface';
import { RouterData } from '../model/router-data.interface';

export const pathCollector = (routes: Routes, pathPrefix: string = ''): MenuConfiguration =>
	routes.reduce((acc, route) => {
		const currentPath = pathPrefix ? `${pathPrefix}/${route.path}` : route.path ?? '';
		const data = route.data as RouterData;
		if (route.path && !data?.skipMenu && route.path !== '**') {
			acc.push({
				name: data?.name || route.path,
				data,
				path: currentPath,
				children: route.children
					? pathCollector(route.children, currentPath)
					: data?.lazyRoutes
					? pathCollector(data.lazyRoutes, currentPath)
					: undefined,
			});
		} else if (route.children) {
			acc.push(...pathCollector(route.children, currentPath));
		}
		return acc;
	}, [] as MenuItem[]);
