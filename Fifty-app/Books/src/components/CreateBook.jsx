import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Button,
  TextInput,
} from 'react-native';

import StarRating from 'react-native-star-rating-widget';

const CreateBook = () => {
  const [numberStars, setNumberStars] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.imageAndBookContainer}>
        <View style={styles.cameraContainer}>
          <Text>Camara</Text>
        </View>
        <View style={styles.bookContainer}>
          <TextInput style={styles.input} placeholder="Book Title" />
          <TextInput style={styles.input} placeholder="Book Authors" />
        </View>
      </View>
      <View style={styles.comentaryContainer}>
        <Text style={[styles.titleText]}>Comment</Text>
        <TextInput style={styles.input} placeholder="Comment" />
      </View>
      <View style={styles.RaitingContainer}>
        <Text style={styles.titleText}>raiting</Text>
        <StarRating
          rating={numberStars}
          onChange={setNumberStars}
          maxStars={5}
        />
      </View>
      <View
        style={{
          flex: 0.2,
          flexDirection: 'column',
          justifyContent: 'center',
          paddingHorizontal: 15,
        }}>
        <Button title="Save" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  imageAndBookContainer: {
    flex: 0.4,
    flexDirection: 'row',
  },
  cameraContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B05E2F',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    textTransform: 'capitalize',
    marginTop: 10,
    marginBottom: 30,
  },
  input: {
    backgroundColor: '#e5e5e5',
    borderRadius: 10,
    color: '#000',
    fontWeight: '300',
  },
  bookContainer: {
    flex: 1,
    justifyContent: 'space-evenly',
    backgroundColor: '#F5B841',
  },
  comentaryContainer: {
    flex: 0.4,
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#F4FF52',
  },
  RaitingContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#53FF45',
  },
});

export default CreateBook;
