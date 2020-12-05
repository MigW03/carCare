import AsyncStorage from '@react-native-community/async-storage';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Keyboard, Alert} from 'react-native';

import StepContainer from './steps/StepContainer';

export default function CarSettings({navigation}) {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [wheel, setWheel] = useState('');
  const [fuel, setFuel] = useState('');
  const [color, setColor] = useState('');
  const [stepsPage, setStepsPage] = useState(1);

  useEffect(() => {
    loadCarData();
  }, []);

  async function loadCarData() {
    let data = await AsyncStorage.getItem('carProfile');

    if (data) navigation.navigate('Main');
  }

  async function saveData() {
    Keyboard.dismiss();
    let carProfile = {
      brand: brand,
      model: model,
      year: year,
      wheel: wheel,
      fuel: fuel,
      color: color,
    };
    console.log(carProfile, typeof carProfile);

    await AsyncStorage.setItem('carProfile', JSON.stringify(carProfile))
      .then(() => {
        navigation.navigate('Main');
      })
      .catch((err) => {
        console.log(`Houve um problema: ${err}`);
        Alert.alert(
          'Opps!',
          'Houve um problema ao salvar seus dados, tente novamente mais tarde.',
        );
      });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.settingsTitle}>Coloque os dados do seu carro</Text>
      <View style={styles.stepView}>
        <StepContainer
          page={stepsPage}
          brand={{value: brand, func: setBrand}}
          model={{value: model, func: setModel}}
          year={{value: year, func: setYear}}
          wheel={{value: wheel, func: setWheel}}
          fuel={{value: fuel, func: setFuel}}
          color={{value: color, func: setColor}}
          firstTouch={() => setStepsPage(2)}
          secondTouch={() => saveData()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  settingsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 12,
  },
  stepView: {
    marginTop: 25,
    width: '100%',
    height: '40%',
    minHeight: '30%',
  },
});
