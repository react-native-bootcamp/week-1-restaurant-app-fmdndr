import React from 'react';
import {View, Text, Image} from 'react-native';

// "id": 15333482,
// "name": "Pago Restaurant",
// "image": "https://media-cdn.tripadvisor.com/media/photo-o/15/7a/f4/02/pago-balcony.jpg",
// "location": "Shanghai/Çin",
// "likes": 122,
// "isPopular": false,
// "isOpenNow": true

import styles from '../assets/styles';
import fire from '../assets/image/fireicon.png';

const RestaurantItem = (props) => {
  let popular = props.restaurant.isPopular ? fire : null;
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: props.restaurant.image}} style={styles.image} />
      </View>
      <View style={styles.subView}>
        <View>
          <Text style={styles.name}>{props.restaurant.name}</Text>
          <Text style={styles.location}>{props.restaurant.location}</Text>
        </View>
        <View>
          <Text style={styles.likes}>
            <Image source={popular} style={{width: 24, height: 24}} />
            {props.restaurant.likes}
          </Text>
        </View>
      </View>
    </View>
  );
};

export {RestaurantItem};
