import React, { useState } from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  StatusBar
} from 'react-native'

import Header from '../components/Header'
import DataDisplay from '../components/DataDisplayView'
import ActionButton from 'react-native-action-button'
import OilIcon from 'react-native-vector-icons/Entypo'  //Gota de óleo => drop
import GearIcon from 'react-native-vector-icons/FontAwesome' //Engrenagens => gears
import FuelIcon from 'react-native-vector-icons/MaterialCommunityIcons' //Abastecimento => oil


export default function Main({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor='#FFF' barStyle='dark-content' />
      <Header headerPress={() => navigation.navigate('CarProfile')} />
      <ActionButton buttonColor='#cc6166' bgColor='#00000045' spacing={15} >
        <ActionButton.Item title='Nova troca de óleo' onPress={() => console.log('oleo')} size={50}>
          <OilIcon name='drop' size={24} color='#FFF'/>
        </ActionButton.Item>

        <ActionButton.Item title='Nova Revisão' onPress={() => console.log('revisao')} size={50}>
          <GearIcon name='gears' size={24} color='#FFF' />
        </ActionButton.Item>

        <ActionButton.Item title='Novo abastecimento' onPress={() => console.log('abasteciemnto')} size={50}>
          <FuelIcon name='oil' size={24} color='#FFF' />
        </ActionButton.Item>
      </ActionButton>

      <DataDisplay title='última revisão:' date='3/nov/2020'/>
      <DataDisplay title='última troca de óleo:' date='3/nov/2020'/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF'
  }
})
