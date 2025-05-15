import type { RequestHandler } from '@sveltejs/kit';
import { json, text } from '@sveltejs/kit';
const dbUser = {
	id: 777,
	name: 'John',
	age: 78
};
export const GET: RequestHandler = () => {
	return json(dbUser);
};
export const POST: RequestHandler = async ({ request }) => {
	const { a, b } = await request.json();
	return json(a * b);
};
// works with methods: PUT, PATCH, DELETE and ect.
export const fallback: RequestHandler = async ({ request }) => {
	return text(`Used method: ${request.method}. Worked fallback!`);
};
