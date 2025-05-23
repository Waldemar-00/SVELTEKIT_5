import type { PageLoad } from '../$types'

export const load: PageLoad = async ({ url, parent }) => {
	const parentData = await parent()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { post, ...paths } = parentData
	const q = url.searchParams.get('q')
	const result = Object.keys(paths).filter((key) => {
		if (q) return key.includes(q)
	})

	return {
		result,
	}
}
