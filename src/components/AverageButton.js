import {useLinkProps} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export default function AverageButton(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={props.onPress}>
        <Icon name="reload1" color="#101010" size={14} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
