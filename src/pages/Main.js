import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
  StatusBar,
  TextInput,
  Keyboard,
  ToastAndroid,
} from 'react-native';

const {fixNumber} = require('numbers-allow-comma');

import Header from '../components/Header';
import DataDisplay from '../components/DataDisplayView';
import ListItem from '../components/ListItem';
import HeaderListComponent from '../components/HeaderListComponent';
import AverageButton from '../components/AverageButton';
import ActionButton from 'react-native-action-button';
import OilIcon from 'react-native-vector-icons/Entypo'; //Gota de óleo => drop
import GearIcon from 'react-native-vector-icons/FontAwesome'; //Engrenagens => gears
import FuelIcon from 'react-native-vector-icons/MaterialCommunityIcons'; //Abastecimento => oil

import PushNotification from 'react-native-push-notifications';
import AsyncStorage from '@react-native-community/async-storage';

export default function Main({navigation}) {
  const [carData, setCarData] = useState({});
  const [list, setList] = useState();
  const [modalOpen, setModalOpen] = useState(false);
  const [km, setKm] = useState();
  const [date, setDate] = useState();
  const [liters, setLiters] = useState();
  const [price, setPrice] = useState();
  const [average, setAverage] = useState(
    <AverageButton onPress={() => calculateAverage(list)} />,
  );

  useEffect(() => {
    checkForCar();
    getFuelData();
  }, []);

  async function checkForCar() {
    let data = await AsyncStorage.getItem('carProfile');

    setCarData(JSON.parse(data));
  }

  async function getFuelData() {
    try {
      const retrievedData = await AsyncStorage.getItem('fuelList');

      setList(JSON.parse(retrievedData) || []);
      calculateAverage(JSON.parse(retrievedData) || []);
    } catch (error) {
      console.log(`erro de dados${error}`);
      Alert.alert(
        'Erro ao recuperar dados',
        'Houve um problema ao recuperar seus dados, por favor reinicie o aplicativo',
      );
    }
  }

  function tryToNotify() {
    // PushNotification.localNotification({
    //   message: 'Teste 1',
    //   color: 'blue',
    //   title: 'CarCare - o seu amigo automotivo',
    //   autoCancel: true,
    // });

    console.log('notificacao criada');
  }

  function addItem() {
    if (date && price && liters && km) {
      let newItem = {
        km: km,
        price: price,
        date: date,
        volume: liters,
        key: km + Math.random(),
      };

      list.unshift(newItem);

      saveToStorage(list);
      Keyboard.dismiss();
      resetStates();
      setModalOpen(false);

      calculateAverage(list);
    } else {
      Alert.alert(
        'Campos incompletos',
        'Por favor, preencha todos os campos antes de prosseguir',
      );
    }
  }

  function resetStates() {
    setDate();
    setLiters();
    setKm();
    setPrice();
  }

  function deleteItem(key) {
    let newList = list.filter((item) => item.key != key);

    setList(newList);
    saveToStorage(newList);
    ToastAndroid.show('Abastecimento removido com sucesso', ToastAndroid.SHORT);
    calculateAverage(newList);
  }

  async function saveToStorage(itemToSave) {
    try {
      await AsyncStorage.setItem('fuelList', JSON.stringify(itemToSave));
    } catch (error) {
      Alert.alert(
        'Erro ao salvar',
        'Não foi possível salvar os dados, por favor tente novamente',
      );
    }
  }

  function calculateAverage(array) {
    if (array && array.length >= 2) {
      let newest = fixNumber(array[0].km.toString());
      let previous = fixNumber(array[1].km.toString());
      let fuel = fixNumber(array[0].volume.toString());

      let consumption = ((newest - previous) / fuel).toFixed(2);
      setAverage(`${consumption} km/L`);
    } else {
      Alert.alert(
        'Dados insuficientes',
        'Não foi possível calcular o consumo médio atual de seu veículo, por favor tente novamente mais tarde',
      );
      // setAverage('?');
    }
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
      <Header headerPress={() => navigation.navigate('CarProfile')} />
      {/* <DataDisplay
        title="Última revisão:"
        date="3/nov/2020"
        toast='Para criar uma revisão, clique no botão "+"'
      />
      <DataDisplay
        title="Última troca de óleo:"
        date="3/nov/2020"
        toast='Para criar uma troca de óleo, clique no botão "+"'
      /> */}

      <Text style={styles.fuelDataTitle}>Abastecimentos</Text>
      <Text style={styles.carEfficency}>Consumo médio: {average}</Text>

      <FlatList
        data={list}
        style={styles.list}
        ListHeaderComponent={<HeaderListComponent />}
        ListFooterComponent={<View style={{height: 90}} />}
        ListEmptyComponent={() => (
          <View style={styles.emptyListContainer}>
            <Text style={styles.emptyText}>
              Sem abstecimentos, clique no + para criar um novo
            </Text>
          </View>
        )}
        renderItem={({item, index}) => (
          <ListItem
            km={item.km}
            volume={item.volume}
            date={item.date}
            price={item.price}
            itemBackground={index % 2 == 0 ? '#c9c9c9' : '#fff'}
            deleteFunction={() => deleteItem(item.key)}
          />
        )}
      />

      <Modal
        animationType="slide"
        visible={modalOpen}
        onShow={() => {
          let day = new Date().getDate();
          let month = new Date().getMonth();
          let fulldate = `${day}/${month + 1}`;
          setDate(fulldate);
        }}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity
              style={styles.modalCancelButton}
              onPress={() => {
                Keyboard.dismiss();
                resetStates();
                setModalOpen(false);
              }}>
              <Text style={styles.modalCancelText}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.modalSaveButton} onPress={addItem}>
              <Text style={styles.modalSaveText}>Salvar</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.modalForm}>
            <Text style={styles.inputLabel}>Quilometragem:</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="km"
              value={km}
              keyboardType="number-pad"
              onChangeText={(text) => setKm(text)}
            />
            <Text style={styles.inputLabel}>Litros:</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Litros"
              value={liters}
              keyboardType="decimal-pad"
              onChangeText={(text) => setLiters(text)}
            />
            <Text style={styles.inputLabel}>Preço:</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Preço"
              value={price}
              keyboardType="decimal-pad"
              onChangeText={(text) => setPrice(text)}
            />
            <Text style={styles.inputLabel}>Data:</Text>
            <TextInput
              style={styles.modalInput}
              placeholder="Data - dia/numero do mes"
              value={date}
              onChangeText={(text) => setDate(text)}
            />
          </View>
        </View>
      </Modal>

      <ActionButton buttonColor="#da9021" bgColor="#00000045" spacing={15}>
        {/* <ActionButton.Item
          title="Nova troca de óleo"
          onPress={() => console.log('oleo')}
          size={50}>
          <OilIcon name="drop" size={24} color="#FFF" />
        </ActionButton.Item>

        <ActionButton.Item
          title="Nova Revisão"
          onPress={() => tryToNotify()}
          size={50}>
          <GearIcon name="gears" size={24} color="#FFF" />
        </ActionButton.Item> */}

        <ActionButton.Item
          title="Novo abastecimento"
          onPress={() => setModalOpen(true)}
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
    display: 'flex',
    fontSize: 15,
    marginLeft: 20,
    marginTop: 6,
    marginBottom: 6,
    color: '#404040',
    alignItems: 'center',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    borderColor: '#707070',
    borderWidth: 2,
    marginHorizontal: 10,
    marginTop: 8,
    marginBottom: 5,
    borderRadius: 14,
  },
  modalContainer: {
    flex: 1,
  },
  modalHeader: {
    flexDirection: 'row',
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  modalCancelButton: {
    backgroundColor: '#ffffff',
    borderColor: '#da9021',
    borderWidth: 2,
    width: '40%',
    padding: 6,
    paddingHorizontal: 9,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalCancelText: {
    fontWeight: 'bold',
    color: '#353535',
  },
  modalSaveButton: {
    backgroundColor: '#da9021',
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 6,
    paddingHorizontal: 9,
    borderRadius: 8,
  },
  modalSaveText: {
    fontWeight: 'bold',
    color: '#fafafa',
  },
  modalInput: {
    width: '80%',
    paddingLeft: 8,
    borderWidth: 1,
    borderColor: '#606060',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    padding: 8,
    marginTop: 3,
  },
  inputLabel: {
    marginTop: 8,
    marginLeft: '12%',
    fontSize: 16,
    color: '#555555',
    fontWeight: 'bold',
  },
  emptyListContainer: {
    maxWidth: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '30%',
    alignSelf: 'center',
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#909090',
    textAlign: 'center',
  },
});
