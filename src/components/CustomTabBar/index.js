import React from 'react';
import { 
    TabArea,
    TabItem,
    MainItem,
} from './styles'

import HomeIcon from '../../assets/svg/location.svg';
import FilterIcon from '../../assets/svg/gasoline-pump.svg';

export default ({state, navigation}) =>{

    function goTo(screenName){
        navigation.navigate(screenName);
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