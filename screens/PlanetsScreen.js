import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  TextInput,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import Planet from '../src/Components/planets/Planet';

export default function PlanetsScreen() {
  const [data, setData] = useState({items: []});
  const [copyData, setCopyData] = useState({items: []});
  const [loading, setLoading] = useState({isLoading: true});

  useEffect(() => {
    fetch('https://swapi.co/api/planets/')
      .then(res => res.json())
      .then(
        result => {
          setData({
            items: result.results,
          });
          setLoading({
            loading: false,
          });
          setCopyData({
            items: result.results,
          });
        },
        error => {
          setData({
            error,
          });
        },
      );
  }, []);

  const onSearch = text => {
    let newData =
      data && copyData.items.filter(item => item.name.indexOf(text) != -1);
    setData({items: newData});
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="search"
        onChangeText={value => onSearch(value)}></TextInput>
      {loading.isLoading && data.items ? (
        <ActivityIndicator
          style={{paddingTop: 40}}
          size="large"
          color="#0000ff"
        />
      ) : (
        <FlatList
          data={data && data.items}
          renderItem={({item}) => <Planet planet={item} />}
          keyExtractor={item => item.created}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 50,
  },
  input: {
    borderWidth: 2,
    borderColor: 'grey',
    textAlign: 'center',
  },
});
