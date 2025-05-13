import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	const user = { ...data.user, text: 'Some text has been added!' };
	return {
		user
	};
};
