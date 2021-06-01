import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import MapView from 'react-native-maps'

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';


export const Container = styled.View`
  flex: 1;
  background: ${colors.light_gray};
  /* padding-top: ${getStatusBarHeight()}px; */
`

export const Content = styled.View`
  padding: 0 20px;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${fonts.bold};
  font-size: 30px;
` 

export const Map = styled(MapView)`
  width: 100%;
  height: 100%;
`