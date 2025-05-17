import type { Handle, HandleFetch } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/.well-known/appspecific/com.chrome.devtools')) {
		return new Response(null, { status: 204 })
	}
	return await resolve(event)
}

export const handleFetch: HandleFetch = async ({ request, fetch }) => {
	if (request.url.startsWith('https://jsonplaceholder.typicode.com/posts/1')) {
		request = new Request(
			request.url.replace(
				'https://jsonplaceholder.typicode.com/posts/1',
				'https://jsonplaceholder.typicode.com/posts',
			),
			request,
		)
	}
	return fetch(request)
}
