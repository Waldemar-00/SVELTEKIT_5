import type { PageLoad } from './$types'
import { redirect } from '@sveltejs/kit'
export const load: PageLoad = async ({ route }) => {
	if (route.id === '/redirect') {
		redirect(307, '/')
	}
}
