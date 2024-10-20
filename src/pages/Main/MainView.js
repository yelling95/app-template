/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import {Text, useColorScheme, View} from 'react-native'

import {WebView} from 'react-native-webview'

import styles from './MainView.style'

function MainView() {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View style={styles.container}>
      <WebView source={{uri: 'https://naver.com'}} style={styles.webViewContainer} />
    </View>
  )
}

export default MainView
