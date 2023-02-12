import { login, logout } from '../controllers/UserController'

type UserData = {
	identifier: any
	password: string
}

class UserModel {
	data: UserData
	constructor(initialData: UserData) {
		this.data = initialData
	}
	async login() {
		const result = await login(this)
		if (!result) {
			throw new Error("Sorry, I couldn't log you in.")
		}
		return true
	}
	async logout() {
		const result = await logout(this)
		if (!result) {
			throw new Error('Unable to logout user')
		}
		return true
	}
}
export default UserModel
