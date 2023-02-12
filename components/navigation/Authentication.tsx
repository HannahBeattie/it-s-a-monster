import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../../screens/Login'
import Overview from '../../screens/Overview'
import { store } from '../../redux/Store'
import React from 'react'

export default function Authentication() {
	const [route, setRoute] = React.useState(store.getState().jwt ? 'Overview' : 'Login')
	const Navigator = createAppContainer(
		createSwitchNavigator(
			{
				Login: {
					screen: Login,
				},
				Overview: {
					screen: Overview,
				},
			},
			{ initialRouteName: route }
		)
	)
	React.useEffect(() => {
		store.subscribe(() => {
			setRoute(store.getState().jwt ? 'Overview' : 'Login')
		})
	}, [])
	return <Navigator />
}
