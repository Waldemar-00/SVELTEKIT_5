import type { PageServerLoad } from '../servers/$types'

export const load: PageServerLoad = async ({ cookies }) => {
	const sessionid = cookies.get('name')
	return {
		sessionid,
	}
}
