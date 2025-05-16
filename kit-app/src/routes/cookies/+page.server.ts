import type { PageServerLoad } from '../servers/$types';

export const load: PageServerLoad = async ({ cookies }) => {
	const sessionid = cookies.get('name');
	console.log(sessionid);
	return {
		sessionid
	};
};
