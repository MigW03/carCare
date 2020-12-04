import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Keyboard,
  TextInput,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function StepTwo(props) {
  const [animationName, setAnimationName] = useState('slideInRight');

  return (
    <View style={styles.container}>
      <Animatable.View
        animation={animationName}
        duration={1000}
        style={styles.animatedInput}>
        <TextInput
          placeholder="Tamanho da roda"
          value={props.wheel.value}
          onChangeText={(text) => props.wheel.func(text)}
          selectionColor="#353535"
          style={styles.input}
        />
      </Animatable.View>
      <Animatable.View
        animation={animationName}
        duration={1200}
        style={styles.animatedInput}>
        <TextInput
          placeholder="Tipo de combustível"
          value={props.fuel.value}
          onChangeText={(text) => props.fuel.func(text)}
          style={styles.input}
          selectionColor="#353535"
        />
      </Animatable.View>
      <Animatable.View
        animation={animationName}
        duration={1400}
        style={styles.animatedInput}>
        <TextInput
          placeholder="Cor"
          value={props.color.value}
          onChangeText={(text) => props.color.func(text)}
          style={styles.input}
          selectionColor="#353535"
        />
      </Animatable.View>

      <Animatable.View animation={animationName} duration={1600}>
        <TouchableOpacity style={styles.touch} onPress={props.secondTouch}>
          <Text style={styles.touchText}>Finalizar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
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
});
