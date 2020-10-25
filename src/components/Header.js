import React, { useState, useEffect } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  StatusBar,
} from 'react-native'

import ImagePicker from 'react-native-image-picker'
import AsyncStorage from '@react-native-community/async-storage'

export default function Header() {
  const [imageUri, setImageUri] = useState('')
  let imgOptions = {
    title: 'Escolha a imagem',
    
  }

  useEffect(() => {
    loadImage()
  }, [])

  function getImage() {
    ImagePicker.launchImageLibrary(imgOptions, async res => {
      setImageUri(res.uri)
      await AsyncStorage.setItem('imageUri', res.uri)
    })
  }

  async function loadImage() {
    let imagePath = await AsyncStorage.getItem('imageUri')

    if (imagePath) {
      setImageUri(imagePath)
    } else {
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageButton} onPress={() => getImage()}>
        <Image style={styles.carImage} source={{uri: imageUri}}/>
      </TouchableOpacity>
      <View style={styles.carDataView}>
        <Text style={styles.carDataText}>Idea 2014/2015</Text>
        <Text style={styles.carDataText}>Branca</Text>
      </View>
      <TouchableOpacity style={styles.touch}>
        <Text style={styles.touchText}>Mais dados</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '15%',
    backgroundColor: '#fdfdfd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageButton: {},
  carImage: {
    height: '85%',
    aspectRatio: 1,
    backgroundColor: '#898989'
  },
  carDataView: {
    height: '100%',
    justifyContent: 'space-evenly',
  },
  touch: {
    borderColor: '#333333',
    borderWidth: 1,
    borderRadius: 24,
    padding: 8,
    paddingHorizontal: 14
  },
  touchText: {
    fontSize: 15,
  },
  carDataText: {
    fontSize: 16
  }
})
