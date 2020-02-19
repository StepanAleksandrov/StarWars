import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Favorite from './Favorite';

export default function FavoritesScreen() {
  let [data, setData] = useState({items: []});

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
  }, [data]);

  return (
    <View>
      <FlatList
        data={data.items}
        renderItem={({item}) => <Favorite person={item} />}
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
});
