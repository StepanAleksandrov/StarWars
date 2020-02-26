import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default function PersonInfo({route}) {
  let {person} = route.params;

  const addToFavorites = async () => {
    try {
      await AsyncStorage.setItem(`${route.key}`, JSON.stringify(person));
    } catch (error) {
      console.error('Error saving data');
    }
  };

  return (
    <View style={styles.item}>
      <View style={styles.container}>
        <Image
          source={{
            uri:
              'https://www.pavilionweb.com/wp-content/uploads/2017/03/man-300x300.png',
          }}
          style={styles.image}></Image>
        <Text style={styles.title}>
          Name: <Text style={styles.subTitle}>{person.name}</Text>
        </Text>
        <Text style={styles.title}>
          Birth year: <Text style={styles.subTitle}>{person.birth_year}</Text>
        </Text>
        <Text style={styles.title}>
          Eye color: <Text style={styles.subTitle}>{person.eye_color}</Text>
        </Text>
        <Text style={styles.title}>
          Gender: <Text style={styles.subTitle}>{person.gender}</Text>
        </Text>
        <Text style={styles.title}>
          Hair color: <Text style={styles.subTitle}>{person.hair_color}</Text>
        </Text>
        <Text style={styles.title}>
          Height: <Text style={styles.subTitle}>{person.height}</Text>
        </Text>
        <Text style={styles.title}>
          Mass: <Text style={styles.subTitle}>{person.mass}</Text>
        </Text>
        <Text style={styles.title}>
          Skin color: <Text style={styles.subTitle}>{person.skin_color}</Text>
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Add to favorites" onPress={() => addToFavorites()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 30,
  },
  buttonContainer: {
    width: 170,
    alignSelf: 'center',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Times New Roman',
    color: 'black',
  },
  subTitle: {
    fontSize: 20,
    fontFamily: 'Times New Roman',
    color: 'grey',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
