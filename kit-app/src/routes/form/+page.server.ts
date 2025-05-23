import { fail } from '@sveltejs/kit'
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
		if (Number(age) < 18)
			return fail(422, { age, message: 'Age must be 18 or more!', success: false })

		return { name, email, age, success: true, event: 'REGISTER' }
	},
	login: async ({ request }) => {
		const formData = await request.formData()
		const name = formData.get('name')
		const email = formData.get('email')
		const age = formData.get('age')
		return { name, email, age, success: true, event: 'LOGIN' }
	},
} satisfies Actions
