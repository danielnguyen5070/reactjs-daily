export type NavItem = {
	label: string;
	path: string;
	requiresAuth?: boolean;
	children?: NavItem[];
};

export const navigation: NavItem[] = [
	{
		label: "Dashboard",
		path: "/dashboard",
		requiresAuth: true,
	},
	{
		label: "Users",
		path: "/users",
		requiresAuth: true,
	},
	{
		label: "Lifecycle",
		path: "/Lifecycle",
		requiresAuth: true,
	},
	{
		label: "Fetching",
		path: "/fetching",
		requiresAuth: true,
	},
	{
		label: "Fetching",
		path: "/fetching",
		requiresAuth: true,
	},
	{
		label: "Posts",
		path: "/posts",
		requiresAuth: false,
	},
];
