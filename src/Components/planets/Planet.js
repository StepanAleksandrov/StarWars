import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function Planet({planet}) {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: 'https://naukatv.ru/upload/files/shutterstock_365438087.jpg',
        }}
        style={styles.image}></Image>
      <Text style={styles.title}>{planet.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#7fcd91',
    borderRadius: 20,
    padding: 10,
    marginVertical: 6,
    marginHorizontal: 12,
    flexDirection: 'row',
    flex: 1,
  },
  title: {
    fontSize: 24,
    marginLeft: 20,
    alignSelf: 'center',
    color: '#5b5656',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
