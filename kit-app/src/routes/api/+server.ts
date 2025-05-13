import type { RequestHandler } from '@sveltejs/kit';
import { json, text } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request }) => {
	const { a, b } = await request.json();
	return json(a * b);
};
// works with methods: PUT, PATCH, DELETE and ect.
export const fallback: RequestHandler = async ({ request }) => {
	return text(`Used method: ${request.method}. Worked fallback!`);
};
