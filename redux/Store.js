import { AsyncStorage } from 'async-storage'
import persistReducer from 'redux-persist/es/persistReducer'
import rootReducer from '../redux/reducers/UserReducer'

const persistConfig = {
	key: 'root',
	Storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const createdStore = createdStore(persistReducer)
const createdPersistor = persistStore(createdStore)

export const store = createdStore
export const persistor = createdPersistor
