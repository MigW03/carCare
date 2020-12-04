import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';

import StepContainer from './steps/StepContainer';

export default function CarSettings() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [wheel, setWheel] = useState('');
  const [fuel, setFuel] = useState('');
  const [color, setColor] = useState('');
  const [stepsPage, setStepsPage] = useState(1);

  function saveData() {
    // setAnimationName('fadeOut');
    console.log(brand);
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
          secondTouch={() => alert('salvou os dados')}
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
