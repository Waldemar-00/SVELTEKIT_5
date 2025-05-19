import type { HandleClientError } from '@sveltejs/kit'

export const handleClientError: HandleClientError = async () => {
	//error, event, status, message
	return {
		message: 'WHoops!!!!!!!',
	}
}
