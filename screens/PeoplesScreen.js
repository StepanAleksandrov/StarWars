import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet, ActivityIndicator} from 'react-native';
import Person from '../src/Components/peoples/Person';
import {TextInput} from 'react-native-gesture-handler';

export default function PeoplesScreen() {
  const [data, setData] = useState({items: []});
  const [copyData, setCopyData] = useState({items: data});
  const [loading, setLoading] = useState({isLoading: true});

  useEffect(() => {
    fetch('https://swapi.co/api/people/')
      .then(res => res.json())
      .then(
        result => {
          setData({
            items: result.results,
          });
          setLoading({
            loading: !loading,
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
  }, [data]);

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
          renderItem={({item}) => <Person person={item} />}
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
