import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import MapView from 'react-native-maps'

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

export const Input = styled.TextInput`
  border: 2px;
  background: ${colors.dark_gray};
  width: 90%;
  height: 50px;
  border-radius: 25px;
  padding:0 20px;
  font-size: 20px;
  margin: 20px auto;
  /* margin-top: 20px; */
  color: ${colors.light_gray};
  font-family: ${fonts.regular};
`