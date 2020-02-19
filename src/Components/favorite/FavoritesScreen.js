import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function FavoritesScreen() {
  let [data, setData] = useState({items: []});
  const navigation = useNavigation();

  useEffect(() => {
    const getStorageFavorites = async () => {
      try {
        let values = await AsyncStorage.getAllKeys()
          .then(response => AsyncStorage.multiGet(response))
          .then(response => {
            return response.map(result => result);
          });
        setData({items: values});
      } catch (error) {
        console.log('Error saving data');
      }
    };
    getStorageFavorites();
  }, [data.items]);

  const removeFavorite = async (item, index) => {
    // try {
    //   setData({items: data.items.slice(index, 1)});
    //   await AsyncStorage.removeItem(item[0]);
    // } catch (error) {
    //   console.error('Error saving data');
    // }
  };

  const favorites = () =>
    data.items.map((item, index) => {
      let person = JSON.parse(item[1]);
      return (
        <TouchableOpacity
          key={index}
          onPress={() => {
            navigation.navigate('PersonInfo', {person});
          }}
          style={styles.item}>
          <Image
            source={{
              uri:
                'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
            }}
            style={styles.image}></Image>
          <Text style={styles.title}>{person.name}</Text>
          <TouchableOpacity
            onPress={() => removeFavorite(item, index)}
            style={styles.buttonRemove}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>X</Text>
            </View>
          </TouchableOpacity>
        </TouchableOpacity>
      );
    });

  return (
    <View>
      <FlatList
        data={data.items}
        renderItem={() => favorites()}
        keyExtractor={item => item[0]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#5f71ab',
    borderRadius: 20,
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 50,
    justifyContent: 'center',
    width: 30,
    height: 30,
  },
  buttonRemove: {
    padding: 10,
    flexDirection: 'row',
    flex: 0.1,
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
  },
  title: {
    fontSize: 24,
    marginLeft: 20,
    alignSelf: 'center',
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
