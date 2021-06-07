import React from 'react';
import styled from 'styled-components/native';

import colors from '../../styles/colors'

export const TabArea = styled.View`
    background: ${colors.dark_gray};
    height: 60px;
    left: 0;
    right: 0;
    bottom: 0;
    margin-left: 10px;
    margin-right: 10px;
    margin-bottom: 20px;
    border-radius: 20px;
    position: absolute;
    flex-direction: row;
`;

export const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const MainItem = styled.TouchableOpacity`
    background: ${colors.yellow};
    width: 70px;
    height: 70px;
    border: 5px;
    border-radius: 35px;
    border-color: ${colors.dark_gray};
    justify-content: center;
    align-items: center;
    margin-top: -20px;
`;