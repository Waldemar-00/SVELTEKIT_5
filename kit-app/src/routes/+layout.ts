import type { LayoutLoad } from './$types';

export const load: LayoutLoad = () => {
	return {
		home: { title: 'Welcome to SvelteKit' },
		about: { title: 'About Svelte' },
		settings: { title: 'Sveltekit settings' },
		articles: { title: 'Page with articles' }
	};
};
