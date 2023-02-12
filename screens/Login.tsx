import React from 'react'
import { Text } from 'react-native-paper'
import { View, StyleSheet } from 'react-native'

export default function LoginScreen(props) {
	return (
		<View style={styles.base}>
			<Text style={styles.text}>Login Screen</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	base: {
		flex: 1,
		alignContent: 'center',
		justifyContent: 'center',
	},
	text: {
		textAlign: 'center',
	},
})
