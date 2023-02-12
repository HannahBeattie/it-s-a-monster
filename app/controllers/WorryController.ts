import { store } from '../../reduxold/store'

//locally run strapi server
const url = 'http://localhost:1337/worries'

export const save = async (worry) => {
	const requestBody = JSON.stringify({
		title: worry.title,
		description: worry.description,
		finished: worry.finished,
		user: worry.user.id,
	})

	const requestConfig = {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${store.getState().jwt}`,
			'Content-Type': 'application/json',
		},
		body: requestBody,
	}
	const response = await fetch(url, requestConfig)

	const json = await response.json()

	if (json.error) {
		return null
	}

	return json._id
}

export const edit = async (worry) => {
	const requestBody = JSON.stringify({
		title: worry.title,
		description: worry.description,
		due: worry.due,
		finished: worry.finished ? 1 : 0,
		user: worry.user.id,
	})

	const requestConfig = {
		method: 'PUT',
		headers: { Authorization: `Bearer ${store.getState().jwt}` },
		body: requestBody,
	}

	const response = await fetch(`${url}/${worry.id}`, requestConfig)
	const json = await response.json()

	if (json.error) {
		return false
	}

	return true
}

export const dismiss = async (worry) => {
	const response = await fetch(`${url}/${worry.id}`, {
		headers: { Authorization: `Bearer ${store.getState().jwt}` },
	})

	const json = response.json()

	if (json.error) {
		return false
	}

	return true
}
