import React, { useState, useEffect } from 'react';
import {Text, TouchableNativeFeedbackBase, TouchableOpacityBase} from 'react-native';
import { Marker, Callout } from 'react-native-maps'
import { Feather, Entypo } from '@expo/vector-icons' 
import { useNavigation } from '@react-navigation/native'

import {
  Container,
  Map,

  InputArea,
  LocationInput,
  RangeLocationArea,
  RangeLocationInput,
  SelectRangeLocationArea,
  SelectedRangeLocation,
  DistancesButton,

  LocationText,
  LocationContainer,
  LocationButton
} from './styles';

import colors from '../../styles/colors'

import MapIcon from '../../assets/mapMarker64.png'
import api from '../../services/api';

export function Home() {
  const [locations, setLocations] = useState([])
  
  const [openDistancePicker, setOpenDistancePicker] = useState(false);
  const [selectedDistance, setSelectedDistance] = useState(5);

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

  function OpenDistancePicker(){
    setOpenDistancePicker(!openDistancePicker);
  }

  return (
    <Container>
        {openDistancePicker? 
          <RangeLocationArea>
            <SelectRangeLocationArea>

              <DistancesButton onPress={() => {setSelectedDistance(5); OpenDistancePicker()}}>
                <SelectedRangeLocation>5km</SelectedRangeLocation>
              </DistancesButton>

              <DistancesButton onPress={() => {setSelectedDistance(10); OpenDistancePicker()}}>
                <SelectedRangeLocation>10km</SelectedRangeLocation>
              </DistancesButton>

              <DistancesButton onPress={() => {setSelectedDistance(15); OpenDistancePicker()}}>
                <SelectedRangeLocation>15km</SelectedRangeLocation>
              </DistancesButton>

              <DistancesButton onPress={() => {setSelectedDistance(20); OpenDistancePicker()}}>
                <SelectedRangeLocation>20km</SelectedRangeLocation>
              </DistancesButton>

            </SelectRangeLocationArea>
          </RangeLocationArea>
          : null}

        <InputArea>
          <Entypo name="location" size={24} color={colors.red} />
          <LocationInput 
            placeholder="Seu endereço aqui!"
            placeholderTextColor= {colors.white}
          />

          <RangeLocationInput onPress={() => OpenDistancePicker()}>
              <SelectedRangeLocation>{selectedDistance}km</SelectedRangeLocation>
              <Entypo name="chevron-down" size={24} color={colors.red} />
            </RangeLocationInput>
        </InputArea>

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
