export type MenuConfiguration = MenuItem[];

export interface MenuItem {
	name: string;
	data?: unknown;
	path: string;
	children?: MenuItem[];
}
