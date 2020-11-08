import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  ToastAndroid,
  View,
  TouchableWithoutFeedback,
} from 'react-native';

export default function DataDisplayView(props) {
  function toastMessage() {
    return ToastAndroid.show(props.toast, ToastAndroid.LONG);
  }

  return (
    <TouchableWithoutFeedback onPress={() => toastMessage()}>
      <View style={styles.container}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.date}>{props.date}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    marginTop: 18,
    padding: 12,
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 14,
  },
  title: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
  },
});
