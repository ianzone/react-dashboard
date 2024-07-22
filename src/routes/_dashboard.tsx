import { createFileRoute, redirect } from '@tanstack/react-router';
import RingLoader from 'react-spinners/RingLoader';
import { DashboardLayout } from 'src/layouts';
import { isAuthenticated } from 'src/services';

export const Route = createFileRoute('/_dashboard')({
	beforeLoad: async ({ location }) => {
		// https://tanstack.com/router/latest/docs/framework/react/guide/authenticated-routes
		if (!(await isAuthenticated())) {
			throw redirect({
				to: '/signin',
				search: {
					redirect: location.href,
				},
			});
		}
	},
	component: DashboardLayout,
	pendingComponent: () => <RingLoader color='LimeGreen' />,
});
