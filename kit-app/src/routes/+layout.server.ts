import type { LayoutServerLoad } from './$types'

// async function getPost() { // on client in browser
// 	const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
// 	return await response.json();
// }
// export const load: LayoutServerLoad = async ({ cookies }) => {
// 	cookies.set('name', 'USER', {
// 		path: '/',
// 		httpOnly: true,
// 		maxAge: 3600,
// 		// expires: new Date('30-05-2025'), wrong data
// 		sameSite: 'lax'
// 		// secure: true for PRODUCTION
// 	});
// 	return {
// 		home: { title: 'Welcome to SvelteKit' },
// 		about: { title: 'About Svelte' },
// 		settings: { title: 'Sveltekit settings' },
// 		articles: { title: 'Page with articles' },
// 		calculate: { title: 'Calculate' },
// 		servers: { title: "Page's server and universal server" },
// 		cookies: { title: 'Cookies on the Server!' },
// 		post: await getPost() // on client from browser
// 	};
// };

export const load: LayoutServerLoad = async ({ fetch, setHeaders }) => {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
	const age = response.headers.get('age')
	const cacheControl = response.headers.get('cache-control')
	if (age && cacheControl) {
		setHeaders({
			age,
			'cache-control': cacheControl,
		})
	}
	const post = await response.json()
	// console.log(locals, 'USER_COOKIES IN LAYOUT')

	return {
		home: { title: 'Welcome to SvelteKit' },
		form: { title: 'Form for YOU' },
		search: { title: 'Search' },
		about: { title: 'About Svelte' },
		settings: { title: 'Sveltekit settings' },
		articles: { title: 'Page with articles' },
		calculate: { title: 'Calculate' },
		servers: { title: "Page's server and universal server" },
		cookies: { title: 'Cookies on the Server!' },
		parent: { title: 'Parent page!' },
		redirect: { title: 'This page you will not see!' },
		invalidate: { title: 'Invalidate, invalidateAll, depends and act.' },
		post,
	}
}
