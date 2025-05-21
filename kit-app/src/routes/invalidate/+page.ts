import type { PageLoad } from '../$types'
let postNumber = 1
export const load: PageLoad = async ({ depends }) => {
	postNumber++
	const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postNumber}`)
	const postXX = await response.json()

	depends('get:newpost')
	return {
		postXX,
	}
}
