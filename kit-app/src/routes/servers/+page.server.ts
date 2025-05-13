import type { PageServerLoad } from './$types';
const user = {
	id: 777,
	name: 'John',
	age: 78
};
export const load: PageServerLoad = async () => {
	return {
		user
	};
};
