import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Person({person}) {
  const navigation = useNavigation();

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
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#bbded6',
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
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});
