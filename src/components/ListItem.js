import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

export default function ListItem(props) {
  return (
    <View style={[styles.container, {backgroundColor: props.itemBackground}]}>
      <Text style={styles.title}>{props.km}</Text>
      <Text>{props.date}</Text>
      <Text>{props.volume}</Text>
      <Text>{props.price}</Text>

      <TouchableOpacity onPress={props.deleteFunction}>
        <FeatherIcon name="trash-2" color="#d12638" size={16} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    padding: 2,
    marginTop: 3,
    marginHorizontal: 4,
    paddingHorizontal: 3,
  },
  title: {
    fontSize: 16,
    color: '#323232',
  },
});
