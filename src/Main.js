import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';
import data from './data/data.json';
//
import {RestaurantItem} from './components';
const Main = () => {
  return (
    <SafeAreaView>
      <View>
        <FlatList
          keyExtractor={(item, index) => index.toString()}
          data={data}
          renderItem={({item}) => <RestaurantItem restaurant={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

export {Main};
