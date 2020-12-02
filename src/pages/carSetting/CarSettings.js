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
import * as Animatable from 'react-native-animatable';

export default function CarSettings() {
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [wheel, setWheel] = useState('');
  const [fuel, setFuel] = useState('');
  const [color, setColor] = useState('');
  const [firstSet, setFirstSet] = useState(false);

  const [animationName, setAnimationName] = useState('slideInRight');

  function saveData() {
    setAnimationName('fadeOut');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.settingsTitle}>coloque os dados do seu carro</Text>
      <Animatable.View
        animation={animationName}
        duration={1000}
        style={styles.animatedInput}>
        <TextInput
          placeholder="Marca"
          value={brand}
          style={[styles.input]}
          selectionColor="#353535"
          onChangeText={(text) => setBrand(text)}
        />
      </Animatable.View>
      <Animatable.View
        animation={animationName}
        duration={1000}
        style={styles.animatedInput}>
        <TextInput
          placeholder="Modelo"
          value={model}
          style={[styles.input]}
          selectionColor="#353535"
          onChangeText={(text) => setModel(text)}
        />
      </Animatable.View>
      <Animatable.View
        animation={animationName}
        duration={1000}
        style={styles.animatedInput}>
        <TextInput
          placeholder="Ano de fabricação"
          value={year}
          style={[styles.input]}
          selectionColor="#353535"
          onChangeText={(text) => setYear(text)}
        />
      </Animatable.View>
      <Animatable.View
        animation={animationName}
        duration={300}
        style={styles.animatedInput}>
        <TextInput
          placeholder="Tamanho da roda"
          value={wheel}
          onChangeText={(text) => setWheel(text)}
          selectionColor="#353535"
          style={[styles.input]}
        />
      </Animatable.View>
      <Animatable.View
        animation={animationName}
        duration={300}
        style={styles.animatedInput}>
        <TextInput
          placeholder="Tipo de combustível"
          value={fuel}
          onChangeText={(text) => setFuel(text)}
          style={[styles.input]}
          selectionColor="#353535"
        />
      </Animatable.View>
      <Animatable.View
        animation={animationName}
        duration={300}
        style={styles.animatedInput}>
        <TextInput
          placeholder="Cor"
          value={color}
          onChangeText={(text) => setColor(text)}
          style={[styles.input]}
          selectionColor="#353535"
        />
      </Animatable.View>
      <TouchableOpacity onPress={saveData} style={styles.touch}>
        <Text style={styles.touchText}>Salvar dados</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  animatedInput: {
    width: '75%',
  },
  input: {
    // width: '75%',
    borderWidth: 1,
    borderColor: '#404040',
    borderRadius: 12,
    marginTop: 8,
    padding: 8,
    paddingLeft: 14,
  },
  touch: {},
  touchText: {},
});
