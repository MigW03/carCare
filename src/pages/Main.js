import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar
} from 'react-native'

import Header from '../components/Header'

export default function Main( {navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' barStyle='dark-content' />
      <Header/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})
