import React from 'react';
import styled from 'styled-components/native';

import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
    flex:1;
    background: ${colors.light_gray};
`;

export const Content = styled.View`
  padding: 0 20px;
  flex: 1;
  display: flex;

  justify-content: center;
  align-items: center;
`