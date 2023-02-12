import type { PayloadAction } from '@reduxjs/toolkit'
import { combineReducers, createSlice, configureStore } from '@reduxjs/toolkit'

export interface UserState {
	jwt: any
	user: any
}

const initialState: UserState = {
	jwt: null,
	user: null,
} as UserState

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		saveUser(state, action: PayloadAction<UserState>) {
			const { user, jwt } = action.payload
			state.user = user
			state.jwt = jwt
		},
		deleteUser(state) {
			// // Uncomment once we want to actually delete the user
			// state.jwt = null
			// state.user = null
		},
	},
})

const rootReducer = combineReducers({
	user: userSlice.reducer,
})
export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
	reducer: rootReducer,
})

export default store
