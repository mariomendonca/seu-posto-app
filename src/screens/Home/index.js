import React from 'react';
import { Marker } from 'react-native-maps'

import {
  Container,
  Map
} from './styles';

export function Home() {

  const markers = [
    {
      coordinate : {
        latitude: -8.0462395,
        longitude: -34.8954714,  
      },
      title: 'posto 1',
      description: 'muito bom'
    },
    {
      coordinate : {
        latitude: -6.0,
        longitude: -38.0,  
      },
      title: 'posto 2',
      description: 'muito bom'
    },
  ]

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
          {markers.map((item, index) => (
            <Marker 
              key={index}
              coordinate={item.coordinate}
              title={item.title}
              description={item.description}
            />
          ))}

        </Map>
    </Container>
  )
}
