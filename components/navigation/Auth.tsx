import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import store, { userSlice } from '../../redux/store'
import Login from '../../screens/Login'
import Overview from '../../screens/Overview'

export default function Auth() {
	const [route, setRoute] = React.useState(store.getState().user.jwt ? 'Overview' : 'Login')
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
			setRoute(store.getState().user.jwt ? 'Overview' : 'Login')
		})
	}, [])
	return <Navigator />
}
