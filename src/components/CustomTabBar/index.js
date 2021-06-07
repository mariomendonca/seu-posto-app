import React from 'react';
import { 
    TabArea,
    TabItem,
    MainItem,
} from './styles'

import { Entypo, FontAwesome5, FontAwesome } from '@expo/vector-icons';

import colors from '../../styles/colors';

export default ({state, navigation}) =>{

    function goTo(screenName){
        navigation.navigate(screenName);
    }
    return(
        <TabArea>
            <TabItem onPress={() =>goTo('Home')}> 
                <Entypo style={{opacity: state.index===0? 1 : 0.5}}  name="home" size={24} color={colors.red} />
            </TabItem>

            <TabItem onPress={() =>goTo('Filter')}> 
                <FontAwesome5 style={{opacity: state.index===1? 1 : 0.5}} name="gas-pump" size={24} color={colors.red} />
            </TabItem>
            
            <MainItem onPress={() =>goTo('Home')}>
                <Entypo style={{opacity: state.index===0? 1 : 0.5}} name="location" size={32} color={colors.white} />
            </MainItem>

            <TabItem onPress={() => goTo('Favorites')}>
                <Entypo style={{opacity: state.index===2? 1 : 0.5}} name="heart" size={24} color={colors.red} />
            </TabItem>

            <TabItem onPress={() => goTo('UserProfile')}>
                <FontAwesome style={{opacity: state.index===3? 1 : 0.5}} name="user-circle" size={24} color={colors.red} />
            </TabItem>
        </TabArea>
    );
}