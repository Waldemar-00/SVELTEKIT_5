import type { PageServerLoad } from '../servers/$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = fetch();
};
