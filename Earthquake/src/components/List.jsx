import React, {useState, useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import Card from './Card';
import axios from 'axios';
import uuid from 'react-native-uuid';

const EarthquakeList = props => {
  const {orderPriority} = props.route.params;
  const {navigation} = props;
  const [earthquakes, setEarthquakes] = useState([
    // {magnitud: 8, city: 'jaltipan'},
    // {magnitud: 6.8, city: 'minatitlan'},
    // {magnitud: 7, city: 'coatzacoalcos'},
  ]);

  const url =
    'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson';
  const getData = () => {
    const temporalData = [];
    axios.get(url).then(response => {
      const data = response.data;
      Object.values(data.features).forEach(item => {
        const current = {};
        current.id = item.id;
        current.magnitud = item.properties.mag;
        current.city = item.properties.place.split('of')[1]
          ? item.properties.place.split('of')[1]
          : item.properties.place;
        current.tsunami = item.properties.tsunami;
        current.cordinates = item.geometry.coordinates;
        current.place = item.properties.title;
        current.date = `${new Date(item.properties.time)}`;
        current.type = item.properties.type;
        current.aler = item.properties.alert;
        current.typemag = item.properties.magType;
        temporalData.push(current);
      });

      if (temporalData.length) {
        setEarthquakes(temporalData);
      }
      response.data = {};
    });
  };

  useEffect(() => {
    if (!earthquakes.length) {
      getData();
      // console.log(orderPriority);
    } else {
      const intervalId = setInterval(() => {
        console.log(uuid.v4());
        getData();
      }, 30000);
      return () => clearInterval(intervalId);
    }
  }, [earthquakes]);

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={earthquakes}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <Card data={item} navigation={navigation} />;
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default EarthquakeList;
