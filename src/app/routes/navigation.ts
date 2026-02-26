export type NavItem = {
  label: string;
  path: string;
  requiresAuth?: boolean;
  children?: NavItem[];
};

export const navigation: NavItem[] = [
  {
    label: 'Dashboard',
    path: '/dashboard',
    requiresAuth: true,
  },
  {
    label: 'Users',
    path: '/users',
    requiresAuth: true,
  },
];