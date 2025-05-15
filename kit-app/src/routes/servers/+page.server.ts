import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
	const response = await fetch('/api'); // WITHOUT HTTP!!!!!!!!!!!!!!!!!!
	return {
		user: await response.json()
	};
};
