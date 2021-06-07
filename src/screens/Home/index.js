import React, { useState, useEffect } from 'react';
import { Marker } from 'react-native-maps'

import {
  Container,
  Map,
  Input,
} from './styles';

import MapIcon from '../../assets/mapMarker64.png'
import api from '../../services/api';

export function Home() {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    async function fetchLocations() {
      const { data }  = await api.get('/locations')
      setLocations(data)
    }
    fetchLocations()
  }, []);

  return (
    <Container>
        <Map 
          initialRegion={{
            latitude: -8.0462395,
            longitude: -34.8954714,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {locations.map((item, index) => (
            <Marker 
              key={index}
              coordinate={item.coordinate}
              title={item.title}
              description={item.description}
              image={MapIcon}
            />
          ))}

          <Input />
        </Map>
    </Container>
  )
}
