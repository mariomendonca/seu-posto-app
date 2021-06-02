import React from 'react';
import styled from 'styled-components/native';

import colors from '../../src/styles/colors';

import HomeIcon from '../assets/svg/location.svg';
import FilterIcon from '../assets/svg/gasoline-pump.svg';

const TabArea = styled.View`
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

const TabItem = styled.TouchableOpacity`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

const MainItem = styled.TouchableOpacity`
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

export default ({state, navigation}) =>{

    function goTo(screenName){
        navigation.navigate(screenName); //Entender o porque do arrow function do Goto funcion e a função direta ñ 
    }

    return(
        <TabArea>
            <TabItem onPress={()=>goTo('Filter')}> 
                <FilterIcon width="20" height="20" fill="#ba181b"/>
            </TabItem>
            
            <MainItem onPress={()=>goTo('Home')}>
                <HomeIcon style={{shadowOffset: {width: 2, height: 2}, shadowOpacity: 1, shadowColor:'black'}} width="40" height="43" fill="#FFF"/>
            </MainItem>

            <TabItem>
                <HomeIcon width="30" height="33" fill="#FFF"/>
            </TabItem>
        </TabArea>
    );
}