import {StyleSheet, Dimensions} from 'react-native';

const CardStyle = StyleSheet.create({
  container: {
    flex: 1,
    margin: 7,
    backgroundColor: '#eceff1',
    borderRadius: 10,
  },
  imageContainer: {
    backgroundColor: 'red',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width / 1.04,
    height: Dimensions.get('window').height / 2.7,
  },
  subView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  name: {
    fontWeight: 'bold',
  },
  location: {
    fontWeight: '100',
    color: 'gray',
  },
  likes: {
    fontWeight: 'bold',
  },
});

export default CardStyle;
