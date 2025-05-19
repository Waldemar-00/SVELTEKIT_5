import type { Handle, HandleFetch, HandleServerError } from '@sveltejs/kit'

export const handle: Handle = async ({ event, resolve }) => {
	if (event.url.pathname.startsWith('/.well-known/appspecific/com.chrome.devtools')) {
		return new Response(null, { status: 204 })
	}
	event.cookies.set('name', 'USER', {
		path: '/',
		httpOnly: true,
		maxAge: 3600,
		expires: new Date(Date.now() + 3600 * 1000),
		sameSite: 'lax',
		// secure: true for PRODUCTION
	})
	const userCookie = event.cookies.get('name')
	console.log(userCookie, 'USER_COOKIES IN HOOKS')
	if (userCookie) event.locals = userCookie
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

export const handleServerError: HandleServerError = async ({ message }) => {
	return {
		message,
	}
}
