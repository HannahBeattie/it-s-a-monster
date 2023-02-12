import { edit, save, dismiss } from '../controllers/WorryController'

type WorryData = {
	user: any
	title: string
	description: string
	finished?: Boolean
	id: Number
}

class WorryModel {
	data: WorryData

	constructor(initialData: WorryData) {
		this.data = initialData
	}
	async save() {
		const id = await save(this)
		if (!id) {
			throw new Error("Oh dear!! I can't save this worry")
		}
		this.data.id = id
		return true
	}
	async edit() {
		if (!this.data.id) {
			throw new Error("Oh dear!! I can't edit this worry")
		}
		const edited = await edit(this)
		if (!edited) {
			throw new Error('This worry was not edited')
		}
		return true
	}
	async dismiss() {
		if (!this.data.id) {
			throw new Error('Cannot delete worry before it is saved')
		}
		const dismissed = await dismiss(this)
		if (!dismissed) {
			throw new Error('Worry could not be saved')
		}
		return true
	}
}

export default WorryModel
