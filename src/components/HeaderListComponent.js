import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';

export default function HeaderListComponent() {
  return (
    <View style={styles.container}>
      <Text>Km</Text>
      <Text>Data</Text>
      <Text>Litros</Text>
      <Text>Preço - R$</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 4,
    paddingBottom: 4,
    marginBottom: 5,
    paddingRight: '5%',
    borderBottomColor: '#a9a9a9',
    borderBottomWidth: 1,
  },
});
