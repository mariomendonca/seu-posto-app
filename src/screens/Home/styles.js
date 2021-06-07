import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import MapView from 'react-native-maps'
import { RectButton } from 'react-native-gesture-handler';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';


export const Container = styled.View`
  flex: 1;
  background: ${colors.light_gray};
`

export const Content = styled.View`
  padding: ${getStatusBarHeight()}px;
  flex: 1;
`

export const Title = styled.Text`
  font-family: ${fonts.bold};
  font-size: 30px;
` 

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`

export const InputArea = styled.View`
  height: 60px;
  border-radius: 30px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 50px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: ${colors.black};
  font-family: ${fonts.regular};
`;

export const LocationInput = styled.TextInput`
  background-color: ${colors.dark_gray};
  font-family: ${fonts.regular};
  color: ${colors.white};
  font-size: 14px;
  width: 210px;
  height: 46px;
  border-radius: 23px;
  margin-left: 5px;
  padding-left: 10px;
  padding-right: 10px;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
`;

export const RangeLocationArea = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

export const RangeLocationInput = styled.TouchableOpacity`
  background-color: ${colors.dark_gray};
  width: 100px;
  height: 46px;
  border-radius: 23px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 10px;
  padding-left: 10px;
`;

export const SelectRangeLocationArea = styled.View`
  height: 200px;
  width: 250px;
  background-color: ${colors.dark_gray};
  justify-content: center;
  align-items: center;
  border-radius: 50px;
`;

export const DistancesButton = styled.TouchableOpacity`
  flex: 1;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const SelectedRangeLocation = styled.Text`
  font-size: 14px;
  color: ${colors.white};
  font-family: ${fonts.regular};
`;

export const LocationText = styled.Text`
  font-family: ${fonts.regular};
  color: ${colors.dark_gray};
`

export const LocationContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 180px;
  height: 80px;
`

/* export const LocationButton = styled(RectButton)` */
export const LocationButton = styled.TouchableHighlight`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: red;
  border-radius: 20px;
`