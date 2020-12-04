import {useLinkProps} from '@react-navigation/native';
import React, {useState, useEffec} from 'react';

import {
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  Text,
  Keyboard,
} from 'react-native';

import * as Animatable from 'react-native-animatable';

export default function StepOne(props) {
  const [animationName, setAnimationName] = useState('slideInRight');

  return (
    <View style={styles.container}>
      <Animatable.View
        animation={animationName}
        duration={1000}
        style={styles.animatedInput}
        onAnimationEnd={() => {
          if (animationName == 'fadeOut') props.firstTouch();
        }}>
        <TextInput
          placeholder="Marca"
          value={props.brand.value}
          style={styles.input}
          selectionColor="#353535"
          onChangeText={(text) => props.brand.func(text)}
        />
      </Animatable.View>
      <Animatable.View
        animation={animationName}
        duraio={1200}
        style={styles.animatedInput}
        onAnimationEnd={() => {
          if (animationName == 'fadeOut') props.firstTouch();
        }}>
        <TextInput
          placeholder="Modelo"
          value={props.model.value}
          style={styles.input}
          selectionColor="#353535"
          onChangeText={(text) => props.model.func(text)}
        />
      </Animatable.View>
      <Animatable.View
        animation={animationName}
        duration={1400}
        style={styles.animatedInput}
        onAnimationEnd={() => {
          if (animationName == 'fadeOut') props.firstTouch();
        }}>
        <TextInput
          placeholder="Ano de fabricação"
          value={props.year.value}
          style={styles.input}
          selectionColor="#353535"
          onChangeText={(text) => props.year.func(text)}
        />
      </Animatable.View>

      <Animatable.View
        animation={animationName}
        duration={1600}
        style={styles.animatedButton}>
        <TouchableOpacity
          style={styles.touch}
          onPress={() => {
            setAnimationName('fadeOut');
          }}>
          <Text style={styles.touchText}>Continuar</Text>
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
    fontSize: 16,
  },
  animatedButton: {
    width: '50%',
  },
  touch: {
    backgroundColor: '#da9021',
    borderRadius: 14,
    padding: 8,
    marginTop: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
  },
});
