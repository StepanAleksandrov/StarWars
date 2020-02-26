import React, {useState, useEffect} from 'react';
import {View, FlatList, ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Favorite from '../src/Components/favorite/Favorite';

export default function FavoritesScreen() {
  const [data, setData] = useState({items: []});
  const [loading, setLoading] = useState({isLoading: false});

  useEffect(() => {
    const getStorageFavorites = async () => {
      try {
        setLoading({
          loading: !loading,
        });
        const values = await AsyncStorage.getAllKeys()
          .then(response => AsyncStorage.multiGet(response))
          .then(response => {
            return response.map(result => result);
          });
        setData({items: values});
        setLoading({
          loading: !loading,
        });
      } catch (error) {
        console.log('Error saving data');
      }
    };
    getStorageFavorites();
  }, [data]);

  function removeFavorite(index) {
    let copyData = data.items;
    copyData.splice(index, 1);
    setData({items: copyData});
  }

  return (
    <View>
      {loading.isLoading && data.items ? (
        <ActivityIndicator
          style={{paddingTop: 40}}
          size="large"
          color="#0000ff"
        />
      ) : (
        <FlatList
          data={data.items}
          renderItem={({item, index}) => (
            <Favorite params={item} onPress={() => removeFavorite(index)} />
          )}
          keyExtractor={item => item[0]}
          extraData={data && data}
        />
      )}
    </View>
  );
}
