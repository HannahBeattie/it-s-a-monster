import { StyleSheet } from 'react-native'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import Auth from './components/navigation/Auth'
import store from './redux/store'

export default function App() {
	return (
		<Provider store={store}>
			{/* <PersistGate loading={null} /> */}
			<PaperProvider>
				<Auth />
			</PaperProvider>
		</Provider>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
})
