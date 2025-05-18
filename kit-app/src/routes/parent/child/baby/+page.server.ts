import type { PageServerLoad } from './$types'

export const load: PageServerLoad = async ({ parent }) => {
	const { p, c } = await parent()
	return { b: p + c }
}
