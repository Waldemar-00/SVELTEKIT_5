import type { PageServerLoad } from './$types';
const user = {
	id: 777,
	name: 'John',
	age: 78
};
export const load: PageServerLoad = async ({ url, route, params }) => {
	console.log(url, 'url');
	console.log(route.id);
	console.log(params, 'params');
	return {
		user
	};
};
