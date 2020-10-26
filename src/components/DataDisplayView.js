import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native'

export default function DataDisplayView(props) {

  function toastMessage() {
    return (
      ToastAndroid.show(
        'Teste',
        ToastAndroid.SHORT
      )
    )
  }

  return (
    //Tentar trocar por um TouchableWithoutFeedback
    <View style={styles.container} onPress={() => toastMessage()}> 
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.date}>{props.date}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 18,
    padding: 12,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 14
  },
  title: {
    fontSize: 16
  },
  date: {
    fontSize: 16

  }
})
