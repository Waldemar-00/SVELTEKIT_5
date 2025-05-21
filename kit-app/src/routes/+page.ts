import type { PageLoad } from './$types'

export const load: PageLoad = async ({ untrack, url }) => {
	if (untrack(() => url.pathname === '/')) {
		console.log('UNTRACK!!!!!')
		return { gritting: 'HI' }
	} else return { gritting: 'WELCOME!!!' }
}
