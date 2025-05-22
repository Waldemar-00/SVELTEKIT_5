import type { Actions } from './$types'

// export const actions = {
// 	default: async (event) => {
// 		const formData = await event.request.formData()
// 		const name = formData.get('name')
// 		const email = formData.get('email')
// 		const age = formData.get('age')
// 		console.log(name, age, email)
// 	},
// } satisfies Actions

export const actions = {
	register: async (event) => {
		const formData = await event.request.formData()
		const name = formData.get('name')
		const email = formData.get('email')
		const age = formData.get('age')
		console.log('REGISTER', name, age, email)
	},
	login: async (event) => {
		const formData = await event.request.formData()
		const name = formData.get('name')
		const email = formData.get('email')
		const age = formData.get('age')
		console.log('LOGIN:', name, age, email)
	},
} satisfies Actions
