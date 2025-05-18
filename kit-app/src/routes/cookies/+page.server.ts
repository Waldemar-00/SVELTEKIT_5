import type { PageServerLoad } from '../servers/$types'
import { error } from '@sveltejs/kit'
export const load: PageServerLoad = async ({ cookies, locals }) => {
	const sessionid = cookies.get('name')
	if (!sessionid || !locals) {
		error(401, 'NOT logged in')
	}
	return {
		sessionid,
		locals,
	}
}
