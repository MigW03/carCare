import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  FlatList,
  StatusBar,
} from 'react-native';

import Header from '../components/Header';
import DataDisplay from '../components/DataDisplayView';
import ActionButton from 'react-native-action-button';
import OilIcon from 'react-native-vector-icons/Entypo'; //Gota de óleo => drop
import GearIcon from 'react-native-vector-icons/FontAwesome'; //Engrenagens => gears
import FuelIcon from 'react-native-vector-icons/MaterialCommunityIcons'; //Abastecimento => oil

export default function Main({navigation}) {
  const [list, setList] = useState([
    {title: 'teste 1', key: '1'},
    {title: 'teste 2', key: '2'},
    {title: 'teste 3', key: '3'},
    {title: 'teste 4', key: '4'},
  ]);

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Header headerPress={() => navigation.navigate('CarProfile')} />
      <DataDisplay
        title="Última revisão:"
        date="3/nov/2020"
        toast='Para criar uma revisão, clique no botão "+"'
      />
      <DataDisplay
        title="Última troca de óleo:"
        date="3/nov/2020"
        toast='Para criar uma troca de óleo, clique no botão "+"'
      />

      <Text style={styles.fuelDataTitle}>Abastecimentos</Text>
      <Text style={styles.carEfficency}>Consumo médio do carro: 12km/L</Text>

      <ActionButton buttonColor="#cc6166" bgColor="#00000045" spacing={15}>
        <ActionButton.Item
          title="Nova troca de óleo"
          onPress={() => console.log('oleo')}
          size={50}>
          <OilIcon name="drop" size={24} color="#FFF" />
        </ActionButton.Item>

        <ActionButton.Item
          title="Nova Revisão"
          onPress={() => console.log('revisao')}
          size={50}>
          <GearIcon name="gears" size={24} color="#FFF" />
        </ActionButton.Item>

        <ActionButton.Item
          title="Novo abastecimento"
          onPress={() => console.log('abasteciemnto')}
          size={50}>
          <FuelIcon name="oil" size={24} color="#FFF" />
        </ActionButton.Item>
      </ActionButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },

  fuelDataTitle: {
    fontSize: 24,
    marginTop: 12,
    marginLeft: 20,
    color: '#454545',
  },
  carEfficency: {
    fontSize: 15,
    marginLeft: 20,
    marginTop: 6,
    color: '#404040',
  },
});
