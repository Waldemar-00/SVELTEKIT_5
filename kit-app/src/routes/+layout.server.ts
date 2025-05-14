import type { LayoutServerLoad } from './$types';

// export const load: LayoutServerLoad = async ({ fetch }) => {
// 	const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// 	const post = await response.json();
// 	return {
// 		post,
// 		home: { title: 'Welcome to SvelteKit' },
// 		about: { title: 'About Svelte' },
// 		settings: { title: 'Sveltekit settings' },
// 		articles: { title: 'Page with articles' },
// 		calculate: { title: 'Calculate' },
// 		servers: { title: "Page's server and universal server" }
// 	};
// };

async function getPost() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
	return await response.json();
}
export const load: LayoutServerLoad = async () => {
	return {
		home: { title: 'Welcome to SvelteKit' },
		about: { title: 'About Svelte' },
		settings: { title: 'Sveltekit settings' },
		articles: { title: 'Page with articles' },
		calculate: { title: 'Calculate' },
		servers: { title: "Page's server and universal server" },
		post: await getPost()
	};
};
