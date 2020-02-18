import React from 'react';
import {
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Button,
  View,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';

export default function Favorite(params) {
  const navigation = useNavigation();
  const person = JSON.parse(params.person[1]);

  const removeFavorite = async () => {
    try {
      await AsyncStorage.removeItem(params.person[0]);
    } catch (error) {
      console.error('Error saving data');
    }
  };

  return (
    <TouchableOpacity
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
        onPress={() => removeFavorite()}
        style={styles.buttonRemove}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>X</Text>
        </View>
      </TouchableOpacity>
    </TouchableOpacity>
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
    flex: 1,
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
