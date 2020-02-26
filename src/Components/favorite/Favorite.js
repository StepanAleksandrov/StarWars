import React from 'react';
import {TouchableOpacity, Text, Image, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default function Favorite({params, onPress}) {
  const navigation = useNavigation();
  const person = JSON.parse(params[1]);

  const removeFavorite = async () => {
    try {
      await AsyncStorage.removeItem(params[0]);
      onPress();
    } catch (error) {
      console.error('Error saving data');
    }
  };

  const renderLeftActions = () => {
    return (
      <View style={styles.viewRemove}>
        <Text style={styles.viewText}>Remove</Text>
      </View>
    );
  };

  return (
    <Swipeable
      renderLeftActions={() => renderLeftActions()}
      onSwipeableLeftWillOpen={() => removeFavorite()}>
      {person && person.name ? (
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
      ) : null}
    </Swipeable>
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
  viewRemove: {
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 10,
    marginVertical: 6,
    marginLeft: 12,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 0.95,
  },
  viewText: {
    fontSize: 24,
    color: 'white',
  },
  title: {
    fontSize: 22,
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
