import React, { useState, useEffect } from 'react';
import { Marker, Callout } from 'react-native-maps'
import { Feather } from '@expo/vector-icons' 
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Map,
  Input,
  LocationText,
  LocationContainer,
  LocationButton
} from './styles';

import MapIcon from '../../assets/mapMarker64.png'
import api from '../../services/api';

export function Home() {
  const [locations, setLocations] = useState([])

  const { navigate } = useNavigation()

  useEffect(() => {
    async function fetchLocations() {
      const { data }  = await api.get('/locations')
      setLocations(data)
    }
    fetchLocations()
  }, []);

  function NavigateToLocation(id) {
    navigate('location')
  }

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
              // title={item.title}
              // description={item.description}
              image={MapIcon}
            >
              <Callout onPress={() => NavigateToLocation()}>
                <LocationContainer>
                  <LocationText>
                    Ir para o {item.title} 
                  </LocationText>
                  <LocationButton onPress={() => NavigateToLocation()}>
                    <Feather name='arrow-right' size={25}/>
                  </LocationButton>
                </LocationContainer>
              </Callout>
            </Marker>
          ))}
        </Map>
    </Container>
  )
}
