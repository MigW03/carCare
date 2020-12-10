import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  ToastAndroid,
  StatusBar,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import ImagePicker from 'react-native-image-picker';

export default function CarProfile({navigation}) {
  const [imageUri, setImageUri] = useState('');
  const [carData, setCarData] = useState({});
  let imgOptions = {
    title: 'Escolha a imagem',
  };

  useEffect(() => {
    getCarData();
    loadImage();
  }, []);

  function getImage() {
    Alert.alert(
      'Alterar imagem',
      'Você deseja alterar a imagem do seu veículo?',
      [
        {text: 'Deletar imagem', onPress: clearImage},
        {text: 'Não'},
        {text: 'Sim', onPress: selectImage},
      ],
      {cancelable: true},
    );
  }

  async function clearImage() {
    await AsyncStorage.setItem('imageUri', '');
    ToastAndroid.show(
      'A imagem não aparecerá na próxima vez que abrir o aplicativo',
      ToastAndroid.LONG,
    );
  }

  function selectImage() {
    ImagePicker.launchImageLibrary(imgOptions, async (res) => {
      setImageUri(res.uri);
      await AsyncStorage.setItem('imageUri', res.uri);
    });
  }

  async function getCarData() {
    const carData = JSON.parse(await AsyncStorage.getItem('carProfile'));
    setCarData(carData);
  }

  async function loadImage() {
    let imagePath = await AsyncStorage.getItem('imageUri');

    if (imagePath) {
      setImageUri(imagePath);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.navigate('Main')}>
        <MaterialIcons name="arrow-back-ios" size={24} color="#353535" />
        <Text style={styles.goBackText}>Voltar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.imageButton} onPress={() => getImage()}>
        <Image
          style={styles.image}
          source={
            imageUri ? {uri: imageUri} : require('../assets/camera_dummy.png')
          }
        />
      </TouchableOpacity>
      <Text
        style={
          styles.carName
        }>{`${carData.brand} - ${carData.model} ${carData.year}`}</Text>

      <Text style={styles.dataTitle}>
        Cor: <Text style={styles.dataValue}>{carData.color}</Text>
      </Text>
      <Text style={styles.dataTitle}>
        Tamanho da roda: <Text style={styles.dataValue}>{carData.wheel}</Text>
      </Text>
      <Text style={styles.dataTitle}>
        Tipo de combustível:{' '}
        <Text style={styles.dataValue}>{carData.fuel}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 120,
    height: 120,
    marginTop: 15,
    borderRadius: 12,
    alignSelf: 'center',
  },
  carName: {
    fontSize: 18,
    marginTop: 4,
    alignSelf: 'center',
    marginBottom: 20,
  },
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '20%',
    marginTop: 8,
    marginLeft: 8,
    padding: 6,
  },
  goBackText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#353535',
  },
  dataTitle: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: 'bold',
    padding: 4,
    marginBottom: 10,
  },
  dataValue: {
    fontSize: 16,
    fontWeight: 'normal',
    paddingLeft: 12,
  },
});
